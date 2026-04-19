import Image from "next/image";
import Navbar from "./components/navbar/Navbar";
import Introduction from "./components/Introduction/Introduction";
import Projects from "./components/projects/Projects";
import Socials from "./components/socials/Socials";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
          <Introduction />
          <Socials />
          <Projects />
      </main>
    </>
  );
}
