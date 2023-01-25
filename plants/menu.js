const burgerButton = document.querySelector('.burger-menu');

if (burgerButton) {
    
   const navList = document.querySelector('.nav-list');
   const navItems = document.querySelectorAll('.nav-item');
   const burgerBars = document.querySelectorAll('.bar');
   const main = document.querySelector('.main');
   const footer = document.querySelector('.footer');

   navList.addEventListener('click', (event) => {
        const clickedItem = findParent(event.target, 'nav-item');
        if (!clickedItem) {
            menuClickHandler();
        };
    })

   for (i = 0; i < navItems.length; i++) {
        navItems[i].addEventListener('click', menuClickHandler);
    };

   burgerButton.addEventListener('click', menuClickHandler);
   main.addEventListener('click', otherClickHandler);
   footer.addEventListener('click', otherClickHandler);

   function menuClickHandler(e) {
        burgerButton.classList.toggle('active');
        navList.classList.toggle('active');
        burgerBars.classList.toggle('active');
    };

   function otherClickHandler(e) {
        burgerButton.classList.remove('active');
        navList.classList.remove('active');
        burgerBars.classList.remove('active');
    };

};