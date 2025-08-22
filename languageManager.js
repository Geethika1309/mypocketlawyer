class LanguageManager {
  constructor() {
    this.currentLanguage = localStorage.getItem('language') || 'en';
    this.subscribers = [];
  }

  subscribe(callback) {
    this.subscribers.push(callback);
    callback(this.currentLanguage);
  }

  setLanguage(lang) {
    if (this.currentLanguage !== lang) {
      this.currentLanguage = lang;
      localStorage.setItem('language', lang);
      this.subscribers.forEach(callback => callback(lang));
      this.applyTranslations();
      console.log(`Language changed to: ${lang}`);
    }
  }

  applyTranslations() {
    const lang = this.currentLanguage;
    this.applyTextTranslations(lang);
  }

  applyTextTranslations(lang) {
    // Handle data-translate elements
    document.querySelectorAll('[data-translate]').forEach(el => {
      const key = el.getAttribute('data-translate');
      this.applyTextContent(el, key, lang);
    });
    
    // Handle ID-based elements
    const idMappings = {
       'trafficheading': 'trafficheading',
      'trp': 'trp',
       'trafficheading': 'trafficheading',
        'trp': 'trp',
         'trh2': 'trh2',
          'trp2': 'trp2',
           'trl1': 'trl1',
            'trl2': 'trl2',
             'trl3': 'trl3', 
             'trl4':'trl4',
              'trl5':'trl5',
               'trl6':'trl6',
                'trl7':'trl7', 
                'trl8':'trl8',
                 'trl9':'trl9',
                  'trl10':'trl10',
                   'trl11':'trl11', 'trl12':'trl12', 'trl13':'trl13', 'trl14':'trl14', 'trl15':'trl15', 'trl16':'trl16', 'trl17':'trl17', 'trl18':'trl18', 'trtrh2':'trtrh2', 'th2':'th2', 'trimp':'trimp', 'trsam':'trsam', 'trcontent':'trcontent', 'ccheading':'ccheading', 'cch2':'cch2', 'ccp1':'ccp1', 'cch2h2':'cch2h2', 'ccl1':'ccl1', 'ccl2':'ccl2', 'ccl3':'ccl3', 'ccl4':'ccl4', 'ccl5':'ccl5', 'ccl6':'ccl6', 'ccl7':'ccl7', 'ccl8':'ccl8', 'cch22':'cch22', 'ccscl':'ccscl', 'cccontent':'cccontent', 'rentheading':'rentheading', 'overview':'overview', 'rentp':'rentp', 'rentlegal':'rentlegal', 'rentp2':'rentp2', 'rentl1':'rentl1', 'rentl2':'rentl2', 'rentl3':'rentl3', 'rentl4':'rentl4', 'rentl5':'rentl5', 'rentl6':'rentl6', 'rentl7':'rentl7', 'rentl8':'rentl8', 'rentl9':'rentl9', 'rentl10':'rentl10', 'rentl11':'rentl11', 'rentl12':'rentl12', 'rentl13':'rentl13', 'rentl14':'rentl14', 'renth2':'renth2', 'rentp3':'rentp3', 'rentdoc':'rentdoc', 'rentsam':'rentsam', 'rentp4':'rentp4', 'rentcontent':'rentcontent', 'cyberheading':'cyberheading', 'cyberabout':'cyberabout', 'cyberp':'cyberp', 'cybersteps':'cybersteps', 'cyberli1':'cyberli1', 'cyberli2':'cyberli2', 'cyberli3':'cyberli3', 'cyberli4':'cyberli4', 'cyberli5':'cyberli5', 'cyberli6':'cyberli6', 'cyberli7':'cyberli7', 'cyberli8':'cyberli8', 'cybh2':'cybh2', 'cybersam':'cybersam', 'cybercontent':'cybercontent',
                   'fileheading':'fileheading',
                   'fileh2':'fileh2',
                   'filep':'filep',
                   'filesteps':'filesteps',
                   'fileli1':'fileli1',
                   'fileli2':'fileli2',
                   'fileli3':'fileli3',
                   'fileli4':'fileli4',
                   'fileli5':'fileli5',
                   'fileli6':'fileli6',
                   'fileli7':'fileli7',
                   'fileli8':'fileli8',
                   'fileli9':'fileli9',
                   'filedoc':'filedoc',
                   'filesam':'filesam',
                   'filecontent':'filecontent',
                   'womenheading':'womenheading',
                   'womenlaw':'womenlaw',
                   'womenp':'womenp',
                   'womenpin':'womenpin',
                   'womenli1':'womenli1',
                   'womenli2':'womenli2',
                   'womenli3':'womenli3',
                   'womenli4':'womenli4',
                   'womenli5':'womenli5',
                   'womenli6':'womenli6',
                   'womenli7':'womenli7',
                   'womenli8':'womenli8',
                   'womenh2':'womenh2',
                   'womensam':'womensam',
                   'womencontent':'womencontent',
                   'quote':'quote',
                   'searchQuery':'searchQuery',
                   'serachLawBtn':'searchLawBtn',
                   'ctaGenerate':'ctaGenerate',
                   'ctaQuestion':'ctaQuestion',
                   'popular':'popular',
                   'howitworks':'howitworks',
                   'step1':'step1',
                   'step2':'step2',
                   'step3':'step3',
                   'step4':'step4',
                   'benifits':'benifits',
                   'b1':'b1',
                   'b2':'b2',
                   'b3':'b3',
                   'b4':'b4',
                   'testimonialTitle':'testimonialTitle',
                   'testimonialSubtitle':'testimonialSubtitle',
                   'traffic':'traffic',
                   'renthome':'renthome',
                   'women':'women',
                   'consumer':'consumer',
                   'cyber':'cyber',
                   'file':'file',
                   'mainheading':'mainheading',
                   'home':'home',
                   'lawc':'lawc',
                   'gene':'gene',
                   'aska':'aska',
                   'contact':'contact',
                   'ldata1':'ldata1',
                   'ldata2':'ldata2',
                   'ldata3':'ldata3',
                   'lvalue1':'lvalue1',
                   'lvalue2':'lvalue2',
                   'lvalue3':'lvalue3',
                   'askheading':'askheading',
                   'askname':'askname',
                   'askemail':'askemail',
                   'askquestion':'askquestion',
                   'asksend':'asksend',
                   'lcheading':'lcheading','lcdiv1':'lcdiv1','lcdiv2':'lcdiv2','lcdiv3':'lcdiv3','lcdiv4':'lcdiv4','lcdiv5':'lcdiv5','lcdiv6':'lcdiv6','lcdiv7':'lcdiv7','lcdiv8':'lcdiv8','lcdiv9':'lcdiv9','lcdiv10':'lcdiv10','lcdiv11':'lcdiv11','lcdiv12':'lcdiv12','lcdiv13':'lcdiv13','lcdiv14':'lcdiv14','lcdiv15':'lcdiv15','lcdiv16':'lcdiv16','lcdiv17':'lcdiv17','lcdiv18':'lcdiv18','lcdiv19':'lcdiv19','lcdiv20':'lcdiv20','lcdiv21':'lcdiv21','lcdiv22':'lcdiv22','lcdiv23':'lcdiv23','lcdiv24':'lcdiv24','lcdiv25':'lcdiv25','lcdiv26':'lcdiv26','lcdiv27':'lcdiv27','lcdiv28':'lcdiv28','lcdiv29':'lcdiv29','lcdiv30':'lcdiv30',
                   'generateDocHeading':'generateDocHeading',
                   'contactheading':'contactheading',
                   'contactplace':'contactplace',
                   'contactemail':'contactemail',
                   'contactphone':'contactphone',
                   'contactmsg':'contactmsg',
                   'contactthanks':'contactthanks',
                   'lawTitle':'lawTitle',
                   'sect1':'sect1',
                   'section1':'section1',
                   'sect2':'sect2',
                   'section2':'section2',
                   'sect3':'sect3',
                   'section3':'section3',
                   'sect4':'sect4',
                   'section4':'section4',
                   'downloadLetterBtn':'downloadLetterBtn',
                   'searchLawBtn':'searchLawBtn',
                   'benefits':'benefits',
                   'contactnamepl':'contactnamepl',
                   'contactemailpl':'contactemailpl',
                   'contactplpl':'contactplpl',
            };
    
    Object.entries(idMappings).forEach(([id, key]) => {
      const el = document.getElementById(id);
      if (el) this.applyTextContent(el, key, lang);
    });
  }

  applyTextContent(element, translationKey, language) {
    if (translations[language]?.[translationKey]) {
      if (element.placeholder !== undefined) {
        element.placeholder = translations[language][translationKey];
      } else {
        element.textContent = translations[language][translationKey];
      }
    }
  }
}

const languageManager = new LanguageManager();

// Initialize language selector if exists
if (document.getElementById('languageSelector')) {
  const selector = document.getElementById('languageSelector');
  selector.value = languageManager.currentLanguage;
  selector.addEventListener('change', (e) => {
    languageManager.setLanguage(e.target.value);
  });
}
// Add this to initialize language
document.addEventListener("DOMContentLoaded", function() {
  languageManager.applyTranslations();
  
  // Update language selector if present
  const langSelector = document.getElementById("languageSelector");
  if (langSelector) {
    langSelector.value = languageManager.currentLanguage;
    langSelector.addEventListener("change", (e) => {
      languageManager.setLanguage(e.target.value);
    });
  }

});

