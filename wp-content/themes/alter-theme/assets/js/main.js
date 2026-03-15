document.addEventListener("DOMContentLoaded", function(){

const swiper = new Swiper(".heroSwiper", {

loop:true,

slidesPerView:"auto",

spaceBetween:40,

speed:12000,

freeMode:true,
freeModeMomentum:false,

autoplay:{
delay:0,
disableOnInteraction:false,
pauseOnMouseEnter:true
},



});

});