const SHEET_URLS = {
  demonlist: 'https://docs.google.com/spreadsheets/d/1AAgQXerA78YgH-LzbJ4Eq2MUO9UnPl0R_aU8S--ZIQ4/export?format=csv',
  impossible: 'https://docs.google.com/spreadsheets/d/1R4Euoc5fVRknKKlJkyCjZbgCvOrqXPkM59ufcrYlBsQ/export?format=csv',
  slayers: 'https://docs.google.com/spreadsheets/d/1lHXJiXSz74-U1Z69bnjJa0oRfRw29MGh40Z2dIv6M6w/export?format=csv',
  future: 'https://docs.google.com/spreadsheets/d/1HGWdQNAh3-AloKXXra2Tbmi-5kdEq2dFa68TeJi_fpI/export?format=csv',
  silent: 'https://docs.google.com/spreadsheets/d/1bTxdDTD2k-Ady3s6ucG2ZmmSZ57QqPLukyE5d4rhmbw/export?format=csv',
  cll: 'https://docs.google.com/spreadsheets/d/1J9I4MSbHQPGgfIyQC7VKOs94pX27hzvhAV2U3bVbEw0/export?format=csv'
};

const LEVEL_WARNINGS = {
  'airbone robots': 'Для зачёта прохождения необходимо пройти уровень без скипов и секрет-веев!'
};

