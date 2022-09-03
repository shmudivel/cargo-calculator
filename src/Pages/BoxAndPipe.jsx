import React, { useState } from "react";
import "../index.css";
import PipeVolume from "../components/PipeVolume";
import Volume from "../components/Volume";
import Footer from "../components/Footer";
import { useTranslation } from "react-i18next";



function BoxAndPipe() {
  const [isPipeOrBox, setIsPipeOrBox] = useState(false);

    //Languages
    const { t, i18n } = useTranslation();
    const handleLngChange = (lng) => {
      i18n.changeLanguage(lng);
      localStorage.setItem("lng", lng);
    };


  return (
    <div className="switch">
      <div className="container">
        <button
          className="btn-switch"
          onClick={() => {
            setIsPipeOrBox(!isPipeOrBox);
          }}
        >
          {isPipeOrBox ? t("Box") : t("Pipe")}
        </button>
        <div className="lngButtonsDiv">
          <button className="lngButtons" onClick={() => handleLngChange("english")}>English</button>
          <button className="lngButtons" onClick={() => handleLngChange("russian")}>Русский</button>
          <button className="lngButtons" onClick={() => handleLngChange("chinese")}>中文</button>
        </div>
        {isPipeOrBox ? <PipeVolume /> : <Volume />}
        <Footer />
      </div>
    </div>
  );
}

export default BoxAndPipe;
