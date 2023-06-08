/*
const mobileMenuIcon = document.getElementById("mobile-menu-icon");
const headerNav = document.getElementById("header-nav");
const modeChangeIcon = document.getElementById("mode-change-icon");

// Function to toggle mobile menu open and closed
function toggleMenu() {
    if(mobileMenuIcon.classList.contains("fa-bars-staggered")){
        mobileMenuIcon.classList.remove("fa-bars-staggered");
        mobileMenuIcon.classList.add("fa-xmark");
    }
    else{
        mobileMenuIcon.classList.remove("fa-xmark");
        mobileMenuIcon.classList.add("fa-bars-staggered");
    }
    headerNav.classList.toggle('open');
}
*/

/* 
// Add event listener to menu toggle button
mobileMenuIcon.addEventListener('click', toggleMenu);
*/


// Menu with close button 
const mobileMenuIcon = document.getElementById('mobile-menu-icon');
const headerNav = document.getElementById('header-nav');
const modeChangeIcon = document.getElementById("mode-change-icon");
const closeButton = document.getElementById('closeButton');

mobileMenuIcon.addEventListener('click', toggleMenu);
closeButton.addEventListener('click', closeMenu);

function toggleMenu() 
{
  if (mobileMenuIcon.classList.contains('fa-bars-staggered')) 
  {
    mobileMenuIcon.classList.remove('fa-bars-staggered');
  } else 
  {
    mobileMenuIcon.classList.add('fa-bars-staggered');
  }
  headerNav.classList.toggle('open');
}

function closeMenu()
{
  mobileMenuIcon.classList.add('fa-bars-staggered');
  headerNav.classList.remove('open');
}


// scroller reveal 
animateElement = (element,origin,delay) => {
    // Initialize ScrollReveal with options
    const sr = ScrollReveal({
        delay: delay,
        distance: '100px',
        duration: 1000,
        easing: 'ease',
        origin: origin
    });
  
    // Reveal the element
    sr.reveal(element);
}

// animate element 
animateElement(".main-img","bottom",500);
animateElement(".bg-img","right",100);
animateElement(".hero-content","left",500);
animateElement(".social-icon-list","bottom",500);
animateElement(".prod-sec-title","top",500);
animateElement(".card-1","left",500);
animateElement(".card-2","right",500);
animateElement(".card-3","left",500);
animateElement(".card-4","right",500);
animateElement(".card-5","left",500);
animateElement(".card-6","right",500);
animateElement(".card-7","left",500);
animateElement(".container","bottom",500);
animateElement(".con-1","left",500);
animateElement(".con-2","right",500);
animateElement(".con-title","top",500);
animateElement("#contact","bottom",500);
animateElement(".about-content-section","left",500);
animateElement(".about-image","bottom",100);
animateElement("#footer","bottom",500);

//gallery
animateElement(".gallery-title","top",500);
animateElement(".g1","bottom",500);
animateElement(".g2","bottom",500);
animateElement(".g3","bottom",500);
animateElement(".g4","bottom",500);
animateElement(".g5","bottom",500);
animateElement(".g6","bottom",500);
animateElement(".g7","bottom",500);
animateElement(".g8","bottom",500);

//product sticker
animateElement(".lg-title","top",500);
animateElement(".text-light","top",500);
animateElement(".prod-1","top",500);
animateElement(".prod-2","top",500);
animateElement(".prod-3","top",500);
animateElement(".prod-4","top",500);
animateElement(".prod-5","top",500);
animateElement(".prod-6","top",500);
animateElement(".prod-7","top",500);
animateElement(".prod-8","top",500);
animateElement(".prod-9","top",500);
animateElement(".prod-10","top",500);

//services
animateElement(".services-title","top",500);
//right
animateElement(".sr1","left",500);
animateElement(".sr2","left",500);
animateElement(".sr3","left",500);
animateElement(".sr4","left",500);
//left
animateElement(".sl1","right",500);
animateElement(".sl2","right",500);
animateElement(".sl3","right",500);
animateElement(".sl4","right",500);


//my skills
animateElement(".main-title-skills","bottom",500);
animateElement(".skills-container","bottom",500);
animateElement(".col-skill-left","left",500);
animateElement(".col-skill-right","right",500);

//carousel
animateElement(".carousel-title","top",500);
animateElement(".wrapper","bottom",500);




modeChangeIcon.addEventListener("click" , () => {
    if(modeChangeIcon.classList.contains("fa-moon")){
        document.body.classList.toggle("dark-theme");
        modeChangeIcon.classList.remove("fa-moon");
        modeChangeIcon.classList.add("fa-sun");
    }else{
        document.body.classList.toggle("dark-theme");
        modeChangeIcon.classList.remove("fa-sun");
        modeChangeIcon.classList.add("fa-moon");

    }
})


//
window.addEventListener('scroll', function() {
  var upButton = document.getElementById('upButton');
  var scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollPosition > 300) {
    upButton.style.display = 'block';
  } else {
    upButton.style.display = 'none';
  }
});

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}


