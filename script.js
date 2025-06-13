document.addEventListener("DOMContentLoaded", function () {
  // Set the launch date - October 13, 2025
  const launchDate = new Date("October 13, 2025 00:00:00").getTime();

  // Initialize the countdown immediately on page load
  updateCountdown();

  // Update the countdown every second
  const countdownTimer = setInterval(updateCountdown, 1000);

  function updateCountdown() {
    // Get current date and time
    const now = new Date().getTime();

    // Calculate the time remaining
    const timeRemaining = launchDate - now;

    // If the countdown is over, display a message
    if (timeRemaining < 0) {
      clearInterval(countdownTimer);
      document.querySelector(".countdown-container").innerHTML =
        "<h2>We have launched!</h2>";
      return;
    }

    // Calculate days, hours, minutes, and seconds
    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor(
      (timeRemaining % (1000 * 60 * 60)) / (1000 * 60)
    );
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    // Get all time sections in the countdown
    const timeElements = document.querySelectorAll(".countdown .time-section");

    // Display the result in the countdown elements
    if (timeElements.length >= 4) {
      // Days
      timeElements[0].querySelector("span:first-child").textContent = days;
      // Hours
      timeElements[1].querySelector("span:first-child").textContent =
        hours < 10 ? "0" + hours : hours;
      // Minutes
      timeElements[2].querySelector("span:first-child").textContent =
        minutes < 10 ? "0" + minutes : minutes;
      // Seconds
      timeElements[3].querySelector("span:first-child").textContent =
        seconds < 10 ? "0" + seconds : seconds;
    }
  }

  // Popup functionality for About Us and Contact Us

  // Get modal elements
  const aboutUsModal = document.getElementById("aboutUsModal");
  const contactUsModal = document.getElementById("contactUsModal");
  const ecommerceModal = document.getElementById("ecommerceModal");
  const mediaModal = document.getElementById("mediaModal");
  const financeModal = document.getElementById("financeModal");
  const eventsModal = document.getElementById("eventsModal");

  // Get button elements
  const aboutUsBtn = document.querySelector("nav .about");
  const contactUsBtn = document.querySelector("nav .contact");

  // Get category elements
  const ecommerceCard = document.querySelector(".category .ecommerce");
  const mediaCard = document.querySelector(".category .media");
  const financeCard = document.querySelector(".category .finance");
  const eventsCard = document.querySelector(".category .events");

  // Get close button elements
  const closeButtons = document.querySelectorAll(".close-btn");
  const aboutCloseButton = document.querySelector(".aboutus-close-btn");

  // When the user clicks on About Us button, open the modal
  if (aboutUsBtn) {
    aboutUsBtn.addEventListener("click", function (e) {
      e.preventDefault();
      aboutUsModal.style.display = "flex";
    });
  }

  // When the user clicks on Contact Us button, open the modal
  if (contactUsBtn) {
    contactUsBtn.addEventListener("click", function (e) {
      e.preventDefault();
      contactUsModal.style.display = "flex";
    });
  }

  // When the user clicks on category cards, open the corresponding modal
  if (ecommerceCard) {
    ecommerceCard.addEventListener("click", function () {
      ecommerceModal.style.display = "flex";
    });
  }

  if (mediaCard) {
    mediaCard.addEventListener("click", function () {
      mediaModal.style.display = "flex";
    });
  }

  if (financeCard) {
    financeCard.addEventListener("click", function () {
      financeModal.style.display = "flex";
    });
  }

  if (eventsCard) {
    eventsCard.addEventListener("click", function () {
      eventsModal.style.display = "flex";
    });
  }

  // When the user clicks on the close button (!) in the About Us modal, close it
  aboutCloseButton.addEventListener("click", function () {
    aboutUsModal.style.display = "none";
  });

  // When the user clicks on close button (×), close the modal
  closeButtons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      aboutUsModal.style.display = "none";
      contactUsModal.style.display = "none";
      ecommerceModal.style.display = "none";
      mediaModal.style.display = "none";
      financeModal.style.display = "none";
      eventsModal.style.display = "none";
    });
  });

  // When the user clicks anywhere outside of the modal, close it
  window.addEventListener("click", function (event) {
    if (event.target === aboutUsModal) {
      aboutUsModal.style.display = "none";
    }
    if (event.target === contactUsModal) {
      contactUsModal.style.display = "none";
    }
    if (event.target === ecommerceModal) {
      ecommerceModal.style.display = "none";
    }
    if (event.target === mediaModal) {
      mediaModal.style.display = "none";
    }
    if (event.target === financeModal) {
      financeModal.style.display = "none";
    }
    if (event.target === eventsModal) {
      eventsModal.style.display = "none";
    }
  });

  // Contact form submission
  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();
      // Here you would typically send the form data to a server
      // For now, we'll just show a success message
      alert("Thank you for your message! We will get back to you soon.");
      contactUsModal.style.display = "none";
      contactForm.reset();
    });
  }

  // Add class to the body based on screen width for responsive design
  function checkScreenSize() {
    if (window.innerWidth <= 768) {
      document.body.classList.add("mobile");
    } else {
      document.body.classList.remove("mobile");
    }
  }

  // Check screen size on load
  checkScreenSize();

  // Check screen size on resize
  window.addEventListener("resize", checkScreenSize);
});
