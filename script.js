/*
 * PROJECT DATA
 * To add a live demo link, paste the deployed URL into `live`
 * (e.g. "https://resume-screening.streamlit.app"). A "Live Demo" button
 * appears automatically when `live` is set.
 */
const GH = 'https://github.com/anaschouhan001/';

const projects = [
  {
    title: 'ResearchGPT: Agentic AI Research Platform',
    cat: 'genai', catLabel: 'Generative AI', icon: 'fa-robot', featured: true,
    metric: '8-stage agent pipeline · 13 research sources',
    points: [
      'Engineered an 8-stage LangGraph agent pipeline (planner, research, retrieval, fact-check, writer, report) that autonomously produces fully cited research reports.',
      'Integrated 13 research sources (arXiv, Semantic Scholar, PubMed, CrossRef) behind a pluggable adapter interface.',
      'RAG with ChromaDB, sentence-transformer embeddings and hybrid vector + BM25 retrieval (reciprocal rank fusion), plus per-claim confidence scoring.',
      'Production-grade: 4,200+ lines of Python, REST endpoints, JWT auth, Redis, Celery, Docker and automated tests.'
    ],
    tags: ['Python', 'LangGraph', 'RAG', 'ChromaDB', 'FastAPI', 'Docker', 'Redis'],
    github: GH + 'AI-Researcher', live: ''
  },
  {
    title: 'AI Resume Screening & Classification',
    cat: 'ml', catLabel: 'NLP · Machine Learning', icon: 'fa-file-lines',
    metric: '98% test accuracy',
    desc: 'NLP classifier that routes resumes (PDF, DOCX, TXT) into 5+ job categories. Full pipeline of NLTK preprocessing, TF-IDF vectorization and scikit-learn classification, deployed as a Streamlit app.',
    tags: ['Python', 'scikit-learn', 'NLTK', 'TF-IDF', 'Streamlit'],
    github: GH + 'Resume-Screening-App', live: ''
  },
  {
    title: 'AI-Powered Food Inventory Assistant',
    cat: 'genai', catLabel: 'Generative AI · Automation', icon: 'fa-comments',
    metric: 'Real-time stock queries',
    desc: 'Conversational AI agent that answers live stock questions using LLM tool-calling and prompt engineering, with Google Sheets as a real-time database, orchestrated in n8n.',
    tags: ['n8n', 'Google Gemini API', 'Google Sheets', 'LLM Tool-Calling'],
    github: '', live: ''
  },
  {
    title: 'Book Recommender System',
    cat: 'ml', catLabel: 'Machine Learning', icon: 'fa-book-open',
    metric: 'Personalized recommendations',
    desc: 'Recommendation engine built on user rating data that suggests similar books by title, served through an interactive Streamlit interface.',
    tags: ['Python', 'scikit-learn', 'Pandas', 'Streamlit'],
    github: GH + 'Book-recommender-System', live: ''
  },
  {
    title: 'E-Commerce Sales Dashboard',
    cat: 'analytics', catLabel: 'Analytics & BI', icon: 'fa-chart-pie',
    metric: '10,000+ transactions modeled',
    desc: 'Interactive Power BI dashboard tracking revenue, profit, customer segments and regional growth, with data modeled and transformed in Power Query.',
    tags: ['Power BI', 'Power Query', 'DAX', 'Data Modeling'],
    github: GH + 'E-Commerce-Sales-Data-Dashboard', live: ''
  },
  {
    title: 'Spelling & Grammar Corrector',
    cat: 'genai', catLabel: 'NLP · Web App', icon: 'fa-spell-check',
    metric: 'Transformer-based correction',
    desc: 'A mini "Grammarly": a Flask web app that corrects spelling and grammar using TextBlob and a Hugging Face grammar-correction model, containerized with Docker.',
    tags: ['Python', 'Flask', 'Hugging Face', 'TextBlob', 'Docker'],
    github: GH + 'Spelling-and-Grammer-Corrector', live: ''
  },
  {
    title: 'Diwali Sales Analysis',
    cat: 'analytics', catLabel: 'Analytics · EDA', icon: 'fa-magnifying-glass-chart',
    desc: 'Exploratory data analysis of festive-season sales to identify high-value customer segments by age, gender, state and occupation, and the top-performing product categories.',
    tags: ['Python', 'Pandas', 'Matplotlib', 'Seaborn', 'EDA'],
    github: GH + 'Diwali-Sales-Data', live: ''
  },
  {
    title: 'Netflix Content Visualization',
    cat: 'analytics', catLabel: 'Analytics · Visualization', icon: 'fa-film',
    desc: 'Visual analysis of the Netflix titles dataset: movies vs. TV shows, content ratings, release trends, durations and the top producing countries.',
    tags: ['Python', 'Pandas', 'Matplotlib'],
    github: GH + 'Netflx_Data_visualisation', live: ''
  },
  {
    title: 'House Price Prediction',
    cat: 'ml', catLabel: 'Machine Learning', icon: 'fa-house',
    desc: 'Linear regression model that predicts house prices, with data cleaning, feature analysis, visualization and evaluation of model performance.',
    tags: ['Python', 'scikit-learn', 'Pandas', 'NumPy', 'Regression'],
    github: GH + 'linear_regression_practice.project', live: ''
  },
  {
    title: 'Facial Emotion Detection',
    cat: 'ml', catLabel: 'Computer Vision', icon: 'fa-face-smile',
    desc: 'Real-time facial emotion detection from a webcam feed, using OpenCV Haar-cascade face detection and DeepFace emotion analysis.',
    tags: ['Python', 'OpenCV', 'DeepFace', 'Computer Vision'],
    github: GH + 'Emotion-detection-using-facial-expression', live: ''
  }
];

