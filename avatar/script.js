/* Script for Component */
let sampleText_1 = `    
<img src="image.png" alt="Avatar" class="avatar avatar--sm"/>
<img src="image.png" alt="Avatar" class="avatar avatar--md"/>
<img src="image.png" alt="Avatar" class="avatar avatar--lg"/>
`;
let sampleText_2 = `    
<img src="image.png" alt="Avatar" class="avatar avatar--sm sq"/>
<img src="image.png" alt="Avatar" class="avatar avatar--md sq"/>
<img src="image.png" alt="Avatar" class="avatar avatar--lg sq"/>
`;
let code = document.querySelectorAll('.component--output');
let place = document.querySelectorAll('.code--text');
place.forEach((elem, idx) => {
  elem.innerText = (idx===1 ? sampleText_2 : sampleText_1).trim();
});
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
