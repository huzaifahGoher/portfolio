import React from "react";
import "./../../globals.css";

const Introduction = () => {
  return (
    <div className="min-h-screen flex items-center ">
      {/* grid */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(var(--color-accent) 1px, transparent 1px), linear-gradient(90deg, var(--color-accent) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        ></div>
      </div>
      <div className="m-auto">
        <div className="max-w-4xl flex flex-col gap-10">
          <div className="flex flex-col gap-10 pointer-events-none">
            <h1 className="text-9xl font-display font-bold tracking-tight text-gradient animate-fade-in">
              Crafting Digital Experiences.
            </h1>
          </div>

          <div className="flex flex-wrap gap-4 animate-fade-up delay-400">
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
      </div>
    </div>
  );
};

export default Introduction;
