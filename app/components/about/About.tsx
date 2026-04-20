import React from "react";

const About = () => {
  return (
    <div className="w-full">
      <div className="max-w-4xl m-auto flex flex-1 flex-col items-center">
        <div id="about">
          <p className="font-mono text-xs text-accent tracking-widest uppercase mb-3">
            About
          </p>
          <h2 className="font-display text-5xl md:text-6xl font-bold">
            Experience<span className="text-accent">.</span>
          </h2>
          <div className="space-y-4 text-paper/60 leading-relaxed pt-10">
            <p>
              <span className="text-paper font-medium">Huzaifah Goher</span> I'm
              a Software Engineer graduate from COMSATS University, where I
              built a VTuber platform as my Final Year Project using the MERN
              stack, Three.js, and Kalidokit — blending real-time 3D rendering
              with motion capture in the browser.
            </p>
            <p>
              I'm currently working at ELIXIR Technologies, developing rich text
              editing experiences with React and the Lexical library.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
