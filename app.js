const SHEET_URLS = {
  demonlist: 'https://docs.google.com/spreadsheets/d/1fPdeRx__uwcYhE8Fo8-gxah-pcHwFU-G1kj71hrq7Dc/export?format=csv',
  impossible: 'https://docs.google.com/spreadsheets/d/1R4Euoc5fVRknKKlJkyCjZbgCvOrqXPkM59ufcrYlBsQ/export?format=csv',
  slayers: 'https://docs.google.com/spreadsheets/d/1ra2WMQXr7NpC3zKkkGmCPBbFFxR6SYJHDLB3O4KfPBs/export?format=csv',
  future: 'https://docs.google.com/spreadsheets/d/1WhgXIuoCEbBgLMfYW9qwYH0uQ7g0o053TyxawIH_SH4/export?format=csv'
};

const FALLBACK_DATA = {
  demonlist: [
    { Level: 'P I G', Top: '1', Author: 'AngryBanana1212', Verifer: 'AngryBanana1212', 'Level Difficulty': 'Hard Extreme Demon', Progresses: 'No', Points: '150' },
    { Level: 'PIGAZAN', Top: '2', Author: 'AngryBanana1212', Verifer: 'AngryBanana1212', 'Level Difficulty': 'Hell Extreme Demon', Progresses: 'No', Points: '125' },
    { Level: 'PigWave', Top: '3', Author: 'AngryBanana1212', Verifer: 'AngryBanana1212', 'Level Difficulty': 'Hell Extreme Demon', Progresses: 'No', Points: '100' },
    { Level: 'The Blade of Bamboo', Top: '4', Author: 'AngryBanana1212', Verifer: 'AngryBanana1212', 'Level Difficulty': 'High Extreme Demon', Progresses: 'No', Points: '97.5' },
    { Level: 'Ultra pig poop level', Top: '5', Author: 'AngryBanana1212', Verifer: 'AngryBanana1212', 'Level Difficulty': 'Extreme Demon', Progresses: 'pro100nubikcl - 48% - 98%', Points: '95' }
  ],
  impossible: [
    { Levels: 'sakupen dih', 'Top Impossible': 'top 1', Author: 'NazarHK', CPS: 'High', ID: '183', 'Использование Tps bypass': 'Разрешено', 'Рекорд сервера': 'No' },
    { Levels: 'help god', 'Top Impossible': 'top 2', Author: 'techopro9', CPS: 'High', ID: '224', 'Использование Tps bypass': 'Запрещено', 'Рекорд сервера': 'No' },
    { Levels: 'silent sakupen lvl2', 'Top Impossible': 'top 3', Author: 'TheUNrealKorben(pro100nubikcl)', CPS: 'Ultra High', ID: '165', 'Использование Tps bypass': 'Запрещено', 'Рекорд сервера': 'TheUNrealkorben - 5.67%' }
  ],
  slayers: [
    { Slayers: 'AngryBanana1212', Tops: '1' },
    { Slayers: 'TheUNrealkorben', Tops: '2' },
    { Slayers: 'techopro9', Tops: '3' },
    { Slayers: 'DimStrem', Tops: '4' }
  ],
  future: [
    { Levels: 'CoLIMBO', 'Upcoming Top': 'TOP 2', Author: 'techopro9', Verifer: '?????', Difficulty: 'Fire Extreme Demon' },
    { Levels: 'orbit', 'Upcoming Top': 'top 7-8', Author: 'techopro9, pro100nubikcl', Verifer: 'pro100nubikcl', Difficulty: 'cruel insane' },
    { Levels: 'Sakupen Disco (Disco series)', 'Upcoming Top': 'TOP 5-6', Author: 'techopro9', Verifer: 'techopro9', Difficulty: 'Super Easy Extreme Demon' }
  ]
};

const STATE = {
  activeTab: 'home',
  data: {
    demonlist: [],
    impossible: [],
    slayers: [],
    future: []
  },
  filters: {
    demonlist: { search: '', difficulty: 'all', sort: 'rank-asc' },
    impossible: { search: '', cps: 'all', tps: 'all', sort: 'rank-asc' },
    slayers: { search: '' },
    future: { search: '', difficulty: 'all' }
  },
  selectedLevel: {
    demonlist: null,
    impossible: null
  },
  loading: {
    demonlist: true,
    impossible: true,
    slayers: true,
    future: true
  },
  errors: {
    demonlist: null,
    impossible: null,
    slayers: null,
    future: null
  }
};

let currentTab = '';

document.addEventListener('DOMContentLoaded', () => {
  setupNavigation();
  setupFilterListeners();
  setupMobileModal();
  loadAllData();
  window.addEventListener('hashchange', handleRouting);
});

