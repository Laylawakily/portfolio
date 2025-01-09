import Navbar from "../Navbar/Navbar";
import AboutSection from "./AboutSection";
import ContactSection from "./ContactSection";
import HomeSection from "./HomeSection";
import ProjectsSection from "./ProjectsSection";

export default function HomeMain() {
  return (
    <>
      <Navbar />
      <div className="mx-auto container mt-24 md:px-12 px-4 md:max-w-7xl ">
        <HomeSection />
        <AboutSection />
        <ProjectsSection />
        <ContactSection />
      </div>
    </>
  );
}
