import "./App.css";
import Navbar from "./components/Navbar";
import CardContainer from "./components/CardContainer";
import Lists from "./components/Lists";
import UseState from "./components/UseState";

function App() {
  return (
    <>
      <Navbar btn="Click Here" />
      <CardContainer />
      <Lists />
      <UseState />
    </>
  );
}

export default App;
