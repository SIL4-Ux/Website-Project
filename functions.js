//SLIDESHOW FUNCTION
let slider = document.querySelector('.slider .sliding-images');
let sliderImages = document.querySelectorAll('.slider .sliding-images .slider-images');
let next = document.getElementById('next-button');
let prev = document.getElementById('prev-button');
let dots = document.querySelectorAll('.slider .dots li');

let lengthItems = sliderImages.length - 1;
let active = 0;
next.onclick = function(){
    active = active + 1 <= lengthItems ? active + 1 : 0;
    reloadSlider();
}

prev.onclick = function(){
    active = active - 1 >= 0 ? active - 1 : lengthItems;
    reloadSlider();
}
let refreshInterval = setInterval(()=> {next.click()}, 3000);
function reloadSlider(){
    slider.style.left = -sliderImages[active].offsetLeft + 'px';
    // 
    let last_active_dot = document.querySelector('.slider .dots li.active');
    last_active_dot.classList.remove('active');
    dots[active].classList.add('active');

    clearInterval(refreshInterval);
    refreshInterval = setInterval(()=> {next.click()}, 3000);

    
}

dots.forEach((li, key) => {
    li.addEventListener('click', ()=>{
         active = key;
         reloadSlider();
    })
})
window.onresize = function(event) {
    reloadSlider();
};



//MENU FUNCTION
function myFunction(event) {
    event.stopPropagation(); // Prevent click from propagating to window
    document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event) {
    if (!event.target.closest('.menubtn') && !event.target.closest('.dropdown')) {
        var dropdowns = document.getElementsByClassName("dropdown");
        for (var i = 0; i < dropdowns.length; i++) {
            dropdowns[i].classList.remove('show');
        }
    }
};
