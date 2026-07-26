const fs = require('fs');
const path = require('path');

const appJsPath = path.join(__dirname, 'app.js');
let appJsContent = fs.readFileSync(appJsPath, 'utf8');

const urlsMatch = appJsContent.match(/const SHEET_URLS = ({[\s\S]*?});/);
if (!urlsMatch) {
  console.error("Could not find SHEET_URLS in app.js");
  process.exit(1);
}

const sheetUrlsCode = urlsMatch[1];
const SHEET_URLS = new Function(`return ${sheetUrlsCode}`)();

const startFallback = appJsContent.indexOf('const FALLBACK_DATA = {');
const startChangelog = appJsContent.indexOf('\nconst CHANGELOG = [');
const startState = appJsContent.indexOf('const STATE = {');

if (startFallback === -1 || startState === -1) {
  console.error("Could not find FALLBACK_DATA or STATE blocks.");
  process.exit(1);
}

const endFallback = startChangelog !== -1 ? startChangelog : startState;

const oldFallbackCode = appJsContent.substring(startFallback + 'const FALLBACK_DATA = '.length, endFallback).trim().replace(/;$/, '');
const OLD_FALLBACK_DATA = new Function(`return ${oldFallbackCode}`)();

let OLD_CHANGELOG = [];
if (startChangelog !== -1) {
  const oldChangelogCode = appJsContent.substring(startChangelog + '\nconst CHANGELOG = '.length, startState).trim().replace(/;$/, '');
  try {
    OLD_CHANGELOG = new Function(`return ${oldChangelogCode}`)() || [];
  } catch (e) {
    OLD_CHANGELOG = [];
  }
}

function parseCSV(text) {
  const lines = [];
  let row = [''];
  let inQuotes = false;

  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    const next = text[i + 1];

    if (c === '"') {
      if (inQuotes && next === '"') {
        row[row.length - 1] += '"';
        i++;
      } else {
        inQuotes = !inQuotes;
      }
    } else if (c === ',' && !inQuotes) {
      row.push('');
    } else if ((c === '\r' || c === '\n') && !inQuotes) {
      if (c === '\r' && next === '\n') i++;
      lines.push(row);
      row = [''];
    } else {
      row[row.length - 1] += c;
    }
  }

  if (row.length > 1 || row[0] !== '') {
    lines.push(row);
  }
  if (lines.length === 0) return [];

  const headers = lines[0].map(h => h.trim());
  const data = [];

  for (let i = 1; i < lines.length; i++) {
    const values = lines[i];
    if (values.length === 1 && values[0].trim() === '') continue;

    const obj = {};
    for (let j = 0; j < headers.length; j++) {
      const header = headers[j];
      const val = values[j] !== undefined ? values[j].trim() : '';
      if (header) {
        obj[header] = val;
      }
    }
    data.push(obj);
  }

  return data;
}

function getProp(obj, possibleKeys) {
  const keys = Object.keys(obj);
  for (const pKey of possibleKeys) {
    const found = keys.find(k => k.toLowerCase().replace(/\s+/g, '') === pKey.toLowerCase().replace(/\s+/g, ''));
    if (found) return obj[found];
  }
  for (const pKey of possibleKeys) {
    const found = keys.find(k => k.toLowerCase().replace(/\s+/g, '').includes(pKey.toLowerCase().replace(/\s+/g, '')));
    if (found) return obj[found];
  }
  return '';
}

