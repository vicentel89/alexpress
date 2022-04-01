import React, { useState } from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";

function Navbar({ selectedPage, setSelectedPage }) {
  //Paginas
  const handleClick = (page) => () => {
    setSelectedPage(page);
  };

  //Corazon
  const [hovered, setHovered] = useState(false);
  const handleMouseEnter = () => {
    setHovered(true);
  };
  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <>
      <div className="navbar-container">
        <ButtonGroup variant="outlined">
          <Button
            variant={
              selectedPage === "PatientHistory" ? "contained" : "outlined"
            }
            onClick={handleClick("PatientHistory")}
          >
            Evolucion
          </Button>
          <Button
            variant={selectedPage === "NewBorn" ? "contained" : "outlined"}
            onClick={handleClick("NewBorn")}
          >
            Atencion
          </Button>
          <Button
            variant={selectedPage === "Admission" ? "contained" : "outlined"}
            onClick={handleClick("Admission")}
          >
            Ingreso
          </Button>
          <Button
            variant={selectedPage === "emergency" ? "contained" : "outlined"}
            onClick={handleClick("emergency")}
          >
            Emergencia
          </Button>
        </ButtonGroup>
        <div
          className="heart"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {hovered ? <p>TE AMO❤︎</p> : <p>❤︎</p>}
        </div>
      </div>

      <hr />
    </>
  );
}

export default Navbar;
