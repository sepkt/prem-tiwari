// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Theme toggle with saved preference
const toggle = document.getElementById("themeToggle");
const root = document.documentElement;
const saved = localStorage.getItem("theme");

if (saved === "dark" || (!saved && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
  root.setAttribute("data-theme", "dark");
  toggle.textContent = "☀️";
}

toggle.addEventListener("click", () => {
  const isDark = root.getAttribute("data-theme") === "dark";
  if (isDark) {
    root.removeAttribute("data-theme");
    toggle.textContent = "🌙";
    localStorage.setItem("theme", "light");
  } else {
    root.setAttribute("data-theme", "dark");
    toggle.textContent = "☀️";
    localStorage.setItem("theme", "dark");
  }
});
