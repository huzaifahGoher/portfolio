"use client";
import { HrefConstant } from "@/app/constants/href/HrefConstant";
import { LanguageConstant } from "@/app/constants/language/LanguageConstant";
import React, { useEffect, useState } from "react";

const navbarItems = [
  { label: "Work", value: "work" },
  { label: "About", value: "about" },
  { label: "Skills", value: "skills" },
  { label: "Contact", value: "contact" },
];

const Navbar = () => {
  const MAX_SCROLL = 50;
  const MAX_BLUR = 20;
  const [blur, setBlur] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const progress = Math.min(window.scrollY / MAX_SCROLL, 1);
      setBlur(progress * MAX_BLUR);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const links = () =>
    navbarItems.map((item: any, index: number) => (
      <a
        key={`${index}-${item.label}`}
        href={"m.youtube.com"}
        className="text-sm font-mono text-paper/60 hover:text-accent transition-colors duration-200 underline-accent"
      >
        {item.label}
      </a>
    ));

  return (
    <div
      className="w-full flex flex-row flex-1 justify-between fixed top-0 px-10 py-5 shadow-lg z-100"
      style={{
        backdropFilter: `blur(${blur}px)`,
        background: `black`,
      }}
    >
      <div className="font-display text-xl font-bold tracking-tight">
        <a href={HrefConstant.HOME}>
          <span className="text-accent">H</span>uzaifah
          <span className="text-accent"> G</span>oher
        </a>
      </div>
      <div className="hidden md:flex items-center gap-8">{links()}</div>
      <div>
        <a href="#" className="hidden md:inline-flex items-center gap-2 text-sm font-mono px-4 py-2 border border-accent/40 text-accent hover:bg-accent hover:text-ink transition-all duration-200 rounded-sm">
          {LanguageConstant.RESUME}
        </a>
      </div>
    </div>
  );
};

export default Navbar;
