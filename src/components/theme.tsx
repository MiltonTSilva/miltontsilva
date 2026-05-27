import { useTheme } from "../hooks/useTheme";
import "../styles/theme.css";


const Theme = () => {
  const { theme, toggleTheme } = useTheme();
  return (

    <div className="theme-area">
      {theme === "dark" ? "☀️" : "🌙"}
      <button
        className="theme-btn"
        id="theme-btn"
        aria-label="Alternar tema"
        title="Alternar tema claro/escuro"
        onClick={toggleTheme}
      ></button>
      <span className="theme-label" id="theme-label">
        {theme === "dark" ? "Claro" : "Escuro"}
      </span>
    </div>
  );
};

export default Theme;