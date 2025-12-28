import About from "../Components/About";
import Hero from "../Components/Hero";
import Navbar from "../Components/Navbar";
import Projects from "../Components/Projects";
import Skills from "../Components/Skills";
import StarBackground from "../Components/StarBackground";
import ThemeToggle from "../Components/ThemeToggle";

const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Toggle */}
      <ThemeToggle />
      {/* Background Effects*/}
      <StarBackground />
      {/* Navbar */}
      <Navbar />
      {/* Main */}
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
      </main>
      {/* Footer */}
    </div>
  );
};

export default Home;
