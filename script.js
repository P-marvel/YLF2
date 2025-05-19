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
    });

    function toggleMenu() {
    const navLinks = document.getElementById('navLinks');
    navLinks.classList.toggle('show');
  }

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
    showSlides(slideIndex);

    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    function currentSlide(n) {
        showSlides(slideIndex = n);
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