const FALLBACK_DATA = {
  "demonlist": [
    {
      "Level": "P I G",
      "Top": "1",
      "Author": "AngryBanana1212",
      "Verifer": "AngryBanana1212",
      "Level Difficulty": "Hard Extreme Demon",
      "Progresses": "No",
      "Points": "150"
    },
    {
      "Level": "PIGAZAN",
      "Top": "2",
      "Author": "AngryBanana1212",
      "Verifer": "AngryBanana1212",
      "Level Difficulty": "Hell Extreme Demon",
      "Progresses": "No",
      "Points": "125"
    },
    {
      "Level": "PigWave",
      "Top": "3",
      "Author": "AngryBanana1212",
      "Verifer": "AngryBanana1212",
      "Level Difficulty": "Hell Extreme Demon",
      "Progresses": "No",
      "Points": "100"
    },
    {
      "Level": "The Blade of Bamboo",
      "Top": "4",
      "Author": "AngryBanana1212",
      "Verifer": "AngryBanana1212",
      "Level Difficulty": "High Extreme Demon",
      "Progresses": "No",
      "Points": "97.5"
    },
    {
      "Level": "Ultra pig poop level",
      "Top": "5",
      "Author": "AngryBanana1212",
      "Verifer": "AngryBanana1212",
      "Level Difficulty": "Extreme Demon",
      "Progresses": "pro100nubikcl - 48%-98%",
      "Points": "95"
    },
    {
      "Level": "Averius",
      "Top": "6",
      "Author": "AngryBanana1212",
      "Verifer": "AngryBanana1212",
      "Level Difficulty": "Bizarre Extreme Demon",
      "Progresses": "No",
      "Points": "90"
    },
    {
      "Level": "Snowflake",
      "Top": "7",
      "Author": "NazarHK",
      "Verifer": "AngryBanana1212",
      "Level Difficulty": "Bizarre Extreme Demon",
      "Progresses": "No",
      "Points": "85"
    },
    {
      "Level": "Pig Disaster",
      "Top": "8",
      "Author": "AngryBanana1212",
      "Verifer": "AngryBanana1212",
      "Level Difficulty": "Brutal Extreme Demon",
      "Progresses": "No",
      "Points": "80"
    },
    {
      "Level": "Pig After Pig",
      "Top": "9",
      "Author": "AngryBanana1212",
      "Verifer": "AngryBanana1212",
      "Level Difficulty": "Easy Extreme Demon",
      "Progresses": "No",
      "Points": "70"
    },
    {
      "Level": "Despair",
      "Top": "10",
      "Author": "pro100nubickl , soulq1337",
      "Verifer": "pro100nubickl",
      "Level Difficulty": "Easy Extreme Demon",
      "Progresses": "No",
      "Points": "65"
    },
    {
      "Level": "Vantus Processing",
      "Top": "11",
      "Author": "techopro9 , NazarHK , AngryBanana1212",
      "Verifer": "AngryBanana1212",
      "Level Difficulty": "Easy Extreme Demon",
      "Progresses": "No",
      "Points": "60"
    },
    {
      "Level": "Femboy Circles",
      "Top": "12",
      "Author": "techopro9",
      "Verifer": "AngryBanana1212",
      "Level Difficulty": "Easy Extreme Demon",
      "Progresses": "No",
      "Points": "55"
    },
    {
      "Level": "Sakupen Circles II",
      "Top": "13",
      "Author": "NazarHK",
      "Verifer": "AngryBanana1212",
      "Level Difficulty": "Easy Extreme Demon",
      "Progresses": "No",
      "Points": "50"
    },
    {
      "Level": "Dnyami Nochami",
      "Top": "14",
      "Author": "pro100nubikcl",
      "Verifer": "pro100nubikcl",
      "Level Difficulty": "Easiest Extreme Demon",
      "Progresses": "AngryBanana1212 - 100%",
      "Points": "45"
    },
    {
      "Level": "mat pidora",
      "Top": "15",
      "Author": "pro100nubickl",
      "Verifer": "techopro9",
      "Level Difficulty": "Easiest Extreme Demon",
      "Progresses": "No",
      "Points": "40"
    },
    {
      "Level": "Pigpolis",
      "Top": "16",
      "Author": "AngryBanana1212",
      "Verifer": "AngryBanana1212",
      "Level Difficulty": "Cruel Insane Demon",
      "Progresses": "No",
      "Points": "35"
    },
    {
      "Level": "Sakupen Circles",
      "Top": "17",
      "Author": "techopro9",
      "Verifer": "AngryBanana1212",
      "Level Difficulty": "Cruel Insane Demon",
      "Progresses": "No",
      "Points": "30"
    },
    {
      "Level": "falling wave",
      "Top": "18",
      "Author": "pro100nubikcl",
      "Verifer": "pro100nubikcl",
      "Level Difficulty": "Cruel Insane Demon",
      "Progresses": "AngryBanana1212 - 100%",
      "Points": "25"
    },
    {
      "Level": "lose circles",
      "Top": "19",
      "Author": "pro100nubikcl",
      "Verifer": "AngryBanana1212",
      "Level Difficulty": "Easy Insane Demon",
      "Progresses": "Techopro9 - 37%\npro100nubikcl - 47%",
      "Points": "20"
    },
    {
      "Level": "Silent sakupen lvl",
      "Top": "20",
      "Author": "pro100nubikcl",
      "Verifer": "pro100nubikcl",
      "Level Difficulty": "Easy Insane Demon",
      "Progresses": "AngryBanana1212 - 100%  techopro9 - 100% NazarHK - 100%",
      "Points": "15"
    },
    {
      "Level": "Shadow Swines Lament",
      "Top": "21",
      "Author": "AngryBanana1212",
      "Verifer": "AngryBanana1212",
      "Level Difficulty": "Easy Insane Demon",
      "Progresses": "No",
      "Points": "10"
    },
    {
      "Level": "Alquimia",
      "Top": "22",
      "Author": "ZlukaW",
      "Verifer": "ZlukaW",
      "Level Difficulty": "Moderate Hard Demon",
      "Progresses": "techopro9 -54%",
      "Points": "5"
    },
    {
      "Level": "The Past Is History",
      "Top": "23",
      "Author": "techopro9",
      "Verifer": "pro100nubikcl",
      "Level Difficulty": "Moderate Hard Demon",
      "Progresses": "AngryBanana1212 - 100%",
      "Points": "2.5"
    },
    {
      "Level": "Last Arrival",
      "Top": "24",
      "Author": "AngryBanana1212",
      "Verifer": "AngryBanana1212",
      "Level Difficulty": "Moderate Hard Demon",
      "Progresses": "pro100nubickl - 100%",
      "Points": "2"
    },
    {
      "Level": "therealchuhan gg",
      "Top": "25",
      "Author": "pro100nubikcl",
      "Verifer": "pro100nubikcl",
      "Level Difficulty": "Hard Demon",
      "Progresses": "AngryBanana1212 - 100%",
      "Points": "1"
    },
    {
      "Level": "ColorWave",
      "Top": "26",
      "Author": "NazarHK",
      "Verifer": "techopro9",
      "Level Difficulty": "Hard Demon",
      "Progresses": "pro100nubikcl - 70%",
      "Points": "0.75"
    },
    {
      "Level": "super sakupen lvl3",
      "Top": "27",
      "Author": "pro100nubikcl",
      "Verifer": "pro100nubikcl",
      "Level Difficulty": "Hard demon",
      "Progresses": "AngryBanana1212 - 100%",
      "Points": "0.5"
    },
    {
      "Level": "super sakupen level",
      "Top": "28",
      "Author": "pro100nubikcl",
      "Verifer": "pro100nubikcl",
      "Level Difficulty": "Hard demon",
      "Progresses": "AngryBanana1212 - 100%\nTechopro9 - 89%",
      "Points": "0.25"
    },
    {
      "Level": "Couch Bratan",
      "Top": "29",
      "Author": "NazarHK",
      "Verifer": "NazarHK",
      "Level Difficulty": "Couch Medium Demon",
      "Progresses": "soulq1337 - 100%",
      "Points": "0.2"
    },
    {
      "Level": "NA KRYLCE X",
      "Top": "30",
      "Author": "NazarHK",
      "Verifer": "NazarHK",
      "Level Difficulty": "BAGANIY Medium Demon",
      "Progresses": "AngryBanana1212 - 100%\nTechopro9 - 100%\npro100nubikcl - 100%",
      "Points": "0.175"
    },
    {
      "Level": "super sakupen lvl 2",
      "Top": "31",
      "Author": "pro100nubikcl",
      "Verifer": "pro100nubikcl",
      "Level Difficulty": "Medium Demon",
      "Progresses": "AngryBanana1212 - 100%",
      "Points": "0.15"
    },
    {
      "Level": "Wave to the Past",
      "Top": "32",
      "Author": "soulq1337",
      "Verifer": "soulq1337",
      "Level Difficulty": "Medium Demon",
      "Progresses": "pro100nubickl - 100% NazarHK - 100% techopro9 - 100%",
      "Points": "0.145"
    },
    {
      "Level": "Dihnoeument",
      "Top": "33",
      "Author": "zlukaW",
      "Verifer": "techopro9",
      "Level Difficulty": "Medium Demon",
      "Progresses": "AngryBanana1212 - 100%",
      "Points": "0.14"
    },
    {
      "Level": "Winter Chill",
      "Top": "34",
      "Author": "pro100nubickl",
      "Verifer": "pro100nubickl",
      "Level Difficulty": "Easy Medium Demon",
      "Progresses": "No",
      "Points": "0.135"
    },
    {
      "Level": "NULLSPACE",
      "Top": "35",
      "Author": "techopro9",
      "Verifer": "techopro9",
      "Level Difficulty": "Free Easy demon",
      "Progresses": "No",
      "Points": "0.13"
    },
    {
      "Level": "party disco",
      "Top": "36",
      "Author": "techopro9",
      "Verifer": "techopro9",
      "Level Difficulty": "Free Easy Demon",
      "Progresses": "AngryBanana1212 - 100%",
      "Points": "0.125"
    }
  ],
  "impossible": [
    {
      "Levels": "sakupen dih",
      "Top Impossible": "top 1",
      "Author": "NazarHK",
      "CPS": "High",
      "ID": "183",
      "Использование Tps bypass": "Разрешено",
      "Рекорд сервера": "No",
      "Low cps - <5 cps": ""
    },
    {
      "Levels": "help god",
      "Top Impossible": "top 2",
      "Author": "techopro9",
      "CPS": "High",
      "ID": "224",
      "Использование Tps bypass": "Запрещено",
      "Рекорд сервера": "No",
      "Low cps - <5 cps": ""
    },
    {
      "Levels": "silent sakupen lvl2",
      "Top Impossible": "top 3",
      "Author": "TheUNrealKorben(pro100nubikcl)",
      "CPS": "Ultra High",
      "ID": "165",
      "Использование Tps bypass": "Запрещено",
      "Рекорд сервера": "TheUNrealkorben - 5.67%",
      "Low cps - <5 cps": "Medium cps 5-10 cps"
    },
    {
      "Levels": "silent denouement",
      "Top Impossible": "top 4",
      "Author": "techopro9",
      "CPS": "High",
      "ID": "167",
      "Использование Tps bypass": "Запрещено",
      "Рекорд сервера": "No",
      "Low cps - <5 cps": ""
    },
    {
      "Levels": "ton 67",
      "Top Impossible": "top 5",
      "Author": "NazarHK",
      "CPS": "High",
      "ID": "164",
      "Использование Tps bypass": "Разрешено",
      "Рекорд сервера": "NazarHK - 30%",
      "Low cps - <5 cps": "High cps - 10-15 cps"
    },
    {
      "Levels": "Asmarin",
      "Top Impossible": "top 6",
      "Author": "techopro9",
      "CPS": "High",
      "ID": "163",
      "Использование Tps bypass": "Запрещено",
      "Рекорд сервера": "techopro9 - 40%",
      "Low cps - <5 cps": "Ultra High - 15 cps only"
    },
    {
      "Levels": "sakupen pig",
      "Top Impossible": "top 7",
      "Author": "TheUNrealKorben(pro100nubikcl)",
      "CPS": "High",
      "ID": "160",
      "Использование Tps bypass": "Запрещено",
      "Рекорд сервера": "No",
      "Low cps - <5 cps": ""
    },
    {
      "Levels": "Snowflake (UNNERFIED)",
      "Top Impossible": "top 8",
      "Author": "NazarHK",
      "CPS": "Medium",
      "ID": "147",
      "Использование Tps bypass": "Запрещено",
      "Рекорд сервера": "No",
      "Low cps - <5 cps": ""
    },
    {
      "Levels": "Evil Parallelogram",
      "Top Impossible": "top 9",
      "Author": "techopro9",
      "CPS": "Medium",
      "ID": "209",
      "Использование Tps bypass": "Запрещено",
      "Рекорд сервера": "No",
      "Low cps - <5 cps": ""
    },
    {
      "Levels": "lose arrival pig",
      "Top Impossible": "top 10",
      "Author": "TheUNrealKorben(pro100nubikcl)",
      "CPS": "Low",
      "ID": "151",
      "Использование Tps bypass": "Запрещено",
      "Рекорд сервера": "techopro9 - 20%",
      "Low cps - <5 cps": ""
    }
  ],
  "slayers": [
    {
      "Slayers": "AngryBanana1212",
      "Tops": "1",
      "Points": "1337, 665",
      "Challenge point": "1000"
    },
    {
      "Slayers": "TheUNrealkorben",
      "Tops": "2",
      "Points": "188,36",
      "Challenge point": "0"
    },
    {
      "Slayers": "techopro9",
      "Tops": "3",
      "Points": "87,31",
      "Challenge point": "950"
    },
    {
      "Slayers": "NazarHK",
      "Tops": "4",
      "Points": "26,21",
      "Challenge point": "0"
    },
    {
      "Slayers": "DimStrem",
      "Tops": "5",
      "Points": "0",
      "Challenge point": "0"
    }
  ],
  "future": [
    {
      "Levels": "Sakupen Disco",
      "Upcoming Top": "Top 3-5",
      "Author": "techopro9",
      "Verifer": "techopro9",
      "Difficulty": "Hell Extreme Demon",
      "Progress": "38%",
      "Status": "In progress"
    },
    {
      "Levels": "Silent Every End",
      "Upcoming Top": "Top 1",
      "Author": "pro100nubickl",
      "Verifer": "pro100nubikcl",
      "Difficulty": "Melted Extreme Demon",
      "Progress": "100%",
      "Status": "Paused"
    },
    {
      "Levels": "Every Start",
      "Upcoming Top": "Top 14-16",
      "Author": "techopro9",
      "Verifer": "pro100nubickl",
      "Difficulty": "Hard Demon - Moderate Hard Demon",
      "Progress": "32%",
      "Status": "In progress"
    },
    {
      "Levels": "Every End",
      "Upcoming Top": "Top 4-5",
      "Author": "techopro9, ?????",
      "Verifer": "pro100nubickl",
      "Difficulty": "Brutal Extreme Demon",
      "Progress": "0%",
      "Status": "Not start"
    },
    {
      "Levels": "Pig Buff Base",
      "Upcoming Top": "Top 1",
      "Author": "AngryBanana1212",
      "Verifer": "AngryBanana1212",
      "Difficulty": "Solid Extreme Demon",
      "Progress": "100%",
      "Status": "Paused"
    },
    {
      "Levels": "Loneliness",
      "Upcoming Top": "Top 1",
      "Author": "techopro9",
      "Verifer": "????",
      "Difficulty": "Frozen Extreme Demon",
      "Progress": "8%",
      "Status": "In Progress"
    },
    {
      "Levels": "Asankhyeya",
      "Upcoming Top": "Top 4",
      "Author": "techopro9",
      "Verifer": "techopro9",
      "Difficulty": "Hell Extreme Demon",
      "Progress": "49%",
      "Status": "In Progress"
    },
    {
      "Levels": "Swinopowal",
      "Upcoming Top": "Top 3-6",
      "Author": "AngryBanana1212",
      "Verifer": "AngryBanana1212",
      "Difficulty": "Hell Extreme Demon - Bizarre Extreme Demon",
      "Progress": "100%",
      "Status": "In Progress"
    },
    {
      "Levels": "Disconnection",
      "Upcoming Top": "?",
      "Author": "NazarHK",
      "Verifer": "Techopro9",
      "Difficulty": "Insane/Extreme Demon",
      "Progress": "20%",
      "Status": "In Progress"
    },
    {
      "Levels": "Quantum Terminal",
      "Upcoming Top": "?",
      "Author": "NazarHK",
      "Verifer": "AngryBanana1212",
      "Difficulty": "Insane Demon",
      "Progress": "75%",
      "Status": "In Progress"
    }
  ],
  "silent": [
    {
      "Name": "Abomination",
      "Top": "1",
      "FPS": "2400",
      "TPS": "960",
      "CPS": "31463",
      "Author": "pro100nubickl"
    },
    {
      "Name": "Stereo madness copy",
      "Top": "2",
      "FPS": "2400",
      "TPS": "960",
      "CPS": "33524",
      "Author": "pro100nubickl"
    },
    {
      "Name": "Hierodule",
      "Top": "3",
      "FPS": "240",
      "TPS": "no",
      "CPS": "240",
      "Author": "NazarHK"
    }
  ],
  "cll": [
    {
      "Name": "Tunnel of Hell",
      "Top": "1",
      "Author": "DimStream",
      "Verifer": "AngryBanana1212",
      "CPS": "5-7",
      "FPS": "Any",
      "Challenge point": "1000",
      "Challenge point Record": "500"
    },
    {
      "Name": "i gonna give you up",
      "Top": "2",
      "Author": "techopro9",
      "Verifer": "techopro9",
      "CPS": "5-6",
      "FPS": "Any",
      "Challenge point": "950",
      "Challenge point Record": "-"
    }
  ]
};

