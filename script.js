// Countdown Timer
    const eventDate = new Date("2025-09-27T10:00:00").getTime();
    const countdown = () => {
      const now = new Date().getTime();
      const diff = eventDate - now;
      if (diff < 0) return;
      document.getElementById("days").innerText = Math.floor(diff / (1000 * 60 * 60 * 24));
      document.getElementById("hours").innerText = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      document.getElementById("minutes").innerText = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      document.getElementById("seconds").innerText = Math.floor((diff % (1000 * 60)) / 1000);
    };
    setInterval(countdown, 1000);

    // Sticky Navbar Shadow
    const navbar = document.getElementById("navbar");
    window.addEventListener("scroll", () => {
      navbar.classList.toggle("shadow", window.scrollY > 10);
    });

    // Hamburger Menu Toggle
    const hamburger = document.getElementById("hamburger");
    const navLinks = document.getElementById("nav-links");
    hamburger.addEventListener("click", () => {
      navLinks.classList.toggle("active");
      hamburger.classList.toggle("active"); // Add this for animation
    });
    // Close mobile menu on link click
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
          navLinks.classList.remove('active');
          hamburger.classList.remove('active'); // Remove animation on close
        }
      });
    });
    function toggleMenu() {
    const navLinks = document.getElementById('navLinks');
    navLinks.classList.toggle('show');
  }
// Close mobile menu when clicking outside
window.addEventListener('click', function(e) {
  if (window.innerWidth <= 768 && navLinks.classList.contains('active')) {
    if (!navLinks.contains(e.target) && !hamburger.contains(e.target)) {
      navLinks.classList.remove('active');
      hamburger.classList.remove('active'); // Remove animation on outside click
    }
  }
});

  // Modal functionality
  function openModal(img) {
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modalImg');
    modal.classList.add('show');
    modalImg.src = img.src;
  }

  function closeModal() {
    document.getElementById('modal').classList.remove('show');
  }

  // Filter gallery
  function filterGallery(category) {
    const items = document.querySelectorAll('.gallery-item');
    items.forEach(item => {
      if (category === 'all' || item.classList.contains(category)) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  }


  let slideIndex = 1;
let slideInterval;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
    resetSlideInterval();
}

function currentSlide(n) {
    showSlides(slideIndex = n);
    resetSlideInterval();
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
}

function autoSlideShow() {
  plusSlides(1);
}

function resetSlideInterval() {
  clearInterval(slideInterval);
  slideInterval = setInterval(autoSlideShow, 4000); // 4 seconds
}

// Start automatic slideshow
slideInterval = setInterval(autoSlideShow, 4000);

// Touch/swipe support for gallery
const slideshowContainer = document.querySelector('.slideshow-container');
let startX = 0;
let endX = 0;
if (slideshowContainer) {
  slideshowContainer.addEventListener('touchstart', function(e) {
    startX = e.touches[0].clientX;
  });
  slideshowContainer.addEventListener('touchmove', function(e) {
    endX = e.touches[0].clientX;
  });
  slideshowContainer.addEventListener('touchend', function() {
    if (startX && endX) {
      if (startX - endX > 50) {
        plusSlides(1); // swipe left, next
      } else if (endX - startX > 50) {
        plusSlides(-1); // swipe right, prev
      }
    }
    startX = 0;
    endX = 0;
  });
}
// ...existing code...
    document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
      link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').slice(1);
        const target = document.getElementById(targetId);

        if (target) {
          window.scrollTo({
            top: target.offsetTop - 60, // Adjust offset for sticky navbar if needed
            behavior: 'smooth'
          });
        }
      });
    });
  });

    // Scroll animations
    const sections = document.querySelectorAll('.section');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.2
    });
    sections.forEach(section => observer.observe(section));