function handleRouting() {
  const hash = window.location.hash || '#home';
  const cleanHash = hash.split('?')[0];
  const params = parseQueryParams(hash);
  const tabName = cleanHash.replace('#', '');
  const validTabs = ['home', 'demonlist', 'impossible', 'slayers', 'future', 'rules'];

  if (!validTabs.includes(tabName)) {
    navigateTo('home');
    return;
  }

  STATE.activeTab = tabName;
  updateTabUI(tabName);

  if (params.level) {
    const levelName = decodeURIComponent(params.level);
    handleDeepLink(tabName, levelName);
  }
}

function navigateTo(tabName, queryParams = null) {
  let newHash = `#${tabName}`;
  if (queryParams) {
    const esc = encodeURIComponent;
    const query = Object.keys(queryParams)
      .map(k => `${esc(k)}=${esc(queryParams[k])}`)
      .join('&');
    if (query) newHash += `?${query}`;
  }
  window.location.hash = newHash;
}

function parseQueryParams(hash) {
  const params = {};
  if (!hash.includes('?')) return params;
  const queryString = hash.split('?')[1];
  const pairs = queryString.split('&');
  for (const pair of pairs) {
    const [key, value] = pair.split('=');
    if (key) {
      params[decodeURIComponent(key)] = decodeURIComponent(value || '');
    }
  }
  return params;
}

function handleDeepLink(tabName, levelName) {
  if (STATE.loading[tabName]) {
    setTimeout(() => handleDeepLink(tabName, levelName), 100);
    return;
  }

  const list = STATE.data[tabName];
  if (!list) return;

  const levelObj = list.find(item => {
    const name = (item.Level || item.Levels || '').trim().toLowerCase();
    return name === levelName.trim().toLowerCase();
  });

  if (levelObj) {
    selectLevel(tabName, levelObj, false);
  }
}

function setupNavigation() {
  const navLinks = document.querySelectorAll('.nav-link');
  const logoLink = document.getElementById('logo-link');
  const menuToggle = document.getElementById('menu-toggle');
  const mainNav = document.getElementById('main-nav');

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      const target = link.getAttribute('data-target');
      navigateTo(target);
      mainNav.classList.remove('active');
    });
  });

  logoLink.addEventListener('click', () => {
    navigateTo('home');
  });

  menuToggle.addEventListener('click', () => {
    mainNav.classList.toggle('active');
  });

  document.getElementById('hero-view-demons').addEventListener('click', () => navigateTo('demonlist'));
  document.getElementById('home-btn-all-demons').addEventListener('click', () => navigateTo('demonlist'));
  document.getElementById('home-btn-all-impossible').addEventListener('click', () => navigateTo('impossible'));

  handleRouting();
}

function updateTabUI(activeTab) {
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    if (link.getAttribute('data-target') === activeTab) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });

  const sections = document.querySelectorAll('.page-section');
  sections.forEach(sec => {
    if (sec.id === `page-${activeTab}`) {
      sec.classList.add('active');
    } else {
      sec.classList.remove('active');
    }
  });

  if (currentTab !== activeTab) {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    currentTab = activeTab;
  }
}

async function loadAllData() {
  const loaders = Object.keys(SHEET_URLS).map(key => loadListData(key));
  await Promise.all(loaders);
  renderHomeScreen();
}

