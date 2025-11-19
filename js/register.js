// register.js
document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".signup-form");

  if (!form) return;

  // If user already registered → auto redirect
  const savedName = localStorage.getItem("nyuku_fullName");
  const savedEmail = localStorage.getItem("nyuku_email");

  if (savedName && savedEmail) {
    window.location.href = "products.html";
    return;
  }

  // Handle new registration
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("fullname").value.trim();
    const email = document.getElementById("email").value.trim();

    if (!name) {
      alert("Please enter your name.");
      return;
    }
    if (!email) {
      alert("Please enter your email.");
      return;
    }

    // Save user in browser
    localStorage.setItem("nyuku_fullName", name);
    localStorage.setItem("nyuku_email", email);

    alert("Registration successful! Redirecting...");
    window.location.href = "products.html";
  });
});

