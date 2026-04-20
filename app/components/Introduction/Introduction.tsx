import React, {useState} from "react";

const Introduction = () => {
  return (
    <div className="flex flex-1 w-full flex-col gap-10 items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
      <h1 className="text-8xl font-semibold tracking-tight text-black dark:text-zinc-50">
        Enhanced Digital Experiences.
      </h1>
      <h1 className=" text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
        I build fast, accessible and practical appliactions with appealing
        designs.
      </h1>
      <div className="flex flex-wrap gap-4 opacity-0-init animate-fade-up delay-400">
        <a
          href="#work"
          className="group flex items-center gap-3 bg-accent text-ink font-mono text-sm font-medium px-7 py-3.5 hover:bg-accent/90 transition-all duration-200"
        >
          View My Work
          <span className="group-hover:translate-x-1 transition-transform duration-200">
            →
          </span>
        </a>
        <a
          href="#contact"
          className="flex items-center gap-3 border border-paper/20 text-paper/70 font-mono text-sm px-7 py-3.5 hover:border-accent/40 hover:text-accent transition-all duration-200"
        >
          Get In Touch
        </a>
      </div>
    </div>
  );
};

export default Introduction;
