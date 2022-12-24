/* eslint no-use-before-define: 0 */
import React, {
  FC,
  ReactNode,
  createContext,
  useContext,
  useState,
} from 'react';

import windowExists from '@/helpers/window-exists';

export type Mode = string | undefined | 'light' | 'dark';

interface ThemeContextProps {
  mode?: Mode;
  toggleMode?: () => void;
}

export const ThemeContext = createContext<ThemeContextProps>({
  mode: 'light',
});

interface ThemeProviderProps {
  children: ReactNode;
}

export const isSystemDarkMode = () => {
  if (!windowExists()) return false;
  const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
  return darkModeMediaQuery.matches && !window.localStorage.isDarkMode;
};

export const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
  const [mode, setMode] = useState(isSystemDarkMode() ? 'dark' : 'light');
  function disableTransitionsTemporarily() {
    document.documentElement.classList.add('[&_*]:!transition-none');
    window.setTimeout(() => {
      document.documentElement.classList.remove('[&_*]:!transition-none');
    }, 0);
  }
  function toggleMode() {
    disableTransitionsTemporarily();

    const isDarkMode = document.documentElement.classList.toggle('dark');

    if (isDarkMode === isSystemDarkMode()) {
      delete window.localStorage.isDarkMode;
      setMode('light');
    } else {
      window.localStorage.isDarkMode = isDarkMode;
      setMode('dark');
    }
  }
  return (
    <ThemeContext.Provider
      value={{
        mode,
        toggleMode,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export function useTheme(): ThemeContextProps {
  return useContext(ThemeContext);
}