/* ---------- Render projects ---------- */
const grid = document.getElementById('projectGrid');

function card(p) {
  const body = p.points
    ? `<ul>${p.points.map(x => `<li>${x}</li>`).join('')}</ul>`
    : `<p>${p.desc}</p>`;
  const links = [];
  if (p.live) links.push(`<a class="live" href="${p.live}" target="_blank" rel="noopener"><i class="fa-solid fa-arrow-up-right-from-square"></i> Live Demo</a>`);
  if (p.github) links.push(`<a href="${p.github}" target="_blank" rel="noopener"><i class="fa-brands fa-github"></i> Source Code</a>`);
  if (!p.github && !p.live) links.push(`<span class="note"><i class="fa-solid fa-lock"></i> Built for a private workflow</span>`);
  return `
    <article class="project reveal${p.featured ? ' featured' : ''}" data-cat="${p.cat}">
      <div class="project-top">
        <div class="project-icon"><i class="fa-solid ${p.icon}"></i></div>
        <span class="project-cat">${p.catLabel}</span>
      </div>
      <h3>${p.title}</h3>
      ${p.metric ? `<span class="metric">${p.metric}</span>` : ''}
      ${body}
      <div class="tags">${p.tags.map(t => `<span>${t}</span>`).join('')}</div>
      <div class="project-links">${links.join('')}</div>
    </article>`;
}

grid.innerHTML = projects.map(card).join('');

document.getElementById('filters').addEventListener('click', e => {
  const btn = e.target.closest('.chip');
  if (!btn) return;
  document.querySelectorAll('#filters .chip').forEach(c => c.classList.toggle('active', c === btn));
  const f = btn.dataset.filter;
  grid.querySelectorAll('.project').forEach(el => {
    el.hidden = f !== 'all' && el.dataset.cat !== f;
  });
});

/* ---------- Reveal on scroll ---------- */
const io = new IntersectionObserver(entries => {
  entries.forEach(en => { if (en.isIntersecting) { en.target.classList.add('show'); io.unobserve(en.target); } });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));

/* ---------- Active nav link ---------- */
const navLinks = [...document.querySelectorAll('.nav a')];
const spy = new IntersectionObserver(entries => {
  entries.forEach(en => {
    if (en.isIntersecting) navLinks.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + en.target.id));
  });
}, { rootMargin: '-45% 0px -50% 0px' });
document.querySelectorAll('main section[id]').forEach(s => spy.observe(s));

/* ---------- Mobile menu ---------- */
const nav = document.getElementById('nav');
document.getElementById('menuBtn').addEventListener('click', () => nav.classList.toggle('open'));
navLinks.forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));

/* ---------- Theme toggle ---------- */
const root = document.documentElement;
const themeBtn = document.getElementById('themeToggle');
const isDark = () => root.dataset.theme ? root.dataset.theme === 'dark' : matchMedia('(prefers-color-scheme: dark)').matches;
const syncIcon = () => { themeBtn.innerHTML = `<i class="fa-solid ${isDark() ? 'fa-sun' : 'fa-moon'}"></i>`; };
themeBtn.addEventListener('click', () => {
  root.dataset.theme = isDark() ? 'light' : 'dark';
  try { localStorage.setItem('theme', root.dataset.theme); } catch (e) {}
  syncIcon();
});
syncIcon();

document.getElementById('year').textContent = new Date().getFullYear();
