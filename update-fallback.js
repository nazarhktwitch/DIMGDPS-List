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

const startIndex = appJsContent.indexOf('const FALLBACK_DATA = {');
if (startIndex === -1) {
  console.error("Could not find 'const FALLBACK_DATA = {' in app.js");
  process.exit(1);
}

const nextConstIndex = appJsContent.indexOf('const STATE = {', startIndex);
if (nextConstIndex === -1) {
  console.error("Could not find 'const STATE = {' in app.js");
  process.exit(1);
}

const oldFallbackCode = appJsContent.substring(startIndex + 'const FALLBACK_DATA = '.length, nextConstIndex).trim().replace(/;$/, '');
const OLD_FALLBACK_DATA = new Function(`return ${oldFallbackCode}`)();

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

async function main() {
  const FALLBACK_DATA = { ...OLD_FALLBACK_DATA };
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

      FALLBACK_DATA[name] = validData;
      console.log(` -> Parsed ${validData.length} valid items.`);
    } catch (e) {
      console.error(` -> Error processing ${name}:`, e.message);
      console.log(` -> Keeping old fallback data for ${name}.`);
      hasErrors = true;
    }
  }

  const newFallbackString = 'const FALLBACK_DATA = ' + JSON.stringify(FALLBACK_DATA, null, 2) + ';';

  const part1 = appJsContent.substring(0, startIndex);
  const part2 = appJsContent.substring(nextConstIndex);

  appJsContent = part1 + newFallbackString + '\n\n' + part2;

  fs.writeFileSync(appJsPath, appJsContent, 'utf8');
  console.log('Successfully updated app.js with new fallback data!');
  if (hasErrors) {
    console.log('Finished with some errors. The sections with errors kept their old data.');
  }
}

main();