document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('.nav-links'); // Add this class to your nav links
    const navMenu = document.getElementById('nav-menu'); // The menu container
    const navToggle = document.getElementById('nav-toggle'); // The button/icon that toggles the menu

    navLinks.forEach(link => {
      link.addEventListener('click', function () {
        // Only close if menu is open (optional check)
        if (navMenu.classList.contains('open')) {
          navMenu.classList.remove('open');

          // Optionally toggle active class on the toggle button
          navToggle.classList.remove('active');
        }
      });
    });

    // Optional: Handle menu toggle for opening
    navToggle.addEventListener('click', function () {
      navMenu.classList.toggle('open');
      this.classList.toggle('active');
    });
  });









    


   

    // Adding a class for visibility animation
    const style = document.createElement('style');
    style.innerHTML = `
    .hidden { opacity: 0; transform: translateY(20px); transition: all 0.3s ease-in-out; }
    .visible { opacity: 1; transform: translateY(0); }
    `;
    document.head.appendChild(style);


  

    





   

// Animate hero text on load
window.addEventListener('DOMContentLoaded', function() {
  const hero = document.querySelector('.hero');
  if (hero) {
    hero.style.opacity = 0;
    hero.style.transform = 'scale(0.98)';
    setTimeout(() => {
      hero.style.transition = 'opacity 1.2s, transform 1.2s';
      hero.style.opacity = 1;
      hero.style.transform = 'scale(1)';
    }, 200);
  }
});



  // Contact form success alert and redirect
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const formData = new FormData(contactForm);
    fetch(contactForm.action, {
      method: 'POST',
      body: formData,
      headers: { 'Accept': 'application/json' }
    })
    .then(response => {
      if (response.ok) {
        alert('Message sent successfully!');
        window.location.href = '#hero';
      } else {
        alert('There was an error sending your message. Please try again.');
      }
    })
    .catch(() => {
      alert('There was an error sending your message. Please try again.');
    });
  });
}


//response for Google sheet 

  const scriptURL = 'https://script.google.com/macros/s/AKfycbz3mHttSfLjWk-dbuQ1Ia0Ts5Xw31qHddxX9JeB-DJLx8LACqKAC5NZ2WoGRq9pXc9qwA/exec';
  const form = document.getElementById('contactForm');
  const responseMessage = document.getElementById('responseMessage');

  form.addEventListener('submit', e => {
    e.preventDefault();
    const data = new FormData(form);
    const obj = {
      name: data.get("name"),
      email: data.get("email"),
      message: data.get("message")
    };

    fetch(scriptURL, {
      method: 'POST',
      body: JSON.stringify(obj),
      headers: { 'Content-Type': 'application/json' }
    })
    .then(res => {
      responseMessage.textContent = "Message sent successfully!";
      form.reset();
    })
    .catch(err => {
      console.error('Error!', err.message);
      responseMessage.textContent = "Something went wrong.";
    });
  });


 


/*

const form = document.getElementById('contactForm');
const responseMessage = document.getElementById('responseMessage');

const formspreeURL = 'https://formspree.io/f/xanwezjl';
const googleScriptURL = 'https://script.google.com/macros/s/AKfycbz3mHttSfLjWk-dbuQ1Ia0Ts5Xw31qHddxX9JeB-DJLx8LACqKAC5NZ2WoGRq9pXc9qwA/exec';

if (form) {
  form.addEventListener('submit', function(e) {
    e.preventDefault();

    const formData = new FormData(form);
    const jsonData = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message")
    };

    // Send to Formspree
    const sendToFormspree = fetch(formspreeURL, {
      method: 'POST',
      body: formData,
      headers: { 'Accept': 'application/json' }
    });

    // Send to Google Sheets
    const sendToGoogleSheet = fetch(googleScriptURL, {
      method: 'POST',
      body: JSON.stringify(jsonData),
      headers: { 'Content-Type': 'application/json' }
    });

    // Wait for both requests
    Promise.all([sendToFormspree, sendToGoogleSheet])
      .then(([formspreeRes, sheetRes]) => {
        if (formspreeRes.ok && sheetRes.ok) {
          responseMessage.textContent = "Message sent successfully!";
          form.reset();
          window.location.href = '#hero'; // Optional: navigate to hero section
        } else {
          responseMessage.textContent = "Error sending message. Please try again.";
        }
      })
      .catch(error => {
        console.error("Submission error:", error);
        responseMessage.textContent = "Something went wrong. Please try again.";
      });
  });
}

*/
