import "./App.css";
import Navbar from "./components/Navbar";
import CardContainer from "./components/CardContainer";
import Lists from "./components/Lists";

function App() {
  return (
    <>
      <Navbar btn="Click Here" />
      <CardContainer />
      <Lists />
    </>
  );
}

export default App;
