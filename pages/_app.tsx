import { useEffect } from "react";
import { appWithTranslation } from "next-i18next";
import nextI18nextConfig from "../next-i18next.config";
import '@docsearch/css';
import "flag-icons/css/flag-icons.min.css";
import "../styles/globals.css";
import "../styles/neumorphism.css";
import { CookiesProvider } from "react-cookie";

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
  return (
    <CookiesProvider>
      <Component {...pageProps} />
    </CookiesProvider>
  );
}

export default appWithTranslation(MyApp, nextI18nextConfig);