async function loadListData(name) {
  try {
    STATE.loading[name] = true;
    STATE.errors[name] = null;

    const response = await fetch(SHEET_URLS[name]);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const csvText = await response.text();
    const parsed = parseCSV(csvText);

    if (parsed.length === 0) {
      throw new Error('Empty CSV data');
    }

    STATE.data[name] = parsed;
    STATE.loading[name] = false;

  } catch (error) {
    console.warn(`Fetch failed for ${name}. Using local data fallback: ${error.message}`);
    STATE.data[name] = FALLBACK_DATA[name];
    STATE.errors[name] = error.message;
    STATE.loading[name] = false;
  }

  renderList(name);
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

function setupFilterListeners() {
  const dlSearch = document.getElementById('demonlist-search');
  const dlDiff = document.getElementById('demonlist-filter-diff');
  const dlSort = document.getElementById('demonlist-sort');

  dlSearch.addEventListener('input', (e) => {
    STATE.filters.demonlist.search = e.target.value;
    renderList('demonlist');
  });
  dlDiff.addEventListener('change', (e) => {
    STATE.filters.demonlist.difficulty = e.target.value;
    renderList('demonlist');
  });
  dlSort.addEventListener('change', (e) => {
    STATE.filters.demonlist.sort = e.target.value;
    renderList('demonlist');
  });

  const impSearch = document.getElementById('impossible-search');
  const impCps = document.getElementById('impossible-filter-cps');
  const impTps = document.getElementById('impossible-filter-tps');
  const impSort = document.getElementById('impossible-sort');

  impSearch.addEventListener('input', (e) => {
    STATE.filters.impossible.search = e.target.value;
    renderList('impossible');
  });
  impCps.addEventListener('change', (e) => {
    STATE.filters.impossible.cps = e.target.value;
    renderList('impossible');
  });
  impTps.addEventListener('change', (e) => {
    STATE.filters.impossible.tps = e.target.value;
    renderList('impossible');
  });
  impSort.addEventListener('change', (e) => {
    STATE.filters.impossible.sort = e.target.value;
    renderList('impossible');
  });

  const slaySearch = document.getElementById('slayers-search');
  slaySearch.addEventListener('input', (e) => {
    STATE.filters.slayers.search = e.target.value;
    renderList('slayers');
  });

  const futSearch = document.getElementById('future-search');
  const futDiff = document.getElementById('future-filter-diff');

  futSearch.addEventListener('input', (e) => {
    STATE.filters.future.search = e.target.value;
    renderList('future');
  });
  futDiff.addEventListener('change', (e) => {
    STATE.filters.future.difficulty = e.target.value;
    renderList('future');
  });
}

function renderList(name) {
  if (STATE.loading[name]) return;
  const list = STATE.data[name];

  if (name === 'demonlist') {
    renderDemonlist(list);
  } else if (name === 'impossible') {
    renderImpossibleList(list);
  } else if (name === 'slayers') {
    renderSlayers(list);
  } else if (name === 'future') {
    renderFutureLevels(list);
  }
}

function renderDemonlist(list) {
  const container = document.getElementById('demonlist-table');
  const diffSelect = document.getElementById('demonlist-filter-diff');

  if (diffSelect.options.length <= 1) {
    const difficulties = new Set();
    list.forEach(item => {
      const d = getProp(item, ['leveldifficulty', 'difficulty', 'diff']);
      if (d) difficulties.add(d.trim());
    });
    difficulties.forEach(diff => {
      const opt = document.createElement('option');
      opt.value = diff;
      opt.textContent = diff;
      diffSelect.appendChild(opt);
    });
  }

  let filtered = [...list];
  const filters = STATE.filters.demonlist;

  if (filters.search) {
    const q = filters.search.toLowerCase();
    filtered = filtered.filter(item => {
      const lvl = getProp(item, ['level', 'name']).toLowerCase();
      const auth = getProp(item, ['author', 'creator']).toLowerCase();
      const ver = getProp(item, ['verifier', 'verifer']).toLowerCase();
      return lvl.includes(q) || auth.includes(q) || ver.includes(q);
    });
  }

  if (filters.difficulty && filters.difficulty !== 'all') {
    filtered = filtered.filter(item => {
      const d = getProp(item, ['leveldifficulty', 'difficulty', 'diff']);
      return d.trim() === filters.difficulty;
    });
  }

  filtered.sort((a, b) => {
    const rankA = parseInt(getProp(a, ['top', 'rank'])) || 9999;
    const rankB = parseInt(getProp(b, ['top', 'rank'])) || 9999;

    if (filters.sort === 'rank-asc') return rankA - rankB;
    if (filters.sort === 'rank-desc') return rankB - rankA;
    if (filters.sort === 'name-asc') {
      const nameA = getProp(a, ['level', 'name']).toLowerCase();
      const nameB = getProp(b, ['level', 'name']).toLowerCase();
      return nameA.localeCompare(nameB, 'ru');
    }
    if (filters.sort === 'points-desc') {
      const ptsA = parseFloat(getProp(a, ['points', 'pts'])) || 0;
      const ptsB = parseFloat(getProp(b, ['points', 'pts'])) || 0;
      return ptsB - ptsA;
    }
    return rankA - rankB;
  });

  if (filtered.length === 0) {
    container.innerHTML = '<div style="padding: 30px; text-align: center; color: var(--text-secondary);">Ничего не найдено</div>';
    return;
  }

  container.innerHTML = '';
  filtered.forEach(item => {
    const rank = getProp(item, ['top', 'rank']);
    const levelName = getProp(item, ['level', 'name']);
    const author = getProp(item, ['author', 'creator']);
    const verifier = getProp(item, ['verifier', 'verifer']);
    const points = getProp(item, ['points', 'pts']);
    const diff = getProp(item, ['leveldifficulty', 'difficulty']);
    const diffClass = getDifficultyClass(diff);
    const badgeName = getCleanDifficultyName(diff);
    const isActive = STATE.selectedLevel.demonlist && getProp(STATE.selectedLevel.demonlist, ['level', 'name']) === levelName;

    const row = document.createElement('div');
    row.className = `leaderboard-row grid-demonlist ${isActive ? 'active' : ''}`;
    row.innerHTML = `
      <div class="cell-rank">#${rank}</div>
      <div class="cell-name-block">
        <div class="cell-name">${levelName}</div>
        <div class="cell-badge"><span class="badge ${diffClass}" style="margin-top: 4px; padding: 2px 6px; font-size: 0.65rem;">${badgeName}</span></div>
      </div>
      <div class="cell-author cell-sub">${author}</div>
      <div class="cell-verifer cell-sub">${verifier}</div>
      <div class="cell-points" style="font-weight: 600; color: var(--accent-cyan);">${points}</div>
    `;

    row.addEventListener('click', () => {
      selectLevel('demonlist', item);
      document.querySelectorAll('#demonlist-table .leaderboard-row').forEach(r => r.classList.remove('active'));
      row.classList.add('active');
    });

    container.appendChild(row);
  });
}

function renderImpossibleList(list) {
  const container = document.getElementById('impossible-table');
  let filtered = [...list];
  const filters = STATE.filters.impossible;

  if (filters.search) {
    const q = filters.search.toLowerCase();
    filtered = filtered.filter(item => {
      const lvl = getProp(item, ['levels', 'level', 'name']).toLowerCase();
      const auth = getProp(item, ['author', 'creator']).toLowerCase();
      return lvl.includes(q) || auth.includes(q);
    });
  }

  if (filters.cps && filters.cps !== 'all') {
    filtered = filtered.filter(item => {
      const c = getProp(item, ['cps']).toLowerCase();
      return c.includes(filters.cps.toLowerCase());
    });
  }

  if (filters.tps && filters.tps !== 'all') {
    filtered = filtered.filter(item => {
      const t = getProp(item, ['использование tps bypass', 'tps bypass', 'tps']);
      return t === filters.tps;
    });
  }

  filtered.sort((a, b) => {
    const rA = getProp(a, ['top impossible', 'top', 'rank']);
    const rB = getProp(b, ['top impossible', 'top', 'rank']);
    const rankA = parseInt(rA.replace(/\D/g, '')) || 9999;
    const rankB = parseInt(rB.replace(/\D/g, '')) || 9999;

    if (filters.sort === 'rank-asc') return rankA - rankB;
    if (filters.sort === 'rank-desc') return rankB - rankA;
    if (filters.sort === 'name-asc') {
      const nameA = getProp(a, ['levels', 'level', 'name']).toLowerCase();
      const nameB = getProp(b, ['levels', 'level', 'name']).toLowerCase();
      return nameA.localeCompare(nameB, 'ru');
    }
    return rankA - rankB;
  });

  if (filtered.length === 0) {
    container.innerHTML = '<div style="padding: 30px; text-align: center; color: var(--text-secondary);">Ничего не найдено</div>';
    return;
  }

  container.innerHTML = '';
  filtered.forEach(item => {
    const rawRank = getProp(item, ['top impossible', 'top', 'rank']);
    const rankNum = rawRank.replace(/\D/g, '');
    const levelName = getProp(item, ['levels', 'level', 'name']);
    const author = getProp(item, ['author', 'creator']);
    const cps = getProp(item, ['cps']);
    const id = getProp(item, ['id']);
    const tps = getProp(item, ['использование tps bypass', 'tps bypass', 'tps']);
    const cpsBadge = getCpsBadge(cps);
    const tpsClass = tps === 'Разрешено' ? 'badge-tps-allowed' : 'badge-tps-disallowed';
    const isActive = STATE.selectedLevel.impossible && getProp(STATE.selectedLevel.impossible, ['levels', 'level', 'name']) === levelName;

    const row = document.createElement('div');
    row.className = `leaderboard-row grid-impossible ${isActive ? 'active' : ''}`;
    row.innerHTML = `
      <div class="cell-rank">#${rankNum}</div>
      <div class="cell-name">${levelName}</div>
      <div class="cell-author cell-sub">${author}</div>
      <div class="cell-cps">${cpsBadge}</div>
      <div class="cell-id cell-sub">${id}</div>
      <div class="cell-tps"><span class="badge ${tpsClass}">${tps}</span></div>
    `;

    row.addEventListener('click', () => {
      selectLevel('impossible', item);
      document.querySelectorAll('#impossible-table .leaderboard-row').forEach(r => r.classList.remove('active'));
      row.classList.add('active');
    });

    container.appendChild(row);
  });
}

function renderSlayers(list) {
  const container = document.getElementById('slayers-table');
  let filtered = [...list];

  if (STATE.filters.slayers.search) {
    const q = STATE.filters.slayers.search.toLowerCase();
    filtered = filtered.filter(item => {
      const name = getProp(item, ['slayers', 'slayer', 'player']).toLowerCase();
      return name.includes(q);
    });
  }

  filtered.sort((a, b) => {
    const topsA = parseInt(getProp(a, ['tops', 'completed'])) || 0;
    const topsB = parseInt(getProp(b, ['tops', 'completed'])) || 0;
    return topsA - topsB;
  });

  if (filtered.length === 0) {
    container.innerHTML = '<div style="padding: 30px; text-align: center; color: var(--text-secondary);">Ничего не найдено</div>';
    return;
  }

  container.innerHTML = '';
  filtered.forEach((item, index) => {
    const rank = index + 1;
    const nickname = getProp(item, ['slayers', 'slayer', 'player']);
    const tops = getProp(item, ['tops', 'completed']);

    let rankClass = '';
    if (rank === 1) rankClass = 'cell-rank-gold';
    else if (rank === 2) rankClass = 'cell-rank-silver';
    else if (rank === 3) rankClass = 'cell-rank-bronze';

    const row = document.createElement('div');
    row.className = 'leaderboard-row grid-slayers';
    row.innerHTML = `
      <div class="cell-rank"><span class="${rankClass}">#${rank}</span></div>
      <div class="cell-name">${nickname}</div>
      <div class="cell-tops" style="font-weight: 700; color: var(--accent-purple); font-size: 1.1rem;">${tops}</div>
    `;

    container.appendChild(row);
  });
}

function renderFutureLevels(list) {
  const container = document.getElementById('future-container');
  const diffSelect = document.getElementById('future-filter-diff');

  if (diffSelect.options.length <= 1) {
    const difficulties = new Set();
    list.forEach(item => {
      const d = getProp(item, ['difficulty', 'diff']);
      if (d) difficulties.add(d.trim());
    });
    difficulties.forEach(diff => {
      const opt = document.createElement('option');
      opt.value = diff;
      opt.textContent = diff;
      diffSelect.appendChild(opt);
    });
  }

  let filtered = [...list];
  const filters = STATE.filters.future;

  if (filters.search) {
    const q = filters.search.toLowerCase();
    filtered = filtered.filter(item => {
      const lvl = getProp(item, ['levels', 'level', 'name']).toLowerCase();
      const auth = getProp(item, ['author', 'creator']).toLowerCase();
      const ver = getProp(item, ['verifier', 'verifer']).toLowerCase();
      return lvl.includes(q) || auth.includes(q) || ver.includes(q);
    });
  }

  if (filters.difficulty && filters.difficulty !== 'all') {
    filtered = filtered.filter(item => {
      const d = getProp(item, ['difficulty', 'diff']);
      return d.trim() === filters.difficulty;
    });
  }

  if (filtered.length === 0) {
    container.innerHTML = '<div style="padding: 30px; text-align: center; color: var(--text-secondary); grid-column: 1/-1;">Ничего не найдено</div>';
    return;
  }

  container.innerHTML = '';
  filtered.forEach(item => {
    const levelName = getProp(item, ['levels', 'level', 'name']);
    if (!levelName) return;

    const upcomingTop = getProp(item, ['upcoming top', 'top']);
    const author = getProp(item, ['author', 'creator']);
    let verifier = getProp(item, ['verifier', 'verifer']);
    const diff = getProp(item, ['difficulty', 'diff']);

    if (verifier.includes('?????') || verifier.trim() === '') {
      verifier = '<span style="color: var(--text-muted);">Неизвестно</span>';
    }

    const diffClass = getDifficultyClass(diff);
    const badgeName = getCleanDifficultyName(diff);

    const card = document.createElement('div');
    card.className = 'future-card';
    card.innerHTML = `
      <div class="future-rank-badge">${upcomingTop}</div>
      <div class="future-name">${levelName}</div>
      
      <div class="future-detail-item">
        <span class="future-detail-label" style="color: var(--text-secondary);">Сложность:</span>
        <span class="badge ${diffClass}" style="padding: 2px 6px; font-size: 0.7rem;">${badgeName}</span>
      </div>
      
      <div class="future-detail-item" style="margin-top: 8px;">
        <span class="future-detail-label" style="color: var(--text-secondary);">Создатель:</span>
        <span style="font-weight: 500;">${author}</span>
      </div>
      
      <div class="future-detail-item">
        <span class="future-detail-label" style="color: var(--text-secondary);">Верификатор:</span>
        <span style="font-weight: 500;">${verifier}</span>
      </div>
    `;

    container.appendChild(card);
  });
}

function selectLevel(tabName, item, updateUrl = true) {
  STATE.selectedLevel[tabName] = item;
  const levelName = getProp(item, ['level', 'levels', 'name']);

  if (updateUrl) {
    navigateTo(tabName, { level: levelName });
  }

  const isMobile = window.innerWidth <= 1024;
  if (isMobile) {
    openMobileModal(tabName, item);
  } else {
    updateSidebar(tabName, item);
  }
}

function updateSidebar(tabName, item) {
  const sidebarContent = document.getElementById(`${tabName}-details-content`);
  const sidebarPlaceholder = document.getElementById(`${tabName}-details-placeholder`);

  sidebarPlaceholder.style.display = 'none';
  sidebarContent.style.display = 'block';
  sidebarContent.innerHTML = getDetailsHTML(tabName, item);
}

function getDetailsHTML(tabName, item) {
  const levelName = getProp(item, ['level', 'levels', 'name']);
  const author = getProp(item, ['author', 'creator']);

  if (tabName === 'demonlist') {
    const rank = getProp(item, ['top', 'rank']);
    const verifier = getProp(item, ['verifier', 'verifer']);
    const points = getProp(item, ['points', 'pts']);
    const diff = getProp(item, ['leveldifficulty', 'difficulty']);
    const rawProgresses = getProp(item, ['progresses', 'progress']);
    const diffClass = getDifficultyClass(diff);
    const badgeName = getCleanDifficultyName(diff);
    const progressList = parseProgresses(rawProgresses);

    let progressesHTML = '<div class="progress-item" style="color: var(--text-secondary);">Нет прогрессов</div>';
    if (progressList.length > 0) {
      progressesHTML = progressList.map(prog => {
        const splitIdx = prog.lastIndexOf('-');
        let namePart = prog;
        let progPart = '100%';

        if (splitIdx !== -1) {
          namePart = prog.substring(0, splitIdx).trim();
          progPart = prog.substring(splitIdx + 1).trim();
        } else {
          const percentIdx = prog.indexOf('%');
          if (percentIdx !== -1) {
            const spaceIdx = prog.lastIndexOf(' ', percentIdx);
            if (spaceIdx !== -1) {
              namePart = prog.substring(0, spaceIdx).trim();
              progPart = prog.substring(spaceIdx + 1).trim();
            }
          }
        }

        return `
          <div class="progress-item">
            <span class="progress-player">${namePart}</span>
            <span class="progress-percentage">${progPart}</span>
          </div>
        `;
      }).join('');
    }

    return `
      <div class="detail-title-wrapper">
        <div class="detail-rank">Топ #${rank}</div>
        <h2 class="detail-title">${levelName}</h2>
      </div>
      
      <div class="detail-meta-list">
        <div class="detail-meta-item">
          <span class="detail-meta-label">Сложность</span>
          <span class="badge ${diffClass}">${badgeName}</span>
        </div>
        <div class="detail-meta-item">
          <span class="detail-meta-label">Создатель</span>
          <span class="detail-meta-val">${author}</span>
        </div>
        <div class="detail-meta-item">
          <span class="detail-meta-label">Верификатор</span>
          <span class="detail-meta-val">${verifier}</span>
        </div>
        <div class="detail-meta-item">
          <span class="detail-meta-label">Очки за прохождение</span>
          <span class="detail-meta-val" style="color: var(--accent-cyan); font-weight: 700;">${points} pts</span>
        </div>
      </div>
      
      <div class="detail-progress-section">
        <div class="progress-section-title">Рекорды игроков</div>
        <div class="progress-list">
          ${progressesHTML}
        </div>
      </div>
      
      <button class="btn btn-secondary" style="width: 100%;" onclick="navigateTo('rules')">Подать свой рекорд</button>
    `;

  } else if (tabName === 'impossible') {
    const rawRank = getProp(item, ['top impossible', 'top', 'rank']);
    const rankNum = rawRank.replace(/\D/g, '');
    const cps = getProp(item, ['cps']);
    const id = getProp(item, ['id']);
    const tps = getProp(item, ['использование tps bypass', 'tps bypass', 'tps']);
    const record = getProp(item, ['рекорд сервера', 'рекорд', 'record']);
    const cpsBadge = getCpsBadge(cps);
    const tpsClass = tps === 'Разрешено' ? 'badge-tps-allowed' : 'badge-tps-disallowed';

    return `
      <div class="detail-title-wrapper">
        <div class="detail-rank">Impossible Топ #${rankNum}</div>
        <h2 class="detail-title">${levelName}</h2>
      </div>
      
      <div class="detail-meta-list">
        <div class="detail-meta-item">
          <span class="detail-meta-label">Категория CPS</span>
          <span>${cpsBadge}</span>
        </div>
        <div class="detail-meta-item">
          <span class="detail-meta-label">Создатель</span>
          <span class="detail-meta-val">${author}</span>
        </div>
        <div class="detail-meta-item">
          <span class="detail-meta-label">ID Уровня</span>
          <span class="detail-meta-val" style="color: var(--text-secondary); font-family: monospace;">${id}</span>
        </div>
        <div class="detail-meta-item">
          <span class="detail-meta-label">TPS Bypass</span>
          <span class="badge ${tpsClass}">${tps}</span>
        </div>
      </div>
      
      <div class="detail-progress-section">
        <div class="progress-section-title">Лучший результат сервера</div>
        <div class="progress-list">
          <div class="progress-item" style="border: none; padding: 4px 0;">
            <span class="progress-player" style="font-weight: 500;">
              ${record && record.toLowerCase() !== 'no' ? record : '<span style="color: var(--text-muted);">Нет рекордов</span>'}
            </span>
          </div>
        </div>
      </div>
      
      <a class="btn btn-secondary" style="width: 100%; display: flex; align-items: center; justify-content: center; gap: 8px;" href="https://discord.gg/vBkthNt2N" target="_blank">
        <svg width="16" height="16" viewBox="0 0 24 24"><use href="#icon-discord"/></svg>
        Обсудить в Discord
      </a>
    `;
  }
  return '';
}

function setupMobileModal() {
  const modal = document.getElementById('details-modal');
  const closeBtn = document.getElementById('modal-close');

  closeBtn.addEventListener('click', closeModal);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });
}

