import Image from "next/image";
import Navbar from "./components/navbar/Navbar";
import Introduction from "./components/Introduction/Introduction";
import Projects from "./components/projects/Projects";
import Socials from "./components/socials/Socials";
import Contact from "./components/contact/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
          <Introduction />
          <Projects />
          <Contact />
      </main>
    </>
  );
}
