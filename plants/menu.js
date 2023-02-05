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

const serviceWrapperButtons = document.querySelector('.buttons-row');
if (serviceWrapperButtons) {
   const serviceButtons = document.querySelectorAll('.service-button');

   const gardens = document.querySelectorAll('.garden');
   const plantings = document.querySelectorAll('.planting');
   const lawns = document.querySelectorAll('.lawn');

   for (let i = 0; i < serviceButtons.length; i++) {
      serviceButtons[i].addEventListener('click', serviceButtonsClickHandler);

      function serviceButtonsClickHandler() {
         toggleActiveButton(serviceButtons[i], serviceButtons);
         blurCards(serviceButtons, gardens, plantings, lawns);
      };
   };
};

function toggleActiveButton(button, allButtons) {
    button.classList.toggle('active');
 
    let activeButtons = []
    for (let j = 0; j < allButtons.length; j++) {
       if (allButtons[j].classList.contains('active')) {
          activeButtons.push(allButtons[j]);
       }
    };
 
    if (activeButtons.length === allButtons.length) {
       for (let i = 0; i < activeButtons.length; i++) {
          activeButtons[i].classList.remove('active')
       }
    }
 }
 
 function blurCards(allButtons, gardens, plantings, lawns) {
    allButtons = Array.from(allButtons);
 
    let activeButtons = []
    for (let j = 0; j < allButtons.length; j++) {
       if (allButtons[j].classList.contains('active')) {
          activeButtons.push(allButtons[j]);
       }
    };
 
    const gardenButton = allButtons.find((button) => button.classList.contains('gardens-button'));
    for (let k = 0; k < gardens.length; k++) {
       if (!activeButtons.length || gardenButton.classList.contains('active')) {
          gardens[k].classList.remove('blur');
       } else {
          gardens[k].classList.add('blur');
       }
    }
 
    const plantingButton = allButtons.find((button) => button.classList.contains('planting-button'))
    for (let k = 0; k < plantings.length; k++) {
       if (!activeButtons.length || plantingButton.classList.contains('active')) {
          plantings[k].classList.remove('blur');
       } else {
          plantings[k].classList.add('blur');
       }
    }
 
    const lawnButton = allButtons.find((button) => button.classList.contains('lawn-button'))
    for (let k = 0; k < lawns.length; k++) {
       if (!activeButtons.length || lawnButton.classList.contains('active')) {
          lawns[k].classList.remove('blur');
       } else {
          lawns[k].classList.add('blur');
       }
    }
 }

 const pricesSelectorContainer = document.querySelector('.prices-variants-list');
if (pricesSelectorContainer) {
   const selectorContainerElems = document.querySelectorAll('.prices-variants-item-button');
   const selectorContainerTextElems = document.querySelectorAll('.prices-variants-item');

   for (let i = 0; i < selectorContainerElems.length; i++) {
      selectorContainerElems[i].addEventListener('click', (event) => {
         const liElement = findParent(event.target, 'prices-variants-item');
         liElement.classList.toggle('open')

         for (let j = 0; j < selectorContainerTextElems.length; j++) {
            if (liElement !== selectorContainerTextElems[j]) {
               selectorContainerTextElems[j].classList.remove('open')
            }
         }
      })
   }
};

function findParent(target, parentClass) {
   if (target.classList.contains(parentClass)) {
      return target;
   } else if (!target.parentElement) {
      return null;
   } else {
      return findParent(target.parentElement, parentClass)
   }
}

const selectorElem = document.querySelector('.contacts-chooser-button');
const contactWrapperList = document.querySelector('.contact-wrapper-list');
const containerCitySelector = document.querySelector('.contacts-chooser');

selectorElem.addEventListener('click', (event) => {
   contactWrapperList.classList.toggle('open');
   if (contactWrapperList.classList.contains('open') || !contactsWrapperCard.classList.contains('not-active')) {
      containerCitySelector.classList.add('green');
   } else {
      containerCitySelector.classList.remove('green');
   }
});

const offices = [
   {
      city: 'Canandaigua, NY',
      phone: '+1	585	393 0001',
      officeAdress: '151 Charlotte Street',
   },
   {
      city: 'New York City',
      phone: '+1	212	456 0002',
      officeAdress: '9 East 91st Street',
   },
   {
      city: 'Yonkers, NY',
      phone: '+1	914	678 0003',
      officeAdress: '511 Warburton Ave',
   },
   {
      city: 'Sherrill, NY',
      phone: '+1	315	908 0004',
      officeAdress: '14 WEST Noyes BLVD',
   },
]

const contactListCity = contactWrapperList.querySelector('.contact-list-city');
const contactsDataList = document.querySelector('.contacts-data-list');
const contactsWrapperCard = document.querySelector('.contacts-wrapper-card');
const contactsButtonLink = document.querySelector('.contacts-button-link');
const contacts = document.querySelector('.precontacts')

for (let i = 0; i < offices.length; i++) {
   let li = document.createElement('li');
   li.classList.add('contact-city');
   li.innerText = offices[i].city

   li.addEventListener('click', (event) => {
      let liCity = contactsDataList.querySelector('[data-field="city"]');
      liCity.lastElementChild.innerText = offices[i].city;
      fillsInTheCardData(offices[i]);
   });

   li.addEventListener('click', (event) => {
      let liCity = contactsDataList.querySelector('[data-field="phone"]');
      liCity.lastElementChild.innerText = offices[i].phone;
      fillsInTheCardData(offices[i]);
   });

   li.addEventListener('click', (event) => {
      let liCity = contactsDataList.querySelector('[data-field="officeAdress"]');
      liCity.lastElementChild.innerText = offices[i].officeAdress;
      fillsInTheCardData(offices[i]);
   });

   contactListCity.append(li)

}

function fillsInTheCardData(office) {
   contactWrapperList.classList.remove('open');
   contactsWrapperCard.classList.remove('not-active');
   contactsButtonLink.setAttribute(['tel:'], office.phone)
   containerCitySelector.classList.add('green');
   containerCitySelector.firstElementChild.innerText = office.city;
   contacts.classList.add('delete');
}