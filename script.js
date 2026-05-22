const toggleBtn = document.getElementById("themeToggle");
const body = document.body;

const currentTheme = localStorage.getItem("theme");
if (currentTheme === "dark") {
  body.classList.add("dark-mode");
  toggleBtn.textContent = "Modo Claro";
}

toggleBtn.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  const isDark = body.classList.contains("dark-mode");
  toggleBtn.textContent = isDark ? "Modo Claro" : "Modo Escuro";
  localStorage.setItem("theme", isDark ? "dark" : "light");
});
