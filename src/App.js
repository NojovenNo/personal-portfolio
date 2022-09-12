import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarComp from "./componentes/NavbarComp.js";
import Banner from "./componentes/Banner";
function App() {
  return (
    <div className="App">
      <NavbarComp />
      <Banner />
    </div>
  );
}

export default App;
