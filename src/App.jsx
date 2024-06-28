import "./App.css";
import Header from "./Header";
import HeroBanner from "./HeroBanner";
import About from "./About";
import ExperienceSkills from "./ExperienceSkills";
import Projects from "./Projects";
import ContactForm from "./Contact";
import Footer from "./Footer";

function App() {
  return (
    <div>
      <Header />
      <div className="container">
        <HeroBanner />
        <About />
        <ExperienceSkills />
        <Projects />
        <ContactForm />
      </div>
      <Footer />
    </div>
  );
}

export default App;
