// js/nav.js - accessible mobile nav toggle
document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".primary-nav");

  if (!toggle || !nav) return;

  function openNav() {
    nav.classList.add("open");
    toggle.setAttribute("aria-expanded", "true");
    const firstLink = nav.querySelector("a");
    if (firstLink) firstLink.focus();
  }
  function closeNav() {
    nav.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
    toggle.focus();
  }

  toggle.addEventListener("click", function () {
    const expanded = toggle.getAttribute("aria-expanded") === "true";
    if (expanded) closeNav(); else openNav();
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && nav.classList.contains("open")) {
      closeNav();
    }
  });

  document.addEventListener("click", function (e) {
    if (!nav.contains(e.target) && !toggle.contains(e.target) && nav.classList.contains("open")) {
      closeNav();
    }
  });

  window.addEventListener("resize", function () {
    if (window.innerWidth >= 760 && nav.classList.contains("open")) {
      closeNav();
    }
  });
});

