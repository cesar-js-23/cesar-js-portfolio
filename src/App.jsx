import AboutSection from "./components/sections/AboutSection";
import Footer from "./components/sections/Footer";
import Header from "./components/sections/Header";
import NavBar from "./components/sections/NavBar";
import ProjectSection from "./components/sections/ProjectSection";
import TechSection from "./components/sections/TechSection";

function App() {
  return (
    <div className="text-center bg-[#f7f8fb] dark:bg-slate-700 dark:text-white bg-pattern dark:bg-patternDark">
      <NavBar />
      <Header />
      <AboutSection />
      <TechSection />
      <ProjectSection />
      <Footer />
    </div>
  );
}

export default App;
