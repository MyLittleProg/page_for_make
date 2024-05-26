import '../src/assets/styles/main.scss';
import ItcAccordion from './utils/accorion';

//Добавление подсказки для полей ввода
document.querySelector('.e-mail-input').addEventListener('input',(event)=>{
    if(event.target.value){
      event.target.parentNode.querySelector('p').style.display = 'block'; 
    }
    document.querySelector('.e-mail-input').addEventListener('blur',setDisplayNone(event))
})


const selectSingle = document.querySelector('.__select');
const selectSingle_title = selectSingle.querySelector('.__select__title');
const selectSingle_labels = selectSingle.querySelectorAll('.__select__label');

// Включение выподающего списка
selectSingle_title.addEventListener('click', () => {
  if ('active' === selectSingle.getAttribute('data-state')) {
    selectSingle.setAttribute('data-state', '');
  } else {
    selectSingle.setAttribute('data-state', 'active');
  }
});

// Закрытие списка когда кликнули
for (let i = 0; i < selectSingle_labels.length; i++) {
  selectSingle_labels[i].addEventListener('click', (evt) => {
    selectSingle_title.textContent = evt.target.textContent;
    selectSingle.setAttribute('data-state', '');
  });
}
//Аккордион
new ItcAccordion(document.querySelector('.accordion'), {
    alwaysOpen: true  //Всегда одна страница или множество
});


//Активная секция
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('aside nav ul li a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links =>{
                links.classList.remove('active')
                document.querySelector('aside nav ul li a[href*=' + id + ' ]').classList.add('active')
            })
        }
    })
}

// Плавная прокрутка
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
  e.preventDefault();
  document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
  });
});

// Включение/выключение меню
document.querySelector('.header__menu-menu-icon img').addEventListener('click',()=>{
  document.body.style.overflow = 'hidden';
  document.querySelector('.menu').style.visibility = 'visible';
  document.querySelector('.menu').style.height = '100%';
  document.querySelector('.menu-info').style.height = '97%';
  document.querySelector('.ico-exit-image').style.visibility = 'visible';
  const exitElem = document.querySelector('.menu-exit')
  const displayStyle = window.getComputedStyle(exitElem).display
  if(displayStyle === 'none'){
    document.querySelector('.ico-exit').style.visibility = 'visible';
  }
  document.querySelector('.menu-info').style.visibility = 'visible';
})

document.querySelector('.ico-exit').addEventListener('click',()=>{
  document.body.style.overflow = 'scroll';
  document.querySelector('.menu-info').style.visibility = 'hidden';
  document.querySelector('.ico-exit').style.visibility = 'hidden';
  document.querySelector('.menu').style.height = '0%';
  document.querySelector('.menu').style.visibility = 'hidden';
})

document.querySelector('.ico-exit-image').addEventListener('click',()=>{
  document.body.style.overflow = 'scroll';
  document.querySelector('.menu-info').style.visibility = 'hidden';
  document.querySelector('.ico-exit-image').style.visibility = 'hidden';
  document.querySelector('.menu').style.height = '0%';
  document.querySelector('.menu').style.visibility = 'hidden';
})



// Правка текста взависимости от ширины экрана
window.addEventListener('resize', () => {
  const screenWidth = window.innerWidth;
  if (screenWidth < 735) {
    document.querySelector('.typography__headline-p-h1 p').innerHTML = 
    'Заголовок H1, 32/40, bold';
    document.querySelector('.typography__headline-p-h2 p').innerHTML = 
    'Заголовок H2, 28/36, bold';
    document.querySelector('.typography__headline-p-h3 p').innerHTML = 
    'Заголовок H3, 20/28, medium';
    document.querySelector('.typography__headline-p-lead p').innerHTML = 
    'Лид P_Lead, 20/28, regular';
  } else {
    document.querySelector('.typography__headline-p-h1 p').innerHTML = 
    'Заголовок H1, 48/56, bold';
    document.querySelector('.typography__headline-p-h2 p').innerHTML = 
    'Заголовок H2, 32/40, bold';
    document.querySelector('.typography__headline-p-h3 p').innerHTML = 
    'Заголовок H3, 24/32, medium';
    document.querySelector('.typography__headline-p-lead p').innerHTML = 
    'Лид P_Lead, 24/32, regular';
  }
 });



//Функция для удаления слушателя события

function setDisplayNone(event){
    if(!event.target.value){
      event.target.parentNode.querySelector('p').style.display = 'none';
      document.querySelector('.e-mail-input').removeEventListener('blur',setDisplayNone)
    }

}