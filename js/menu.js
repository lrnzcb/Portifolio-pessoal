// Dark mood


const mood_dark= ()=>{
    const escuro= document.querySelector('.escuro ');
    const claro= document.querySelector('.claro ');
    const body= document.querySelector('body');
    claro.style.display= 'none';
    escuro.style.display= 'block';
    body.classList.toggle('light-mode')
}
//light
const mood_linght= ()=>{
    const escuro= document.querySelector('.escuro ');
const claro= document.querySelector('.claro ');
const body= document.querySelector('body');
    claro.style.display= 'block';
    escuro.style.display= 'none';
    body.classList.toggle('light-mode')
}