function generateUpdates(oldData, newData) {
  const updates = [];
  const listsToTrack = [
    { key: 'demonlist', name: 'Demonlist', nameField: ['level', 'name'] },
    { key: 'impossible', name: 'Impossible', nameField: ['levels', 'level', 'name'] }
  ];

  listsToTrack.forEach(listInfo => {
    const currentList = newData[listInfo.key] || [];
    const fallbackList = oldData[listInfo.key] || [];

    const fallbackMap = new Map();
    fallbackList.forEach((item, idx) => {
      const name = getProp(item, listInfo.nameField);
      if (name) fallbackMap.set(name.toLowerCase().trim(), { rank: idx + 1, item });
    });

    currentList.forEach((item, idx) => {
      const name = getProp(item, listInfo.nameField);
      if (!name) return;

      const currentRank = idx + 1;
      const oldItem = fallbackMap.get(name.toLowerCase().trim());

      const getAboveBelow = (index) => {
        const above = index > 0 ? getProp(currentList[index - 1], listInfo.nameField) : null;
        const below = index < currentList.length - 1 ? getProp(currentList[index + 1], listInfo.nameField) : null;
        return { above, below };
      };

      if (!oldItem) {
        updates.push({ type: 'add', list: listInfo.name, name, newRank: currentRank, ...getAboveBelow(idx) });
      } else {
        const oldRank = oldItem.rank;
        if (currentRank < oldRank) {
          updates.push({ type: 'up', list: listInfo.name, name, oldRank, newRank: currentRank, ...getAboveBelow(idx) });
        } else if (currentRank > oldRank) {
          updates.push({ type: 'down', list: listInfo.name, name, oldRank, newRank: currentRank, ...getAboveBelow(idx) });
        }
      }
    });
  });

  return updates;
}

const months = ['ЯНВАРЯ', 'ФЕВРАЛЯ', 'МАРТА', 'АПРЕЛЯ', 'МАЯ', 'ИЮНЯ', 'ИЮЛЯ', 'АВГУСТА', 'СЕНТЯБРЯ', 'ОКТЯБРЯ', 'НОЯБРЯ', 'ДЕКАБРЯ'];
function getTodayString() {
  const d = new Date();
  return `${d.getDate()} ${months[d.getMonth()]}, ${d.getFullYear()}`;
}

async function main() {
  const NEW_FALLBACK_DATA = { ...OLD_FALLBACK_DATA };
  let hasErrors = false;

  for (const [name, url] of Object.entries(SHEET_URLS)) {
    console.log(`Fetching ${name}...`);
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }
      const text = await response.text();
      const parsed = parseCSV(text);

      const validData = parsed.filter(item => {
        if (name === 'demonlist') return !!getProp(item, ['level', 'name']);
        if (name === 'impossible') return !!getProp(item, ['levels', 'level', 'name']);
        if (name === 'slayers') return !!getProp(item, ['slayers', 'slayer', 'player']);
        if (name === 'future') return !!getProp(item, ['levels', 'level', 'name']);
        if (name === 'silent') return !!getProp(item, ['name']);
        if (name === 'cll') return !!getProp(item, ['name']);
        return true;
      });

      NEW_FALLBACK_DATA[name] = validData;
      console.log(` -> Parsed ${validData.length} valid items.`);
    } catch (e) {
      console.error(` -> Error processing ${name}:`, e.message);
      hasErrors = true;
    }
  }

  const newUpdates = generateUpdates(OLD_FALLBACK_DATA, NEW_FALLBACK_DATA);

  if (newUpdates.length > 0) {
    const todayStr = getTodayString();
    newUpdates.forEach(u => u.date = todayStr);

    OLD_CHANGELOG = [...newUpdates, ...OLD_CHANGELOG];
    if (OLD_CHANGELOG.length > 200) OLD_CHANGELOG.length = 200;
  }

  const newFallbackString = 'const FALLBACK_DATA = ' + JSON.stringify(NEW_FALLBACK_DATA, null, 2) + ';';
  const newChangelogString = 'const CHANGELOG = ' + JSON.stringify(OLD_CHANGELOG, null, 2) + ';';

  const part1 = appJsContent.substring(0, startFallback);
  const part2 = appJsContent.substring(startState);

  appJsContent = part1 + newFallbackString + '\n\n' + newChangelogString + '\n\n' + part2;

  fs.writeFileSync(appJsPath, appJsContent, 'utf8');
  console.log(`Successfully updated! Added ${newUpdates.length} changes to changelog.`);
  if (hasErrors) console.log('Finished with some errors. The sections with errors kept their old data.');
}

main();
