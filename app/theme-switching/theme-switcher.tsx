import { CiDark, CiLight } from "react-icons/ci";
import { GrSystem } from "react-icons/gr";
import ThemeButton from "./theme-button";

const checkThemePreference = (prefersDark: boolean) => {
  if (prefersDark) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
};

const preference = window.matchMedia("(prefers-color-scheme:dark)");

export default function ThemeSwitcher() {
  const saveOption = (option: "light" | "dark" | "system") =>
    localStorage.setItem("theme", option);

  const handleLight = () => {
    preference.removeEventListener("change", handleThemeChange);
    document.documentElement.classList.remove("dark");
    saveOption("light");
  };

  const handleDark = () => {
    preference.removeEventListener("change", handleThemeChange);
    document.documentElement.classList.add("dark");
    saveOption("dark");
  };

  const handleThemeChange = (e: MediaQueryListEvent) =>
    checkThemePreference(e.matches);

  const handleSystem = () => {
    checkThemePreference(preference.matches);
    preference.addEventListener("change", handleThemeChange);
    saveOption("system");
  };

  return (
    <div className="flex gap-3">
      <ThemeButton Icon={CiLight} callback={handleLight} />
      <ThemeButton Icon={CiDark} callback={handleDark} />
      <ThemeButton Icon={GrSystem} callback={handleSystem} />
    </div>
  );
}
