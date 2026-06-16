const fs = require('fs');
const https = require('https');

const urls = {
  demonlist: 'https://docs.google.com/spreadsheets/d/1fPdeRx__uwcYhE8Fo8-gxah-pcHwFU-G1kj71hrq7Dc/export?format=csv',
  impossible: 'https://docs.google.com/spreadsheets/d/1R4Euoc5fVRknKKlJkyCjZbgCvOrqXPkM59ufcrYlBsQ/export?format=csv',
  slayers: 'https://docs.google.com/spreadsheets/d/1ra2WMQXr7NpC3zKkkGmCPBbFFxR6SYJHDLB3O4KfPBs/export?format=csv',
  future: 'https://docs.google.com/spreadsheets/d/1WhgXIuoCEbBgLMfYW9qwYH0uQ7g0o053TyxawIH_SH4/export?format=csv'
};

function fetchCsv(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode === 301 || res.statusCode === 302 || res.statusCode === 307) {
        https.get(res.headers.location, handleResponse).on('error', reject);
      } else {
        handleResponse(res);
      }
      function handleResponse(res) {
        let data = '';
        res.on('data', chunk => data += chunk);
        res.on('end', () => resolve(data));
      }
    }).on('error', reject);
  });
}

function parseCSV(text) {
  let inQuotes = false;
  const lines = [];
  let currentRow = [];
  let currentVal = '';
  
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (c === '"') {
      inQuotes = !inQuotes;
    } else if (c === ',' && !inQuotes) {
      currentRow.push(currentVal);
      currentVal = '';
    } else if ((c === '\n' || c === '\r') && !inQuotes) {
      if (c === '\r' && text[i+1] === '\n') i++;
      currentRow.push(currentVal);
      lines.push(currentRow);
      currentRow = [];
      currentVal = '';
    } else {
      currentVal += c;
    }
  }
  if (currentVal || currentRow.length > 0) {
    currentRow.push(currentVal);
    lines.push(currentRow);
  }

  const validLines = lines.filter(l => l.some(v => v.trim() !== ''));
  if (validLines.length === 0) return [];
  
  const headers = validLines[0].map(h => h.trim());
  const data = [];
  for (let i = 1; i < Math.min(validLines.length, 6); i++) {
    const values = validLines[i].map(v => v.trim());
    const obj = {};
    for (let j = 0; j < headers.length; j++) {
      if (headers[j]) obj[headers[j]] = values[j] || '';
    }
    data.push(obj);
  }
  return data;
}

async function run() {
  const result = {};
  for (const [key, url] of Object.entries(urls)) {
    try {
      const csv = await fetchCsv(url);
      result[key] = parseCSV(csv);
    } catch(e) {
      console.error(e);
    }
  }
  fs.writeFileSync('fallback.json', JSON.stringify(result, null, 2));
}

run();
