import Header from "./Header.jsx";
import DobraUm from "./dobras/DobraUm.jsx";
import DobraDois from "./dobras/DobraDois.jsx";
import DobraTres from "./dobras/DobraTres.jsx";
import DobraQuatro from "./dobras/DobraQuatro.jsx";
import "./App.css";
import "./Header.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./Footer.jsx";
import DobraCinco from "./dobras/DobraCinco.jsx";

function App() {
  return (
    <>
      <Header />
      <br></br>
      <DobraUm />
      <DobraDois />
      <br></br>
      <DobraTres />
      <DobraQuatro />

      <DobraCinco />
      <Footer />
    </>
  );
}

export default App;
