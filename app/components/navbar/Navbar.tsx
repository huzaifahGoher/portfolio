"use client";
import { HrefConstant } from "@/app/constants/href/HrefConstant";
import { LanguageConstant } from "@/app/constants/language/LanguageConstant";
import React, { useEffect, useState } from "react";

const navbarItems = [
  { label: "Work", value: "work", href: "#work" },
  { label: "About", value: "about", href: "#about" },
  { label: "Skills", value: "skills", href: "#skills" },
  { label: "Contact", value: "contact", href: "#contact" },
];

const Navbar = () => {
  const MAX_SCROLL = 80;
  const [blur, setBlur] = useState(0);
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const progress = Math.min(window.scrollY / MAX_SCROLL, 1);
      setBlur(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-100 transition-all duration-300 ${
        blur === 1 && "shadow-sm shadow-white backdrop-blur-md"
      }`}
    >
      <nav className="max-w-6xl flex flex-row flex-1 justify-between items-center px-6 py-6 m-auto">
        <a
          className="font-display text-xl font-bold tracking-tight"
          href={HrefConstant.HOME}
        >
          <span className="text-accent">H</span>uzaifah
          <span className="text-accent">G</span>oher
        </a>

        {/* Desktop menu */}
        <ul className="hidden md:flex items-center gap-8">
          {navbarItems.map((item: any, index: number) => (
            <li key={`${index}-${item.label}`}>
              <a
                href={item.href}
                className="text-sm font-mono text-paper/60 hover:text-accent transition-colors duration-200 underline-accent"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-2 text-sm font-mono px-4 py-2 border border-accent/40 text-accent hover:bg-accent hover:text-ink transition-all duration-200 rounded-sm"
          >
            {LanguageConstant.RESUME}
          </a>
        </div>

        {/* Mobile menu button*/}
        <button
          className="md:hidden flex flex-col gap-1.5 p-1"
          onClick={() => setMenu(!menu)}
        >
          <span
            className={`block w-5 h-px bg-paper transition-all duration-300 ${
              menu ? "rotate-43 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-5 h-px bg-paper transition-all duration-300 ${
              menu ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-5 h-px bg-paper transition-all duration-300 ${
              menu ? "-rotate-43 -translate-y-2" : ""
            }`}
          />
        </button>
      </nav>
      <div
        className="h-px mx-auto transition-none"
        style={{
          width: `${blur * 100}%`,
          background: `rgba(255, 255, 255, ${blur})`,
        }}
      />

      {/* Mobile menu */}
      {menu && (
        <div className="md:hidden bg-surface/95 backdrop-blur-md border-t border-white/5 px-6 py-6">
          <ul className="flex flex-col gap-4">
            {navbarItems.map((item: any, index: number) => (
              <li key={`${index}-${item.label}`}>
                <a
                  href={item.href}
                  className="text-paper/70 hover:text-accent font-mono text-sm transition-colors"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent font-mono text-sm"
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
