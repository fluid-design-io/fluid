import { useEffect } from "react";
import "../styles/globals.css";
import "../styles/neumorphism.css";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);
  return <Component {...pageProps} />;
}

export default MyApp;
