"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

type DashboardTheme = "light" | "dark";

type DashboardThemeContextType = {
  theme: DashboardTheme;
  toggleTheme: () => void;
  setTheme: (theme: DashboardTheme) => void;
};

const DashboardThemeContext = createContext<DashboardThemeContextType | undefined>(
  undefined
);

const STORAGE_KEY = "dashboard-theme";

export function DashboardThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<DashboardTheme>(() => {
    if (typeof window === "undefined") return "light";
    const stored = window.localStorage.getItem(STORAGE_KEY);
    return stored === "dark" || stored === "light" ? stored : "light";
  });

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, theme);
  }, [theme]);

  const value = useMemo(
    () => ({
      theme,
      setTheme,
      toggleTheme: () => {
        setTheme((prev) => (prev === "light" ? "dark" : "light"));
      },
    }),
    [theme]
  );

  return (
    <DashboardThemeContext.Provider value={value}>
      {children}
    </DashboardThemeContext.Provider>
  );
}

export function useDashboardTheme() {
  const context = useContext(DashboardThemeContext);
  if (!context) {
    throw new Error("useDashboardTheme must be used within DashboardThemeProvider");
  }
  return context;
}
