const mobileMenuButton = document.getElementById("mobile-menu-button");
const mobileMenu = document.getElementById("mobile-menu");
const menuLinks = mobileMenu.querySelectorAll("a");

// ketika salah satu menu ditekan maka menu yang lain hilang
mobileMenuButton.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

// sembunyikan menu yang lain ketika telah ditekan
menuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.add("hidden");
  });
});

// Filter Functionality
document.querySelectorAll(".filter-btn").forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.getAttribute("data-filter");
    const items = document.querySelectorAll(".project-item");

    // Update active button styles
    document.querySelectorAll(".filter-btn").forEach((btn) => {
      btn.classList.remove("bg-indigo-500", "text-white");
      btn.classList.add("bg-gray-200", "text-gray-800");
    });
    button.classList.add("bg-indigo-500", "text-white");

    // Show/hide items based on filter
    items.forEach((item) => {
      if (filter === "all" || item.getAttribute("data-category") === filter) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  });
});

// Get all "View" buttons
const viewButtons = document.querySelectorAll(".view-btn");

// Get modal elements
const modal = document.getElementById("image-modal");
const modalImg = document.getElementById("modal-img");
const closeModal = document.getElementById("close-modal");

// Event listener for "View" button click
viewButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    event.preventDefault();
    const imgSrc = event.target.getAttribute("data-img");
    modalImg.src = imgSrc;
    modal.classList.remove("hidden");
  });
});

// Close modal when clicking the close button
closeModal.addEventListener("click", () => {
  modal.classList.add("hidden");
});

// Close modal when clicking outside the image
modal.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.classList.add("hidden");
  }
});

// Toggle Dark Mode
const darkModeToggle = document.getElementById("dark-mode-toggle");
darkModeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  // Change icon based on dark mode state
  if (document.body.classList.contains("dark")) {
    darkModeToggle.innerHTML = '<i class="fas fa-sun text-2xl"></i>'; // Change to sun icon
  } else {
    darkModeToggle.innerHTML = '<i class="fas fa-moon text-2xl"></i>'; // Change to moon icon
  }
});
