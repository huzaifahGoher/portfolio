import React from "react";
import Image from "next/image";

const Socials = () => {
  return (
    <div className="flex flex-1 w-full flex-col gap-10 items-center justify-between pb-32 px-16 bg-white dark:bg-black sm:items-start">
      <span className="text-accent text-xs font-mono  tracking-widest uppercase">
        Social Links
      </span>
      <div className="flex flex-row align-end">
        <div className="flex items-center gap-6 opacity-0-init animate-fade-up delay-500">
          <div className="h-px flex-1 max-w-[60px] bg-paper/10" />
          {[
            {
              label: "GitHub",
              href: "https://github.com/yourusername",
              path: "/github.svg",
              alt: "github_image",
            },
            {
              label: "LinkedIn",
              href: "https://linkedin.com/in/yourusername",
              path: "/linkedin.svg",
              alt: "linkedin_image",
            },
          ].map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-mono text-paper/40 hover:text-accent transition-colors underline-accent"
            >
              <Image
                className="dark:invert"
                src={s.path}
                alt="Next.js logo"
                width={100}
                height={20}
                priority
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Socials;
