let code = document.querySelectorAll('.code--text');
let copyBtn = document.querySelectorAll('.far');
let copied = document.querySelectorAll('.code__msg');

// let code2 = document.querySelectorAll('.code--text');
// let copyBtn2 = document.querySelectorAll('.far');
// let copied2 = document.querySelectorAll('.code__msg');

let toCopy = document.querySelectorAll('.code--text');
let toCopyBtn = document.querySelectorAll('.fa-copy');
let toCopyMsg = document.querySelectorAll('.code__msg');

let slider = document.querySelector('.slider');
let aside = document.querySelector('.box__aside');
let main = document.querySelector('.box__main');

let modal = document.querySelector('.modal');
let modalBack = document.querySelector('.modal__background');
let modalBtn = document.querySelector('.modal__close');
let showModalBtn = document.querySelector('.show--modal');
let codeContainerAll = document.querySelectorAll('.code__container');

let drawer = document.querySelector('.drawer');
let drawerBack = document.querySelector('.drawer__background');
let drawerBtn = document.querySelector('.drawer__close');
let showDrawerBtn = document.querySelector('.show--drawer');

let openToastBtn = document.querySelector('.show_toast_btn');
let toast = document.querySelector('.toast');

let openSideBarBtn = document.querySelector('.hb--btn');
let sideBarHb = document.querySelector('.hb--aside');
let mainHb = document.querySelector('.hb--main');

// Script for code copying
copyBtn.forEach((e, idx) => {
  e.addEventListener('click', () => {
    navigator.clipboard.writeText(code[idx] && code[idx].innerHTML);
    copied[idx].style.display = 'inline';
    console.log('hello')
    setTimeout(() => {
      copied[idx].style.display = 'none';
    }, 1000);
  });
});

// Script for code copying in case of cards
// copyBtn2.forEach((e, idx) => {
//   e.addEventListener('click', () => {
//     navigator.clipboard.writeText(code2[idx] && code2[idx].innerHTML);
//     copied2[idx].style.display = 'inline';
//     setTimeout(() => {
//       copied2[idx].style.display = 'none';
//     }, 1000);
//   });
// });

// Script for code copying in case of Badges
toCopyBtn.forEach((elem, idx) => {
  elem.addEventListener('click', () => {
    navigator.clipboard.writeText(toCopy[idx] && toCopy[idx].innerHTML);
    toCopyMsg[idx].style.display = 'inline';
    setTimeout(() => {
      toCopyMsg[idx].style.display = 'none';
    }, 1000);
  });
});

// Navbar sidebar container/slider
slider &&
  slider.addEventListener('click', () => {
    aside.classList.toggle('show');
    main.classList.toggle('show');
  });

//Modal
let scrollY = document.body.style.top;
const closeModalFunc = (e) => {
  if (e.target != modal) {
    console.log('hello');
    modal.classList.remove('modal__open');
    codeContainerAll.forEach((elem) => {
      elem.style.visibility = 'visible';
    });
    document.body.style.position = 'static';
    window.scrollTo(0, parseInt(scrollY || '0') * -1);
  }
};

showModalBtn &&
  showModalBtn.addEventListener('click', (e) => {
    e.preventDefault();
    modal.classList.add('modal__open');
    codeContainerAll.forEach((elem) => {
      elem.style.visibility = 'hidden';
    });
    scrollY = `-${window.scrollY}px`;
    document.body.style.position = 'fixed';
    document.body.style.top = scrollY;
  });

modalBack && modalBack.addEventListener('click', (e) => closeModalFunc(e));
modalBtn && modalBtn.addEventListener('click', (e) => closeModalFunc(e));

//Drawer
const closeModalFuncDrawer = (e) => {
  e.preventDefault();
  if (e.target != modal) {
    drawer.classList.remove('drawer__open');
    codeContainerAll.forEach((elem) => {
      elem.style.visibility = 'visible';
    });
    drawerBack.classList.remove('drawer__open');
  }
};

showDrawerBtn &&
  showDrawerBtn.addEventListener('click', (e) => {
    e.preventDefault();
    drawer.classList.add('drawer__open');
    codeContainerAll.forEach((elem) => {
      elem.style.visibility = 'hidden';
    });
    drawerBack.classList.add('drawer__open');
  });

drawerBack &&
  drawerBack.addEventListener('click', (e) => closeModalFuncDrawer(e));
drawerBtn &&
  drawerBtn.addEventListener('click', (e) => closeModalFuncDrawer(e));

//Toast Message
openToastBtn &&
  openToastBtn.addEventListener('click', () => {
    console.log('hello');
    toast.classList.add('toast__open');
    setTimeout(() => {
      toast.classList.remove('toast__open');
    }, 3000);
  });

//Hamburger Menu
openSideBarBtn &&
  openSideBarBtn.addEventListener('click', () => {
    sideBarHb.classList.toggle('hb--open');
    mainHb.classList.toggle('hb--open');
  });
