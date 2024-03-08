document.addEventListener('DOMContentLoaded', function() {
  const buttons = document.querySelectorAll('[data-tab-button]');


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
});

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