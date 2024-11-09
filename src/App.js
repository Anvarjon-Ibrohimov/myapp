import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Pricing from "./components/Pricing";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Skills />
      <About />
      <Pricing />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
