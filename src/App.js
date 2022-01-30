import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import PatientHistory from "./pages/PatientHistory/PatientHistory";
import NewBorn from "./pages/NewBorn/NewBorn";

function App() {
  const [selectedPage, setSelectedPage] = useState("PatientHistory");

  return (
    <div className="App">
      <Navbar selectedPage={selectedPage} setSelectedPage={setSelectedPage} />

      {selectedPage === "PatientHistory" && <PatientHistory />}
      {selectedPage === "NewBorn" && <NewBorn />}
    </div>
  );
}

export default App;
