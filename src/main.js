document.addEventListener('DOMContentLoaded', function() {
  const buttons = document.querySelectorAll('[data-tab-button]');
  const questions = document.querySelectorAll('[data-faq-question]');
  const heroSection = document.querySelector('.hero');
  const heroHeight = heroSection.clientHeight

  window.addEventListener('scroll', function() {
    const position = window.scrollY

    if (position < heroHeight) {
      hideHeaderElements();
    } else {
      showHeaderElements();
    }
  })

  // Seção de atrações, programação das abas
  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const targetTab = button.dataset.tabButton;
      const tab = document.querySelector(`[data-tab-id=${targetTab}]`);
      hideAllTabs();
      tab.classList.add('shows__list--is-active');
      removeActiveButton();
      button.classList.add('shows__tabs__button--is-active');
    });
  });

  // Seção FAQ, accordion
  for (let i = 0; i < questions.length; i++) {
    questions[i].addEventListener('click', abreOuFechaResposta)
  }
});

function hideHeaderElements() {
  const header = document.querySelector('header');
  header.classList.add('header--is-hidden');
}

function showHeaderElements() {
  const header = document.querySelector('header');
  header.classList.remove('header--is-hidden');
}


function abreOuFechaResposta(e) {
  const classe = 'faq__questions__item--is-open';
  const elementoPai = e.target.parentNode

  elementoPai.classList.toggle(classe);
}

function removeActiveButton () {
  const buttons = document.querySelectorAll('[data-tab-button]');
  buttons.forEach(button => {
    button.classList.remove('shows__tabs__button--is-active');
  })
}

function hideAllTabs() {
  const tabsContainer = document.querySelectorAll('[data-tab-id]');

  tabsContainer.forEach(container => {
    container.classList.remove('shows__list--is-active');
  });
}