const CHANGELOG = [];

const STATE = {
  activeTab: 'home',
  data: {
    demonlist: [],
    impossible: [],
    slayers: [],
    future: [],
    silent: [],
    cll: []
  },
  filters: {
    demonlist: { search: '', difficulty: 'all', sort: 'rank-asc' },
    impossible: { search: '', cps: 'all', tps: 'all', sort: 'rank-asc' },
    slayers: { search: '' },
    future: { search: '', difficulty: 'all' },
    silent: { search: '', sort: 'rank-asc' },
    cll: { search: '', sort: 'rank-asc' }
  },
  selectedLevel: {
    demonlist: null,
    impossible: null
  },
  loading: {
    demonlist: true,
    impossible: true,
    slayers: true,
    future: true,
    silent: true,
    cll: true
  },
  errors: {
    demonlist: null,
    impossible: null,
    slayers: null,
    future: null,
    silent: null,
    cll: null
  }
};

let currentTab = '';

document.addEventListener('DOMContentLoaded', () => {
  setupNavigation();
  setupFilterListeners();
  setupMobileModal();
  setupSupport();
  loadAllData();
  window.addEventListener('hashchange', handleRouting);
});

function setupSupport() {
  const modal = document.getElementById('support-modal');
  const form = document.getElementById('support-form');
  const successDiv = document.getElementById('support-success');
  const submitBtn = document.getElementById('support-submit');

  function openModal() {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }

  document.getElementById('support-nav-btn').addEventListener('click', openModal);
  document.getElementById('support-fab').addEventListener('click', openModal);
  document.getElementById('support-modal-close').addEventListener('click', closeModal);

  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    submitBtn.textContent = 'Отправка...';
    submitBtn.disabled = true;

    try {
      const response = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { 'Accept': 'application/json' }
      });

      if (response.ok) {
        form.style.display = 'none';
        successDiv.style.display = 'block';
        setTimeout(closeModal, 3000);
        // Reset for next time
        setTimeout(() => {
          form.reset();
          form.style.display = 'block';
          successDiv.style.display = 'none';
          submitBtn.textContent = 'Отправить сообщение';
          submitBtn.disabled = false;
        }, 3200);
      } else {
        throw new Error('Server error');
      }
    } catch (err) {
      submitBtn.textContent = 'Ошибка. Попробуйте ещё раз';
      submitBtn.disabled = false;
      setTimeout(() => {
        submitBtn.textContent = 'Отправить сообщение';
      }, 3000);
    }
  });
}

