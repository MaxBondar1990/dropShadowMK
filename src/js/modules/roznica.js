// Показати модалку з налаштуваннями, чекбоксами вибору.
export function viewSettings() {
   const settingsBtn = document.querySelector('.gear');
   const settingsMenu = document.querySelector('.settings');

   document.addEventListener('click', viewSettings);
   document.addEventListener('click', closeSettings);

   function viewSettings(event) {
      if (event.target.closest('.gear')) {
         settingsMenu.classList.add('_action');
         settingsBtn.classList.add('_action');
      }
   }

   function closeSettings(event) {
      if (event.target.closest('.settings__close')) {
         settingsMenu.classList.remove('_action');
         settingsBtn.classList.remove('_action');
      }
   }
}

// Відкрити форму замовлення
export function getOrderForm() {
   const orderForm = document.querySelector('.order');

   document.addEventListener('click', view);
   document.addEventListener('click', close);


   function view(event) {
      if (event.target.closest('.comunication__buy')) {
         orderForm.classList.add('_visible');
      }
   }
   function close(event) {
      if (event.target.closest('.exit-button')) {
         orderForm.classList.remove('_visible');
      }
   }

}

// Відкрити модалку з макетами принтів
export function getPrints() {
   const catalogPrints = document.querySelector('.preview__catalog-prints');

   document.addEventListener('click', view);
   document.addEventListener('click', close);

   function view(event) {
      if (event.target.closest('.selected-print')) {
         catalogPrints.classList.add('_visible');
      }
   }

   function close(event) {
      if (event.target.closest('.exit-button')) {
         catalogPrints.classList.remove('_visible');
      }
   }
}

// Вибраний принт розташувати на макеті дизайну товару
export function setPrint() {

   const maketDesignePrint = document.querySelector('.designe__print');

   document.addEventListener('click', set);

   function set(event) {
      if (event.target.closest('.tile__item')) {
         const maketSrc = event.target.getAttribute('src');
         maketDesignePrint.setAttribute('src', maketSrc);

      }
   }
}