const menuTrigger =  document.querySelector('.trigger'),
      closeTrigger = document.querySelector('.mini-close'),
      giveClass = document.querySelector('.site');



menuTrigger.addEventListener('click', function(){
    giveClass.classList.toggle('showmenu')
})
closeTrigger.addEventListener('click', function(){
    giveClass.classList.remove('showmenu')
})      


//submenu 
const button = document.querySelectorAll('.has-child > a'),
modalheight = document.querySelector('.menu-list');

button.forEach((item) => item.parentNode.classList.remove('expand') );
button.forEach((menu) => menu.addEventListener('click', function() {
    let modal = document.querySelector('.menu-list');
    modal.classList.toggle('show');


    if (this.parentNode.classList != 'expand') {
        this.parentNode.classList.toggle('expand')
    }
    if ( ! modal.classList.contains('show') ) {
        modal.style.height = modalheight + 'px';
    } else {
        modal.style.height = (this.parentNode.querySelector('ul').offsetHeight + 45) + 'px';
    }


//Back button 
menu.parentElement.querySelector('.back').addEventListener('click', function() { 
    modal.style.height = 'auto';
    modal.classList.remove('show');
    menu.parentNode.classList.remove('expand')
})    
}))

var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    effect: "fade",
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });


  function checkScreenSize() {
  var screenSize = window.innerWidth || document.documentElement.clientWidth;
  var sliderCon = document.querySelector('.slider-con');

  if (screenSize <= 425) {
    sliderCon.classList.remove('slider-con');
  } else {
    sliderCon.classList.add('slider-con');
  }
}

// Call the function on page load and whenever the window is resized
window.addEventListener('load', checkScreenSize);
window.addEventListener('resize', checkScreenSize);




window.addEventListener('resize', handleResize);

function handleResize() {
  if (window.innerWidth >= 320 && window.innerWidth <= 768) {
    document.getElementById('cd-left').classList.remove('w-25', 'align-self-start');
    document.getElementById('cd-right').classList.remove('w-25', 'align-self-end');
    document.getElementById('cd-center').style.order = '3';
  } else {
    document.getElementById('cd-left').classList.add('w-25', 'align-self-start');
    document.getElementById('cd-right').classList.add('w-25', 'align-self-end');
    document.getElementById('cd-center').style.order = '';
  }
}

document.addEventListener("DOMContentLoaded", function() {
  fetch("assets/footer.html")
    .then(function(response) {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.text();
    })
    .then(function(html) {
      document.getElementById("footer-container").innerHTML = html;
    })
    .catch(function(error) {
      console.log("Error fetching footer:", error);
    });
});

  document.addEventListener("DOMContentLoaded", function() {
          fetch('assets/footer.html')
          .then(response => response.text())
          .then(html => {
              document.getElementById('footer-placeholder').innerHTML = html;
          })
          .catch(error => console.error('Error fetching footer content:', error));
      });
      fetch('assets/footer.html')
      .then(response => response.text())
      .then(html => {
          document.getElementById('footer-placeholder').innerHTML = html;
      })
      .catch(error => console.error('Error fetching footer content:', error));


      var swiper = new Swiper('.blog-slider', {
        spaceBetween: 30,
        effect: 'fade',
        loop: true,
        mousewheel: {
          invert: false,
        },
        // autoHeight: true,
        pagination: {
          el: '.blog-slider__pagination',
          clickable: true,
        }
      });


      AOS.init();

