// Script for code copying
let code = document.querySelectorAll('.component--output');
let copyBtn = document.querySelectorAll('.far');
let copied = document.querySelectorAll('.code--msg');

copyBtn.forEach((e, idx) => {
  e.addEventListener('click', () => {
    navigator.clipboard.writeText(code[idx].innerHTML);
    copied[idx].style.display = 'inline';
    setTimeout(() => {
      copied[idx].style.display = 'none';
    }, 1000);
  });
});

// Script for code copying in case of cards
let code2 = document.querySelectorAll('.component--output--ns');
let copyBtn2 = document.querySelectorAll('.far');
let copied2 = document.querySelectorAll('.code--msg');

copyBtn2.forEach((e, idx) => {
  e.addEventListener('click', () => {
    navigator.clipboard.writeText(code2[idx].innerHTML);
    copied2[idx].style.display = 'inline';
    setTimeout(() => {
      copied2[idx].style.display = 'none';
    }, 1000);
  });
});

// Script for code copying in case of Badges
let toCopy = document.querySelectorAll('.component--output');
let toCopyBtn = document.querySelectorAll('.fa-copy');
let toCopyMsg = document.querySelectorAll('.code--msg');

toCopyBtn.forEach((elem, idx) => {
  elem.addEventListener('click', () => {
    navigator.clipboard.writeText(toCopy[idx].innerHTML);
    toCopyMsg[idx].style.display = 'inline';
    setTimeout(() => {
      toCopyMsg[idx].style.display = 'none';
    }, 1000);
  });
});

// Script for Close btn
let closeBtnAll = document.querySelectorAll('.card--dismiss');
let cardAll = document.querySelectorAll('.dismiss');

closeBtnAll.forEach((elem, idx) => {
  elem.addEventListener('click', () => {
    cardAll[idx].classList.remove('open');
  });
});

// Drawer
let slider = document.querySelector('.slider');
let aside = document.querySelector('.box__aside');
slider.addEventListener('click', ()=>{
  aside.classList.toggle('show');
})