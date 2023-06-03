let navbar = document.querySelector('.header .navbar');
let searchForm = document.querySelector('.header .search-form');
let contactInfo = document.querySelector('.contact-info');
let filterBtn = document.querySelectorAll('.filter-buttons .buttons');
let filterItem = document.querySelectorAll('.magazine .box-container .box');

document.querySelector('#menu-btn').onclick = () =>{
   navbar.classList.toggle('active');
   searchForm.classList.remove('active');
   loginForm.classList.remove('active');
};

document.querySelector('#search-btn').onclick = () =>{
   searchForm.classList.toggle('active');
   navbar.classList.remove('active');
   loginForm.classList.remove('active');
};

const loginBtn = document.querySelector('#login-btn');
const signupBtn = document.querySelector('#signup-btn');
const loginForm = document.querySelector('.login-form');
const signupForm = document.querySelector('.signup-form');

loginBtn.addEventListener('click', () => {
   loginForm.classList.toggle('active');
   signupForm.classList.remove('active');
});

signupBtn.addEventListener('click', () => {
   signupForm.classList.toggle('active');
   loginForm.classList.remove('active');
});

document.querySelector('#info-btn').onclick = () =>{
   contactInfo.classList.add('active');
}

document.querySelector('#close-contact-info').onclick = () =>{
   contactInfo.classList.remove('active');
}

const closeButtons = document.querySelectorAll('.close-contact-info');
   
   closeButtons.forEach(button => {
      button.addEventListener('click', () => {
         button.parentNode.style.display = 'none';
      });
   });
window.onscroll = () =>{
   navbar.classList.remove('active');
   searchForm.classList.remove('active');
   loginForm.classList.remove('active');
   contactInfo.classList.remove('active');
}

filterBtn.forEach(button =>{

  button.onclick = () =>{
    filterBtn.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    let dataFilter = button.getAttribute('data-filter');

    filterItem.forEach(item =>{

      item.classList.remove('active');
      item.classList.add('hide');

      if(item.getAttribute('data-item') == dataFilter || dataFilter == 'all'){
        item.classList.remove('hide');
        item.classList.add('active');
      }

    });

  };

});
var swiper = new Swiper(".img-slider", {
   loop:true,
   grabCursor:true,
   centeredSlides:true,
   autoplay: {
    delay:1500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
   breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      991: {
        slidesPerView: 3,
      },
   },
});

function myFunction(buttonId) {
  var dots = document.getElementsByClassName("dots")[buttonId - 1];
  var moreText = document.getElementsByClassName("more-text")[buttonId - 1];
  var btnText = document.getElementsByClassName("myBtn")[buttonId - 1];

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more...";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}

// Event listener for the nomination button
document.getElementById('nominationButton').addEventListener('click', function() {
    // Open a new page
    window.open('nominate.html', '_blank');
});

var swiper = new Swiper(".nominate-slider", {
       slidesPerView: 1,
      spaceBetween:10,
      centeredSlides: true,
       loop:true,
      autoplay: {
        delay:1050,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
       dynamicBullets:true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      }, 
      breakpoints: {
        "@0.00": {
          slidesPerView: 1,
          spaceBetween:10,
        },
        "@0.75": {
          slidesPerView: 2,
          spaceBetween:20,
        },
        "@1.00": {
          slidesPerView: 3,
          spaceBetween: 40,
        },
        "@1.50": {
          slidesPerView: 4,
          spaceBetween:50,
        },
      },
    });


var swiper = new Swiper(".blogs-slider", {
   loop:true,
   grabCursor:true,
   spaceBetween: 20,
   centeredSlides: true,
   autoplay: {
        delay:2000,
        disableOnInteraction: false,
      },
   breakpoints: {
      640: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      991: {
        slidesPerView: 3,
      },
   },
});



 function validateForm() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const message = document.getElementById("message").value;

    if (name === "" || email === "" || phone === "" || message === "") {
      alert("Please fill in all required fields.");
      return false;
    }

    // Form is valid, continue with form submission
    alert("Your form is submitted!");
    // Add your form submission logic here
  }


  $(document).ready(function () {
    $(".accordion-title").click(function (e) {
      var accordionitem = $(this).attr("data-tab");
      $("#" + accordionitem)
        .slideToggle()
        .parent()
        .siblings()
        .find(".accordion-content")
        .slideUp();

      $(this).toggleClass("active-title");
      $("#" + accordionitem)
        .parent()
        .siblings()
        .find(".accordion-title")
        .removeClass("active-title");

      $("i.fa-chevron-down", this).toggleClass("chevron-top");
      $("#" + accordionitem)
        .parent()
        .siblings()
        .find(".accordion-title i.fa-chevron-down")
        .removeClass("chevron-top");
    });
  });