function openMobileModal(tabName, item) {
  const modal = document.getElementById('details-modal');
  const content = document.getElementById('modal-content');

  content.innerHTML = getDetailsHTML(tabName, item);
  modal.classList.add('active');
}

function closeModal() {
  const modal = document.getElementById('details-modal');
  modal.classList.remove('active');

  const hash = window.location.hash || '#home';
  const cleanHash = hash.split('?')[0];
  window.location.hash = cleanHash;
}

function renderHomeScreen() {
  document.getElementById('stat-verified-count').textContent = STATE.data.demonlist.length || '-';
  document.getElementById('stat-impossible-count').textContent = STATE.data.impossible.length || '-';
  document.getElementById('stat-future-count').textContent = STATE.data.future.length || '-';

  if (STATE.data.slayers.length > 0) {
    const slayersCopy = [...STATE.data.slayers];
    slayersCopy.sort((a, b) => {
      const tA = parseInt(getProp(a, ['tops', 'completed'])) || 0;
      const tB = parseInt(getProp(b, ['tops', 'completed'])) || 0;
      return tA - tB;
    });
    const topSlayer = slayersCopy[0];
    const name = getProp(topSlayer, ['slayers', 'slayer', 'player']);
    const count = getProp(topSlayer, ['tops', 'completed']);
    document.getElementById('stat-top-slayer').textContent = `${name} (${count})`;
  } else {
    document.getElementById('stat-top-slayer').textContent = '-';
  }

  const demonsContainer = document.getElementById('home-top-demons-container');
  demonsContainer.innerHTML = '';

  const topDemons = STATE.data.demonlist.slice(0, 3);
  topDemons.forEach((item, idx) => {
    const name = getProp(item, ['level', 'name']);
    const author = getProp(item, ['author', 'creator']);
    const diff = getProp(item, ['leveldifficulty', 'difficulty']);
    const pts = getProp(item, ['points', 'pts']);

    const card = document.createElement('div');
    card.className = `top3-card rank-${idx + 1}`;
    card.innerHTML = `
      <div class="top3-badge">${idx + 1}</div>
      <div class="top3-name">${name}</div>
      <div class="top3-author">by ${author}</div>
      <div class="top3-metric">${pts} pts (${getCleanDifficultyName(diff)})</div>
    `;
    card.addEventListener('click', () => {
      navigateTo('demonlist', { level: name });
    });
    demonsContainer.appendChild(card);
  });

  const impossibleContainer = document.getElementById('home-top-impossible-container');
  impossibleContainer.innerHTML = '';

  const topImpossible = STATE.data.impossible.slice(0, 3);
  topImpossible.forEach((item, idx) => {
    const name = getProp(item, ['levels', 'level', 'name']);
    const author = getProp(item, ['author', 'creator']);
    const cps = getProp(item, ['cps']);

    const card = document.createElement('div');
    card.className = `top3-card rank-${idx + 1}`;
    card.innerHTML = `
      <div class="top3-badge">${idx + 1}</div>
      <div class="top3-name">${name}</div>
      <div class="top3-author">by ${author}</div>
      <div class="top3-metric" style="color: var(--accent-purple); font-weight: 600;">${cps} CPS</div>
    `;
    card.addEventListener('click', () => {
      navigateTo('impossible', { level: name });
    });
    impossibleContainer.appendChild(card);
  });

  renderUpdatesList();
}

