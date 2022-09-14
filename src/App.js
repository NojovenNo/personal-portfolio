import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarComp from "./componentes/NavbarComp.js";
import Banner from "./componentes/Banner";
import AboutMe from "./componentes/AboutMe";
function App() {
  return (
    <div className="App">
      <NavbarComp />
      <Banner />
      <AboutMe />
    </div>
  );
}

export default App;
