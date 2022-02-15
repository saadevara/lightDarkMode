const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.querySelector('#nav')
const header = document.querySelector('.header');
const toggleIcon = document.querySelector('#toggle-icon')
const image1 = document.querySelector('#image-1')
const image2 = document.querySelector('#image-2')
const image3 = document.querySelector('#image-3')
const textBox = document.querySelector('#text-box')

function darkMode() {
    nav.style.backgroundColor = 'rgb(0 0 0 / 50%)';
    textBox.style.backgroundColor = 'rgb(255 255 255 / 50%)';
    header.textContent = 'Dark Mode';
    toggleIcon.children[0].textContent = 'Dark Mode';
    toggleIcon.children[1].classList.remove('fa-sun');
    toggleIcon.children[1].classList.add('fa-moon');
    image1.src = "assets/undraw_proud_coder_dark.svg";
    image2.src = "assets/undraw_feeling_proud_dark.svg";
    image3.src = "assets/undraw_conceptual_idea_dark.svg";
}


function lightMode() {
    
}

function switchTheme(event) {
    if (event.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        darkMode();
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        lightMode();
    }
}

toggleSwitch.addEventListener('change', switchTheme);