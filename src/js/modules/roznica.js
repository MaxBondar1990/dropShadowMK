export function viewSettings() {
   const settingsBtn = document.querySelector('.gear');
   const settingsMenu = document.querySelector('.settings');

   document.addEventListener('click', view);
   document.addEventListener('click', close);

   function close(event) {
      if(event.target.closest('.settings__close')){
         settingsMenu.classList.remove('_action')
         settingsBtn.classList.remove('_action')
      }
    }
   

   function view(event) {
      if(event.target.closest('.gear')){
         settingsMenu.classList.add('_action')
         settingsBtn.classList.add('_action')
         return;
      }
    }

    
     
   
}