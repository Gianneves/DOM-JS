const btn = document.getElementById('btn-mode');
const titleH1 = document.getElementById('title-h1');
const container = document.getElementById('style-container');
const footer = document.getElementById('footer-st');

function changeMode() {
    darkMode();
    textMode();
};

function darkMode() {
    btn.classList.toggle('btn-active');
    container.classList.toggle('container-active');
    titleH1.classList.toggle('title-active');
    footer.classList.toggle('footer-active');
};

function textMode() {
    if(btn.classList.contains('btn-active')){
        titleH1.innerText = 'The Dark Mode';
        btn.innerText = 'Light Mode';
    } else {
        titleH1.innerText = 'The Light Mode';
        btn.innerText = 'Dark Mode';
    }
    
};

btn.addEventListener('click', changeMode);
