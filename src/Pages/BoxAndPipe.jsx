import React, { useState } from "react";
import "../index.css";
import PipeVolume from "../components/PipeVolume";
import Volume from "../components/Volume";

function BoxAndPipe() {
  const [isSwitch, setIsSwitch] = useState(false);

  return (
    <div className="switch">
      <div className="container">
        <button className="btn-switch" onClick={() => setIsSwitch(!isSwitch)}>
          Switch
        </button>
        {isSwitch ? <Volume /> : <PipeVolume />}
      </div>
    </div>
  );
}

export default BoxAndPipe;