function renderUpdatesList() {
  const updatesContainer = document.getElementById('home-updates-list');
  updatesContainer.innerHTML = '';

  const updates = [];
  const currentDateStr = '14.06.2026';

  if (STATE.data.demonlist.length > 0) {
    const lvl1 = STATE.data.demonlist[0];
    updates.push({
      author: 'DIMGDPS',
      date: currentDateStr,
      text: `Уровень "${getProp(lvl1, ['level', 'name'])}" от ${getProp(lvl1, ['author', 'creator'])} удерживает позицию Топ-1 сложнейших демонов сервера.`
    });
  }

  const recordLevel = STATE.data.impossible.find(item => {
    const rec = getProp(item, ['рекорд сервера', 'record']);
    return rec && rec.toLowerCase() !== 'no' && rec.includes('%');
  });
  if (recordLevel) {
    updates.push({
      author: 'Рекорд',
      date: currentDateStr,
      text: `Установлен рекорд сервера на Impossible-уровне "${getProp(recordLevel, ['levels', 'name'])}": ${getProp(recordLevel, ['рекорд сервера', 'record'])}.`
    });
  }

  if (STATE.data.slayers.length > 0) {
    const topSlayer = STATE.data.slayers[0];
    updates.push({
      author: 'Топ слеер',
      date: currentDateStr,
      text: `${getProp(topSlayer, ['slayers', 'player'])} занимает лидирующее место в рейтинге слееров с результатом в ${getProp(topSlayer, ['tops'])} пройденных топов.`
    });
  }

  if (STATE.data.future.length > 0) {
    const fut = STATE.data.future[0];
    updates.push({
      author: 'Анонс',
      date: currentDateStr,
      text: `Анонсирован будущий уровень "${getProp(fut, ['levels', 'name'])}" (предположительно ${getProp(fut, ['upcoming top', 'top'])}). Верификатор: ${getProp(fut, ['verifier', 'verifer'])}.`
    });
  }

  updates.forEach(up => {
    const item = document.createElement('div');
    item.className = 'update-item';
    item.innerHTML = `
      <div class="update-icon">
        <svg viewBox="0 0 24 24"><use href="#icon-info"/></svg>
      </div>
      <div class="update-details">
        <div class="update-meta">
          <span>${up.author}</span>
          <span>${up.date}</span>
        </div>
        <div class="update-text">${up.text}</div>
      </div>
    `;
    updatesContainer.appendChild(item);
  });
}

