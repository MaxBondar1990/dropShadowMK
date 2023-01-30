//export function burger(buttonClass, classToAction) {
export function modal(buttonClass = 'modal-btn', modalClass = 'modal', closeClass = 'modal__close', actionClass = '_action', scroll = false) {

   document.addEventListener('click', actionModal);

   //Додаємо, або забираємо клас активації модального вікна
   function actionModal(event) {
      const modal = document.querySelector(`.${modalClass}`);
      //Якщо неіснує класу модального вікна показуємо alert з повідомленням
      if (event.target.closest(`.${buttonClass}`) && !modal) {
         alert(`Модального вікна з класом ${modalClass} не існує`);
         return;
      }
      //Додаємо клас та блокуємо скрол
      if (event.target.closest(`.${buttonClass}`) && modal) {
         modal.classList.add(actionClass);
         if (document.querySelector("body").style.overflow !== "hidden" && scroll === false) {
            document.querySelector("body").style.overflow = "hidden";
         }
         return;
      }
      //Знімаємо клас та деблокуємо скрол
      if (event.target.closest(`.${closeClass}`) || event.target.classList.contains(modalClass)) {
         modal.classList.remove(actionClass);
         document.querySelector("body").style.overflow = "";
      }
   }
}