import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(true);

  // Initialize theme based on user preference or default to dark
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "light") {
      setIsDark(false);
      document.documentElement.classList.remove("dark");
    } else {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDark(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDark(true);
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-6 right-6 z-50 bg-secondary p-2 rounded-full flex items-center justify-between w-14 h-7"
      aria-label="Toggle Theme"
    >
      <span className="sr-only">Toggle Theme</span>
      <Moon className="h-3 w-3" />
      <Sun className="h-3 w-3" />
      <div
        className={`absolute top-1 left-1 bg-primary w-5 h-5 rounded-full transition-transform duration-300 ease-in-out ${
          isDark ? "" : "translate-x-6"
        }`}
      ></div>
    </button>
  );
}
