/*Search box*/
let searchForm=document.querySelector(".search-form");
document.querySelector("#search-btn").onclick= () =>{
    searchForm.classList.toggle('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
    menu.classList.remove('active');
}

/*Cart*/
let shoppingCart=document.querySelector(".shopping-cart");
document.querySelector("#cart-btn").onclick = () =>{
    shoppingCart.classList.toggle('active');
    searchForm.classList.remove('active');
    loginForm.classList.remove('active');
    menu.classList.remove('active');
}

/*Login form*/
let loginForm=document.querySelector(".login-form");
document.querySelector("#login-btn").onclick = () =>{
    loginForm.classList.toggle('active');
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    menu.classList.remove('active');
}

/*Menu form*/
let menu=document.querySelector(".navbar");
document.querySelector("#menu-btn").onclick = () =>{
    menu.classList.toggle('active');
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');searchForm.classList.remove('active');
}


window.onscroll= () =>{
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
    menu.classList.remove('active');
}


/*Slide*/
var swiper = new Swiper(".product-slider", {
    loop: true,
    spaceBetween: 20,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    centeredSlides: true,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1020: {
        slidesPerView: 3,
      },
    },
  });


  var swiper = new Swiper(".review-slider",{
    loop: true,
    spaceBetween: 20,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    centeredSlides: true,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1020: {
        slidesPerView: 3,
      },
    },
  });