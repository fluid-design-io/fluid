import { useEffect } from "react";
import "../styles/globals.css";
import "../styles/neumorphism.css";

function MyApp({ Component, pageProps }) {
  const activateDarkMode = () => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };
  useEffect(() => {
    activateDarkMode();
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", () => activateDarkMode());
    return () =>
      window
        .matchMedia("(prefers-color-scheme: dark)")
        .removeEventListener("change", () => {});
  }, []);
  return <Component {...pageProps} />;
}

export default MyApp;
