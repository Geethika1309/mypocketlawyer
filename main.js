function loadLaw() {
  const params = new URLSearchParams(window.location.search);
  const query = params.get('query')?.trim() || params.get('id')?.trim();
  const lang = params.get('lang') || 'en';

  if (!query) {
    showError(lang);
    return;
  }

  console.log(`Searching: "${query}" in ${lang}`);

  const law = lawData.find(item => {
    if (item.id.toLowerCase() === query.toLowerCase()) return true;
    if (item.title[lang]?.toLowerCase().includes(query.toLowerCase())) return true;
    return item.keywords[lang]?.some(kw => kw.toLowerCase().includes(query.toLowerCase()));
  });

  if (law) {
    displayContent(law, lang);
  } else {
    showError(lang);
  }
}

function displayContent(law, lang) {
  document.getElementById('lawTitle').textContent = law.title[lang] || law.title.en;
  document.getElementById('section1').textContent = law.section1[lang] || law.section1.en;
  document.getElementById('section2').textContent = law.section2[lang] || law.section2.en;

  if (Array.isArray(law.section3[lang])) {
    document.getElementById('section3').innerHTML = law.section3[lang]
      .map(doc => `<li>${doc}</li>`)
      .join("");
  } else {
    document.getElementById('section3').innerHTML = `<li>${law.section3[lang] || law.section3.en}</li>`;
  }

  document.getElementById('section4').textContent = law.section4[lang] || law.section4.en;
}

function showError(lang) {
  const messages = {
    en: "Law not found",
    hi: "कानून नहीं मिला",
    te: "చట్టం కనుగొనబడలేదు"
  };
  document.getElementById("lawTitle").textContent = messages[lang];
}