function handleRouting() {
  const hash = window.location.hash || '#home';
  const cleanHash = hash.split('?')[0];
  const params = parseQueryParams(hash);
  const tabName = cleanHash.replace('#', '');
  const validTabs = ['home', 'demonlist', 'impossible', 'slayers', 'future', 'silent', 'cll', 'rules'];

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

    const validData = parsed.filter(item => {
      if (name === 'demonlist') return !!getProp(item, ['level', 'name']);
      if (name === 'impossible') return !!getProp(item, ['levels', 'level', 'name']);
      if (name === 'slayers') return !!getProp(item, ['slayers', 'slayer', 'player']);
      if (name === 'future') return !!getProp(item, ['levels', 'level', 'name']);
      if (name === 'silent') return !!getProp(item, ['name']);
      if (name === 'cll') return !!getProp(item, ['name']);
      return true;
    });

    if (validData.length === 0) {
      throw new Error('Empty CSV data');
    }

    STATE.data[name] = validData;
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

  const slSearch = document.getElementById('silent-search');
  const slSort = document.getElementById('silent-sort');

  slSearch.addEventListener('input', (e) => {
    STATE.filters.silent.search = e.target.value;
    renderList('silent');
  });
  slSort.addEventListener('change', (e) => {
    STATE.filters.silent.sort = e.target.value;
    renderList('silent');
  });

  const cllSearch = document.getElementById('cll-search');
  if (cllSearch) {
    cllSearch.addEventListener('input', (e) => {
      STATE.filters.cll.search = e.target.value;
      renderList('cll');
    });
  }
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
  } else if (name === 'silent') {
    renderSilentList(list);
  } else if (name === 'cll') {
    renderCllList(list);
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
    const warningBadge = getLevelWarning(levelName)
      ? '<span class="level-warning-badge" title="Есть особые условия зачёта">!</span>'
      : '';

    row.innerHTML = `
      <div class="cell-rank">#${rank}</div>
      <div class="cell-name-block">
        <div class="cell-name">${levelName}${warningBadge}</div>
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
    const authorHTML = formatAuthor(author);
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
      <div class="cell-author cell-sub">${authorHTML}</div>
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
    const ptsA = parseFloat((getProp(a, ['points', 'очки']) || '0').replace(',', '.')) || 0;
    const ptsB = parseFloat((getProp(b, ['points', 'очки']) || '0').replace(',', '.')) || 0;
    return ptsB - ptsA;
  });

  if (filtered.length === 0) {
    container.innerHTML = '<div style="padding: 30px; text-align: center; color: var(--text-secondary);">Ничего не найдено</div>';
    return;
  }

  container.innerHTML = '';
  filtered.forEach((item, index) => {
    const rank = index + 1;
    const nickname = getProp(item, ['slayers', 'slayer', 'player']);
    const points = getProp(item, ['points', 'очки']) || '0';
    const cllPoints = getProp(item, ['challenge point', 'challenge points', 'cll points', 'challenge']) || '0';

    let rankClass = 'cell-rank-normal';
    if (rank === 1) rankClass = 'cell-rank-gold';
    else if (rank === 2) rankClass = 'cell-rank-silver';
    else if (rank === 3) rankClass = 'cell-rank-bronze';

    const row = document.createElement('div');
    row.className = 'leaderboard-row grid-slayers';
    row.innerHTML = `
      <div class="cell-rank"><span class="${rankClass}">#${rank}</span></div>
      <div class="cell-name">${nickname}</div>
      <div class="cell-points" style="font-weight: 600; color: var(--accent-cyan);">${points}</div>
      <div class="cell-points" style="font-weight: 600; color: var(--accent-purple);">${cllPoints}</div>
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

    const status = getProp(item, ['status', 'статус']) || 'Неизвестно';
    const progress = getProp(item, ['progress', 'прогресс']) || '0%';

    if (verifier.includes('?????') || verifier.trim() === '') {
      verifier = '<span style="color: var(--text-muted);">Неизвестно</span>';
    }

    const diffClass = getDifficultyClass(diff);
    const badgeName = getCleanDifficultyName(diff);

    let statusColor = 'var(--text-primary)';
    const sLower = status.toLowerCase();
    if (sLower.includes('заброшен') || sLower.includes('отменен')) statusColor = '#ef4444';
    else if (sLower.includes('заморожен')) statusColor = '#f59e0b';
    else if (sLower.includes('строит') || sLower.includes('процесс')) statusColor = '#3b82f6';
    else if (sLower.includes('готов') || sLower.includes('завершен')) statusColor = '#10b981';

    let progressHTML = `<span style="font-weight: 500;">${progress}</span>`;
    const progMatch = progress.match(/(\d+)%/);
    if (progMatch) {
      const pVal = progMatch[1];
      progressHTML = `
        <div style="flex: 1; max-width: 120px; background: rgba(255,255,255,0.1); border-radius: 4px; height: 16px; overflow: hidden; position: relative; display: flex; align-items: center; margin-left: 8px;">
          <div style="background: var(--accent-cyan); height: 100%; width: ${pVal}%;"></div>
          <span style="position: absolute; width: 100%; text-align: center; font-size: 0.7rem; font-weight: 600; text-shadow: 1px 1px 2px rgba(0,0,0,0.8); color: white;">${progress}</span>
        </div>
      `;
    }

    const card = document.createElement('div');
    card.className = 'future-card';
    card.innerHTML = `
      <div class="future-rank-badge">${upcomingTop}</div>
      <div class="future-name">${levelName}</div>
      
      <div class="future-detail-item">
        <span class="future-detail-label" style="color: var(--text-secondary);">Сложность:</span>
        <span class="badge ${diffClass}" style="padding: 2px 6px; font-size: 0.7rem; white-space: nowrap;">${badgeName}</span>
      </div>
      
      <div class="future-detail-item" style="margin-top: 8px;">
        <span class="future-detail-label" style="color: var(--text-secondary);">Создатель:</span>
        <span style="font-weight: 500;">${author}</span>
      </div>
      
      <div class="future-detail-item">
        <span class="future-detail-label" style="color: var(--text-secondary);">Верификатор:</span>
        <span style="font-weight: 500;">${verifier}</span>
      </div>

      <div class="future-detail-item" style="margin-top: 8px;">
        <span class="future-detail-label" style="color: var(--text-secondary);">Статус:</span>
        <span style="font-weight: 600; color: ${statusColor};">${status}</span>
      </div>
      
      <div class="future-detail-item" style="${progMatch ? 'display: flex; align-items: center; justify-content: space-between;' : ''}">
        <span class="future-detail-label" style="color: var(--text-secondary);">Прогресс:</span>
        ${progressHTML}
      </div>
    `;

    container.appendChild(card);
  });
}