function parseProgresses(progressStr) {
  if (!progressStr || progressStr.toLowerCase() === 'no') return [];

  const lines = progressStr.split(/\r?\n/);
  const results = [];

  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed) continue;

    const parts = trimmed.split(/(?<=%)\s+/);
    for (const part of parts) {
      if (part.trim()) {
        results.push(part.trim());
      }
    }
  }
  return results;
}

function getCleanDifficultyName(diffStr) {
  return diffStr || 'Extreme Demon';
}

function getDifficultyClass(diffStr) {
  const d = (diffStr || '').toLowerCase();
  if (d.includes('extreme')) return 'badge-diff-extreme';
  if (d.includes('insane')) return 'badge-diff-insane';
  if (d.includes('hard')) return 'badge-diff-hard';
  if (d.includes('medium')) return 'badge-diff-medium';
  if (d.includes('easy') || d.includes('free')) return 'badge-diff-easy';
  return 'badge-diff-extreme';
}

function getCpsBadge(cps) {
  const c = (cps || '').toLowerCase().replace(/\s+/g, '');
  if (c.includes('low')) return '<span class="badge badge-cps-low">Low CPS (&lt;5)</span>';
  if (c.includes('medium')) return '<span class="badge badge-cps-medium">Medium CPS (5-10)</span>';
  if (c.includes('high') && !c.includes('ultra')) return '<span class="badge badge-cps-high">High CPS (10-15)</span>';
  if (c.includes('ultra') || c.includes('15+')) return '<span class="badge badge-cps-ultra">Ultra CPS (всегда 15)</span>';
  return `<span class="badge badge-cps-high">${cps}</span>`;
}
