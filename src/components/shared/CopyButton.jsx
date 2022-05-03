import React from "react";
import { Button } from "@mui/material";
import copy from "copy-to-clipboard";

function CopyButton({ resultRef }) {
  const copyResult = () => {
    copy(resultRef.current.innerHTML, {
      format: "text/html",
    });
  };

  return (
    <Button
      onClick={copyResult}
      variant="contained"
      style={{ marginBottom: 32 }}
    >
      Copiar
    </Button>
  );
}

export default CopyButton;
