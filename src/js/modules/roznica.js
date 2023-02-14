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
         const maketSrc = event.target.dataset.maket;
         maketDesignePrint.setAttribute('src', maketSrc);
         if (document.querySelector('.preview__catalog-prints').classList.contains('_visible')) {
            document.querySelector('.preview__catalog-prints').classList.remove('_visible');
         }
      }
   }
}

//Встановити налаштування кольору, розміщення та моделі
export function setChengingSettings() {
   //Створюємо константу зображення товару, що буде змінюватися
   const imageTovar = document.querySelector('.designe__t-shirt');

   //додаємо нову подію на клік
   document.addEventListener('click', setSettings);
   // встановлюємо нове зображення по кліку на чекбокси в налаштуваннях
   function setSettings(event) {
      if (
         event.target.closest('.settings__color input[name=color]')
         || event.target.closest('.settings__front-back  input[name=front-back]')
         || event.target.closest('.settings__model input[name=model]')
      ) {
         const color = document.querySelector('.settings__color input[name=color]:checked').id;
         const place = document.querySelector('.settings__front-back input[name=front-back]:checked').id;
         const model = document.querySelector('.settings__model input[name=model]:checked').id;
         const fileName = `img/T-shirts/${model + place + color}.png`;
         imageTovar.setAttribute('src', fileName)
      }
      //
      if (event.target.closest('.settings__model input[name=model]')) {
         const modelName = event.target.id;
         //const size = document.querySelector('.order [data-name=`${modelName}`]');
         const size = document.querySelector(`[data-name="${modelName}"]`);
         console.log(size)

      }
   }
}