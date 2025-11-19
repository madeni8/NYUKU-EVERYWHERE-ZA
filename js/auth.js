// auth.js  login/register system

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("authForm");
  const message = document.getElementById("authMessage");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = document.getElementById("email").value.trim();
    const fullname = document.getElementById("fullname").value.trim();

    if (!email) {
      message.textContent = "Please enter your email.";
      return;
    }

    // check if account exists in localStorage
    const existingUser = localStorage.getItem("nyuku_user_" + email);

    if (existingUser) {
      // existing user → redirect to products
      message.textContent = "Welcome back! Redirecting...";
      setTimeout(() => {
        window.location.href = "products.html";
      }, 1000);
    } else {
      // new user → must have fullname
      if (!fullname) {
        message.textContent = "Please enter your full name to create a new account.";
        return;
      }

      // save user
      const userData = { fullname, email };
      localStorage.setItem("nyuku_user_" + email, JSON.stringify(userData));

      message.textContent = "Account created successfully! Redirecting...";
      setTimeout(() => {
        window.location.href = "products.html";
      }, 1000);
    }
  });
});
