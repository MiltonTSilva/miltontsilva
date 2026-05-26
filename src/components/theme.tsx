import { useTheme } from "../hooks/useTheme";
const Theme = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <button className="theme-toggle" onClick={toggleTheme}>
      {theme === "dark" ? "Modo Claro" : "Modo Escuro"}
    </button>
  );
};

export default Theme;