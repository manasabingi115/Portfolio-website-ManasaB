import React from "react";
import "./App.css";
import Header from "./Header";
import HeroBanner from "./HeroBanner";
import About from "./About";
import ExperienceSkills from "./ExperienceSkills";
import Projects from "./Projects";
import ContactForm from "./Contact";
import Footer from "./Footer";
import TabValueContext from "./TabValueContext";

function App() {
  const [tabValue, setTabValue] = React.useState("experience");

  return (
    <>
      <TabValueContext.Provider value={{ tabValue, setTabValue }}>
        <Header />
      </TabValueContext.Provider>
      <div className="container">
        <HeroBanner />
        <About />
        <TabValueContext.Provider value={{ tabValue, setTabValue }}>
          <ExperienceSkills />
        </TabValueContext.Provider>
        <Projects />
        <ContactForm />
      </div>
      <Footer />
    </>
  );
}

export default App;
