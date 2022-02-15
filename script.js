const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.querySelector('#nav')
const header = document.querySelector('.header');
const toggleIcon = document.querySelector('#toggle-icon')
const image1 = document.querySelector('#image-1')
const image2 = document.querySelector('#image-2')
const image3 = document.querySelector('#image-3')
const textBox = document.querySelector('#text-box')

function imageMode(color) {
      image1.src = `assets/undraw_proud_coder_${color}.svg`;
      image2.src = `assets/undraw_feeling_proud_${color}.svg`;
      image3.src = `assets/undraw_conceptual_idea_${color}.svg`;
}

function darkMode() {
    nav.style.backgroundColor = 'rgb(0 0 0 / 50%)';
    textBox.style.backgroundColor = 'rgb(255 255 255 / 50%)';
    header.textContent = 'Dark Mode';
    toggleIcon.children[0].textContent = 'Dark Mode';
    toggleIcon.children[1].classList.replace('fa-sun','fa-moon');
    imageMode('dark');
}


function lightMode() {
    nav.style.backgroundColor = "rgb(255 255 255 / 50%)";
    textBox.style.backgroundColor = "rgb(0 0 0 / 50%)";
    header.textContent = "Light Mode";
    toggleIcon.children[0].textContent = "Light Mode";
    toggleIcon.children[1].classList.replace("fa-moon", "fa-sun");
    imageMode("light");
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