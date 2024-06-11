let menu = document.querySelector('#menu-btn');
let navbar= document.querySelector('.header .navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
};

window.onscroll =() =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
};
var swiper = new Swiper(".home-slider", {
  autoplay: {
    delay: 3500,
    disableOnInteraction: false
},
    loop:true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  setTimeout(function(){
    $('.container').fadeToggle();
  },1500);


  var swiper = new Swiper(".reviews-slider", {
      loop:true,
      spaceBetween:20,
      autoHeight:20,
      grabCursor:true,
      breakpoints: {
       640:{
        slidesPerView:1,
       },
       768:{
        slidesPerView:2,
       },
       1024:{
        slidesPerView:3,
       },
      },
    });

    let loadMoreBtn = document.querySelector('.packages .load-more .btn');
    let currentItem = 3;
    
    loadMoreBtn.onclick = () => {
      let boxes = [...document.querySelectorAll('.packages .box-container .box')]
      for (var i = currentItem; i < currentItem + 3; i++) {
        boxes[i].style.display = 'grid';
      };
      currentItem += 3;
      if (currentItem >= boxes.length) {
        loadMoreBtn.style.display = 'none';
      }
    }



function validateForm() {
  
  const lastName = document.getElementById("name");
  const email = document.getElementById("email");
  const password = document.getElementById("password");
  const confirmPassword = document.getElementById("confirmPassword");
  const passwordError = document.getElementById("passwordError");
  const confirmPasswordError = document.getElementById("confirmPasswordError");

  if (password.value.length < 8) {
    passwordError.innerText = "! Password should be at least 8 characters long";
    password.classList.add("error");
    return false;
  } else if (!/\d/.test(password.value)) {
    passwordError.innerText = "! Password should contain at least one number";
    password.classList.add("error");
    return false;
  } else {
    passwordError.innerText = "";
    password.classList.remove("error");
  }

  if (confirmPassword.value !== password.value) {
    confirmPasswordError.innerText = "! Passwords do not match";
    confirmPassword.classList.add("error");
    return false;
  } else {
    confirmPasswordError.innerText = "";
    confirmPassword.classList.remove("error");
  }
  // If form is valid, redirect to another webpage
  window.location.href = "book.php";
  return true;
}

function displayMessage() {
  alert("Enjoy your trip!");
  return true;
}