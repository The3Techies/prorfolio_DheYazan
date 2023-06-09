import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import MySkills from "./components/MySkills";
import Projects from "./components/Projects/Projects";
import ContactMe from "./components/ContactMe";
import Footer from "./components/Footer";
import Abo from "./components/Abo";

function App() {
  return (
    <div className="w-screen">
      <Header />
      <AboutMe />
      <MySkills />
      <Projects />
      <ContactMe />
      <Footer />
      <Abo/>
    </div>
  );
}

export default App;
