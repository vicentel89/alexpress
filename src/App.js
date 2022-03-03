import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import PatientHistory from "./pages/PatientHistory/PatientHistory";
import NewBorn from "./pages/NewBorn/NewBorn";
import Admission from "./pages/Addmission/Admission";

function App() {
  const [selectedPage, setSelectedPage] = useState("PatientHistory");

  return (
    <div className="App">
      <Navbar selectedPage={selectedPage} setSelectedPage={setSelectedPage} />

      {selectedPage === "PatientHistory" && <PatientHistory />}
      {selectedPage === "NewBorn" && <NewBorn />}
      {selectedPage === "Admission" && <Admission />}
    </div>
  );
}

export default App;
