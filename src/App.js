import { useState } from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import PatientHistory from "./pages/PatientHistory/PatientHistory";
import NewBorn from "./pages/NewBorn/NewBorn";
import Admission from "./pages/Addmission/Admission";
import Emergency from "./pages/Emergency/Emergency";
import Balance from "./pages/Balance/Balance";

function App() {
  const [selectedPage, setSelectedPage] = useState("PatientHistory");

  return (
    <Router>
      <Switch>
        <Route path="/balance">
          <Balance />
        </Route>
        <Route path="/">
          <div className="App">
            <Navbar
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            {selectedPage === "PatientHistory" && <PatientHistory />}
            {selectedPage === "NewBorn" && <NewBorn />}
            {selectedPage === "Admission" && <Admission />}
            {selectedPage === "emergency" && <Emergency />}
          </div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
