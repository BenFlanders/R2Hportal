const checkbox = document.querySelector('input[name=theme]');

checkbox.addEventListener('change', function(){
    if(this.checked){
        trans()
        document.documentElement.setAttribute('data-theme', 'dark')
        document.getElementById('logo').src = "img/Logo2.png";
        document.querySelector('.fa-bars').style.color = "white"
    } else{
        trans()
        document.documentElement.setAttribute('data-theme', 'light')
        document.getElementById('logo').src = "img/Logo.png";
        document.querySelector('.fa-bars').style.color = "black"
    }
})

const trans = () => {
    document.documentElement.classList.add('transition');
    window.setTimeout(() =>{
        document.documentElement.classList.remove('transition')
    }, 1000)
}

function openSlideMenu(){
    document.querySelector('.side-links').style.marginLeft = "0";
    document.querySelector('#btn-close').style.marginLeft = "0";
}

function closeSlideMenu(){
    document.querySelector('.side-links').style.marginLeft = "-400px";
    document.querySelector('#btn-close').style.marginLeft = "-400px";
}

window.addEventListener("hashchange", function () {
    window.scrollTo(window.scrollX, window.scrollY - 120);
});