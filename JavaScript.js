const menu = document.querySelector('#menu');
const dropdown = document.querySelector('.dropdown');
const blur = document.querySelector('.blur');

const title = document.querySelector('.title');
const heart = document.querySelector('#heart');
const skills = document.querySelector('.skills');
const contactMe = document.querySelector('.contactMe');
const secondMenu = document.querySelector('#secondMenu');

const menuAnimation = () => {
    menu.classList.toggle('is-active');
    dropdown.classList.toggle('active');
    blur.classList.toggle('active');
    title.classList.toggle('active');
    heart.classList.toggle('active');
    skills.classList.toggle('active');

};
menu.addEventListener('click', menuAnimation);
secondMenu.addEventListener('click', menuAnimation);