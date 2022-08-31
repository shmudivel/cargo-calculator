import React, { useState } from "react";
import "../index.css";
import PipeVolume from "../components/PipeVolume";
import Volume from "../components/Volume";
import Footer from "../components/Footer";

function BoxAndPipe() {
  const [isPipeOrBox, setIsPipeOrBox] = useState(false);

  return (
    <div className="switch">
      <div className="container">
        <button
          className="btn-switch"
          onClick={() => {
            setIsPipeOrBox(!isPipeOrBox);
          }}
        >
          {isPipeOrBox ? "Box" : "Pipe"}
        </button>
        {isPipeOrBox ? <PipeVolume /> : <Volume />}
        <Footer />
      </div>
    </div>
  );
}

export default BoxAndPipe;
