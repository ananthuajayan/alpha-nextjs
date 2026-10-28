"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "a2o-theme";
const BLUE_THEME = "blue";

function applyTheme(blue: boolean) {
  const root = document.documentElement;

  if (blue) {
    root.dataset.theme = BLUE_THEME;
  } else {
    delete root.dataset.theme;
  }

  document
    .querySelector('meta[name="theme-color"]')
    ?.setAttribute("content", blue ? "#ffffff" : "#f2efe7");

  try {
    localStorage.setItem(STORAGE_KEY, blue ? BLUE_THEME : "warm");
  } catch {
    // Storage can be blocked (private mode, strict settings) — the theme still applies.
  }
}

export function ThemeToggle() {
  const [blue, setBlue] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setBlue(document.documentElement.dataset.theme === BLUE_THEME);
  }, []);

  const toggle = () => {
    const next = !blue;
    setBlue(next);
    setReady(true);
    applyTheme(next);
  };

  return (
    <button
      type="button"
      className="theme-toggle"
      role="switch"
      aria-checked={blue}
      aria-label="White and blue theme"
      title="White and blue theme"
      data-ready={ready ? "true" : "false"}
      onClick={toggle}
    >
      <span className="theme-toggle-track" aria-hidden="true">
        <span className="theme-toggle-knob" />
      </span>
      <span className="theme-toggle-label" aria-hidden="true">
        {blue ? "Blue" : "Warm"}
      </span>
    </button>
  );
}
