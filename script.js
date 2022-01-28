let code = document.querySelectorAll('.component--output');
let place = document.querySelectorAll('.code--text');
place.forEach((elem, idx) => {
  elem.innerText = code[idx].innerHTML.trim();
});
let copyBtn = document.querySelectorAll('.far');
let copied = document.querySelectorAll('.code--msg');

copyBtn.forEach((e,idx) => {
  e.addEventListener('click', () => {
    navigator.clipboard.writeText(code[idx].innerHTML);
    copied[idx].style.display = 'inline';
    setTimeout(() => {
      copied[idx].style.display = 'none';
    }, 1000);
  });
});