function renderSilentList(list) {
  const container = document.getElementById('silent-table');
  let filtered = [...list];
  const filters = STATE.filters.silent;

  if (filters.search) {
    const q = filters.search.toLowerCase();
    filtered = filtered.filter(item => {
      const name = getProp(item, ['name']).toLowerCase();
      return name.includes(q);
    });
  }

  filtered.sort((a, b) => {
    const rankA = parseInt(getProp(a, ['top', 'rank'])) || 9999;
    const rankB = parseInt(getProp(b, ['top', 'rank'])) || 9999;

    if (filters.sort === 'rank-asc') return rankA - rankB;
    if (filters.sort === 'rank-desc') return rankB - rankA;
    if (filters.sort === 'name-asc') {
      const nameA = getProp(a, ['name']).toLowerCase();
      const nameB = getProp(b, ['name']).toLowerCase();
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
    const rank = getProp(item, ['top', 'rank']);
    const levelName = getProp(item, ['name']);
    const author = getProp(item, ['author', 'creator']);
    const fps = getProp(item, ['fps']);
    const tps = getProp(item, ['tps']);
    const cps = getProp(item, ['cps']);

    const row = document.createElement('div');
    row.className = 'leaderboard-row grid-silent';
    row.innerHTML = `
      <div class="cell-rank">#${rank}</div>
      <div class="cell-name">${levelName}</div>
      <div class="cell-author cell-sub">${author}</div>
      <div class="cell-fps" style="font-weight: 600; color: var(--accent-cyan);">${fps}</div>
      <div class="cell-tps">${tps}</div>
      <div class="cell-cps" style="font-weight: 600; color: var(--accent-purple);">${cps}</div>
    `;

    container.appendChild(row);
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
        let splitIdx = prog.indexOf(' - ');
        if (splitIdx === -1) {
          splitIdx = prog.lastIndexOf('-');
        }
        let namePart = prog;
        let progPart = '100%';

        if (splitIdx !== -1) {
          namePart = prog.substring(0, splitIdx).trim();
          progPart = prog.substring(splitIdx + (prog.charAt(splitIdx) === ' ' ? 3 : 1)).trim();
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

      ${getLevelWarningHTML(levelName)}
      
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
      
      <a class="btn btn-secondary" style="width: 100%; display: flex; align-items: center; justify-content: center; gap: 8px;" href="https://discord.gg/u4wjPv3ggH" target="_blank">
        <svg width="16" height="16" viewBox="0 0 24 24"><use href="#icon-discord"/></svg>
        Подать рекорд
      </a>
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
      
      <a class="btn btn-secondary" style="width: 100%; display: flex; align-items: center; justify-content: center; gap: 8px;" href="https://discord.gg/u4wjPv3ggH" target="_blank">
        <svg width="16" height="16" viewBox="0 0 24 24"><use href="#icon-discord"/></svg>
        Обсудить в Discord
      </a>
    `;
  } else if (tabName === 'cll') {
    const rawRank = getProp(item, ['top', 'rank']);
    const rankNum = rawRank ? String(rawRank).replace(/\D/g, '') : '';
    const author = getProp(item, ['author', 'creator']);
    const verifier = getProp(item, ['verifer', 'verifier']);
    const cps = getProp(item, ['cps']);
    const fps = getProp(item, ['fps']);
    const points = getProp(item, ['challenge point']);
    const recordPoints = getProp(item, ['challenge point record']);
    const record = getProp(item, ['records', 'рекорд']);

    return `
      <div class="detail-title-wrapper">
        <div class="detail-rank">CLL Топ #${rankNum}</div>
        <h2 class="detail-title">${levelName}</h2>
      </div>
      
      <div class="detail-meta-list">
        <div class="detail-meta-item">
          <span class="detail-meta-label">Создатель</span>
          <span class="detail-meta-val">${author}</span>
        </div>
        <div class="detail-meta-item">
          <span class="detail-meta-label">Верификатор</span>
          <span class="detail-meta-val">${verifier}</span>
        </div>
        <div class="detail-meta-item">
          <span class="detail-meta-label">CPS</span>
          <span class="detail-meta-val" style="color: #a855f7; font-weight: 700;">${cps}</span>
        </div>
        <div class="detail-meta-item">
          <span class="detail-meta-label">FPS</span>
          <span class="detail-meta-val">${fps}</span>
        </div>
        <div class="detail-meta-item">
          <span class="detail-meta-label">Очки</span>
          <span class="detail-meta-val" style="color: var(--accent-cyan); font-weight: 700;">${points} pts</span>
        </div>
        ${recordPoints && recordPoints !== '-' ? `
        <div class="detail-meta-item">
          <span class="detail-meta-label">Очки (рекорд)</span>
          <span class="detail-meta-val" style="color: var(--color-silver); font-weight: 700;">${recordPoints} pts</span>
        </div>
        ` : ''}
      </div>
      
      <div class="detail-progress-section">
        <div class="progress-section-title">Лучший рекорд</div>
        <div class="progress-list">
          <div class="progress-item" style="border: none; padding: 4px 0;">
            <span class="progress-player" style="font-weight: 500; color: var(--accent-cyan);">
              ${record && record !== '-' && record.toLowerCase() !== 'no' && record !== '' ? record : '<span style="color: var(--text-muted);">Нет рекордов</span>'}
            </span>
          </div>
        </div>
      </div>
      
      <a class="btn btn-secondary" style="width: 100%; display: flex; align-items: center; justify-content: center; gap: 8px;" href="https://discord.gg/vBkthNt2N" target="_blank">
        <svg width="16" height="16" viewBox="0 0 24 24"><use href="#icon-discord"/></svg>
        Подать рекорд
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
  document.getElementById('stat-silent-count').textContent = STATE.data.silent.length || '-';
  document.getElementById('stat-cll-count').textContent = STATE.data.cll.length || '-';

  if (STATE.data.slayers.length > 0) {
    const slayersCopy = [...STATE.data.slayers];
    slayersCopy.sort((a, b) => {
      const ptsA = parseFloat((getProp(a, ['points', 'очки']) || '0').replace(',', '.')) || 0;
      const ptsB = parseFloat((getProp(b, ['points', 'очки']) || '0').replace(',', '.')) || 0;
      return ptsB - ptsA;
    });
    const topSlayer = slayersCopy[0];
    const name = getProp(topSlayer, ['slayers', 'slayer', 'player']);
    const pts = getProp(topSlayer, ['points', 'очки']);
    document.getElementById('stat-top-slayer').textContent = `${name} (${pts} pts)`;

    const slayersCllCopy = [...STATE.data.slayers];
    slayersCllCopy.sort((a, b) => {
      const ptsA = parseFloat((getProp(a, ['challenge point', 'challenge points', 'cll points', 'challenge']) || '0').replace(',', '.')) || 0;
      const ptsB = parseFloat((getProp(b, ['challenge point', 'challenge points', 'cll points', 'challenge']) || '0').replace(',', '.')) || 0;
      return ptsB - ptsA;
    });
    const topCllSlayer = slayersCllCopy[0];
    const nameCll = getProp(topCllSlayer, ['slayers', 'slayer', 'player']);
    const cllPoints = getProp(topCllSlayer, ['challenge point', 'challenge points', 'cll points', 'challenge']) || '0';

    if (parseFloat(cllPoints.replace(',', '.')) > 0) {
      document.getElementById('stat-top-slayer-cll').textContent = `${nameCll} (${cllPoints} pts)`;
    } else {
      document.getElementById('stat-top-slayer-cll').textContent = '-';
    }
  } else {
    document.getElementById('stat-top-slayer').textContent = '-';
    document.getElementById('stat-top-slayer-cll').textContent = '-';
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

  const liveUpdates = [];
  const listsToTrack = [
    { key: 'demonlist', name: 'Demonlist', nameField: ['level', 'name'] },
    { key: 'impossible', name: 'Impossible List', nameField: ['levels', 'level', 'name'] }
  ];

  listsToTrack.forEach(listInfo => {
    const currentList = STATE.data[listInfo.key] || [];
    const fallbackList = FALLBACK_DATA[listInfo.key] || [];

    const fallbackMap = new Map();
    fallbackList.forEach((item, idx) => {
      const name = getProp(item, listInfo.nameField);
      if (name) fallbackMap.set(name.toLowerCase().trim(), { rank: idx + 1, item });
    });

    currentList.forEach((item, idx) => {
      const name = getProp(item, listInfo.nameField);
      if (!name) return;

      const currentRank = idx + 1;
      const oldData = fallbackMap.get(name.toLowerCase().trim());

      const getAboveBelow = (index) => {
        const above = index > 0 ? getProp(currentList[index - 1], listInfo.nameField) : null;
        const below = index < currentList.length - 1 ? getProp(currentList[index + 1], listInfo.nameField) : null;
        return { above, below };
      };

      if (!oldData) {
        liveUpdates.push({ type: 'add', list: listInfo.name, name, newRank: currentRank, date: 'ТЕКУЩИЕ ИЗМЕНЕНИЯ', ...getAboveBelow(idx) });
      } else {
        const oldRank = oldData.rank;
        if (currentRank < oldRank) {
          liveUpdates.push({ type: 'up', list: listInfo.name, name, oldRank, newRank: currentRank, date: 'ТЕКУЩИЕ ИЗМЕНЕНИЯ', ...getAboveBelow(idx) });
        } else if (currentRank > oldRank) {
          liveUpdates.push({ type: 'down', list: listInfo.name, name, oldRank, newRank: currentRank, date: 'ТЕКУЩИЕ ИЗМЕНЕНИЯ', ...getAboveBelow(idx) });
        }
      }
    });
  });

  const allUpdates = [...liveUpdates, ...(typeof CHANGELOG !== 'undefined' ? CHANGELOG : [])];

  if (allUpdates.length === 0) {
    updatesContainer.innerHTML = `
      <div class="timeline-date-divider"><span>АКТУАЛЬНО</span></div>
      <div class="timeline-item" style="opacity: 0.7;">
        <div class="timeline-icon place" style="border-color: rgba(255,255,255,0.1); background: transparent;">
          <svg viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none"/></svg>
        </div>
        <div class="timeline-content">Все списки синхронизированы. За последнее время изменений не зафиксировано.</div>
      </div>
    `;
    return;
  }

  let html = '';
  let currentDate = null;

  allUpdates.forEach(up => {
    if (up.date !== currentDate) {
      currentDate = up.date;
      html += '<div class="timeline-date-divider"><span>' + currentDate + '</span></div>';
    }

    let iconHtml = '';
    let textHtml = '';

    const aboveStr = up.above ? `, выше <span class="level-ref">${up.above}</span>` : '';
    const belowStr = up.below ? `, ниже <span class="level-ref">${up.below}</span>` : '';

    if (up.type === 'add') {
      iconHtml = '<div class="timeline-icon place"><div class="inner-dot"></div></div>';
      textHtml = '<span class="level-name">' + up.name + '</span> добавлен на #' + up.newRank + ' (' + up.list + ')' + aboveStr + belowStr;
    } else if (up.type === 'up') {
      iconHtml = '<div class="timeline-icon move-up"><svg viewBox="0 0 24 24"><path d="M12 20V4M6 14L12 20L18 14" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none"/></svg></div>';
      textHtml = '<span class="level-name">' + up.name + '</span> #' + up.oldRank + ' &rarr; #' + up.newRank + ' (' + up.list + ')' + aboveStr + belowStr;
    } else if (up.type === 'down') {
      iconHtml = '<div class="timeline-icon move-down"><svg viewBox="0 0 24 24"><path d="M12 4V20M6 14L12 20L18 14" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none"/></svg></div>';
      textHtml = '<span class="level-name">' + up.name + '</span> #' + up.oldRank + ' &rarr; #' + up.newRank + ' (' + up.list + ')' + aboveStr + belowStr;
    }

    html += `
      <div class="timeline-item">
        ${iconHtml}
        <div class="timeline-content">${textHtml}</div>
      </div>
    `;
  });

  updatesContainer.innerHTML = html;
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

function getDifficultyClass(diff) {
  if (!diff || diff.trim() === '' || diff.trim() === '-') return 'badge-diff-unknown';
  const d = diff.toLowerCase();
  if (d.includes('extreme')) return 'badge-diff-extreme';
  if (d.includes('insane')) return 'badge-diff-insane';
  if (d.includes('hard')) return 'badge-diff-hard';
  if (d.includes('medium')) return 'badge-diff-medium';
  if (d.includes('easy')) return 'badge-diff-easy';
  return 'badge-diff-unknown';
}

function getCleanDifficultyName(diff) {
  if (!diff || diff.trim() === '' || diff.trim() === '-') return 'Неизвестно';
  // If the difficulty contains a dash (range like "Hard - Extreme"), show unknown
  if (diff.includes(' - ')) return 'Неизвестно';
  return diff.trim();
}

function formatAuthor(author) {
  if (!author) return '';
  const match = author.match(/^([^(]+)\(([^)]+)\)(.*)$/);
  if (!match) return author;
  const main = match[1].trim();
  const alias = match[2].trim();
  const rest = match[3].trim();
  return `${main}${rest ? ' ' + rest : ''}<br><span style="font-size:0.72rem; color: var(--text-muted); opacity: 0.7;">${alias}</span>`;
}

function getLevelWarning(levelName) {
  const key = (levelName || '').trim().toLowerCase();
  return LEVEL_WARNINGS[key] || null;
}

function getLevelWarningHTML(levelName) {
  const message = getLevelWarning(levelName);
  if (!message) return '';

  return `
    <div class="level-warning-banner">
      <span class="level-warning-icon" aria-hidden="true">!</span>
      <span>${message}</span>
    </div>
  `;
}

function getCpsBadge(cps) {
  const c = (cps || '').toLowerCase().replace(/\s+/g, '');
  if (c.includes('low')) return '<span class="badge badge-cps-low">Low CPS (&lt;5)</span>';
  if (c.includes('medium')) return '<span class="badge badge-cps-medium">Medium CPS (5-10)</span>';
  if (c.includes('high') && !c.includes('ultra')) return '<span class="badge badge-cps-high">High CPS (10-15)</span>';
  if (c.includes('ultra') || c.includes('15+')) return '<span class="badge badge-cps-ultra">Ultra CPS (всегда 15)</span>';
  return `<span class="badge badge-cps-high">${cps}</span>`;
}

function renderCllList(list) {
  const container = document.getElementById('cll-table');
  if (!container) return;
  let filtered = [...list];
  const filters = STATE.filters.cll;

  if (filters.search) {
    const q = filters.search.toLowerCase();
    filtered = filtered.filter(item => {
      const name = getProp(item, ['name']).toLowerCase();
      return name.includes(q);
    });
  }

  filtered.sort((a, b) => {
    const rankA = parseInt(getProp(a, ['top', 'rank'])) || 9999;
    const rankB = parseInt(getProp(b, ['top', 'rank'])) || 9999;

    if (filters.sort === 'rank-asc') return rankA - rankB;
    if (filters.sort === 'rank-desc') return rankB - rankA;
    if (filters.sort === 'name-asc') {
      const nameA = getProp(a, ['name']).toLowerCase();
      const nameB = getProp(b, ['name']).toLowerCase();
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
    const rank = getProp(item, ['top', 'rank']);
    const levelName = getProp(item, ['name']);
    const author = getProp(item, ['author', 'creator']);
    const verifier = getProp(item, ['verifer', 'verifier']);
    const cps = getProp(item, ['cps']);
    const fps = getProp(item, ['fps']);
    const points = getProp(item, ['challenge point']);

    const isActive = STATE.selectedLevel.cll && getProp(STATE.selectedLevel.cll, ['name']) === levelName;
    const row = document.createElement('div');
    row.className = `leaderboard-row grid-cll ${isActive ? 'active' : ''}`;
    row.innerHTML = `
      <div class="cell-rank">#${rank}</div>
      <div class="cell-name">${levelName}</div>
      <div class="cell-author cell-sub">${author}</div>
      <div class="cell-author cell-sub">${verifier}</div>
      <div class="cell-points" style="color: #a855f7;">${cps}</div>
      <div class="cell-sub">${fps}</div>
      <div class="cell-points" style="font-weight: 600; color: var(--accent-cyan);">${points}</div>
    `;

    row.addEventListener('click', () => {
      selectLevel('cll', item);
      document.querySelectorAll('#cll-table .leaderboard-row').forEach(r => r.classList.remove('active'));
      row.classList.add('active');
    });

    container.appendChild(row);
  });
}
