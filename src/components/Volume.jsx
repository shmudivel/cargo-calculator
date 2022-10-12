import React, { useState } from "react";
import "../index.css";
import { useTranslation } from "react-i18next";

const Volume = () => {
  //Languages
  const { t } = useTranslation();
  // const handleLngChange = (lng) => {
  //   i18n.changeLanguage(lng);
  //   localStorage.setItem("lng", lng);
  // };

  // state
  const [depthBox, setdepthBox] = useState(0);
  const [lengthBox, setlengthBox] = useState(0);
  const [heightBox, setheightBox] = useState(0);
  const [volumeBox, setvolumeBox] = useState(0);

  const [qtyVolumeBox, setQtyVolumeBox] = useState(0);

  let imgSrc = "";

  // calculations
  let calcVolume = (event) => {
    event.preventDefault();

    if (
      depthBox === 0 ||
      lengthBox === 0 ||
      heightBox === 0 ||
      qtyVolumeBox === 0
    ) {
      alert(t("Please enter a valid parameters!"));
    } else {
      let volumeBox =
        (depthBox * lengthBox * heightBox * qtyVolumeBox) / 1000000;
      setvolumeBox(volumeBox.toFixed(4));
    }
  };

  let cleanAll = () => {
    window.location.reload();
  };

  return (
    <div>
      <div className="container">
        <h2 className="center">{t("Box Volume Calculator")}</h2>



        <form onSubmit={calcVolume}>
          <div>
            <label>{t("Depth (cm)")} </label>
            <input
              value={depthBox}
              onChange={(event) => setdepthBox(event.target.value)}
              type="number"
            />
          </div>
          <div>
            <label>{t("Length (cm)")}</label>
            <input
              value={lengthBox}
              onChange={(event) => setlengthBox(event.target.value)}
              type="number"
            />
          </div>
          <div>
            <label>{t("Height (cm)")}</label>
            <input
              value={heightBox}
              onChange={(event) => setheightBox(event.target.value)}
              type="number"
            />
          </div>

          <div className="qtyOfBox">
            <label> {t("How many boxes? (Qty)")}</label>
            <input
              value={qtyVolumeBox}
              onChange={(event) => setQtyVolumeBox(event.target.value)}
              type="number"
            />
          </div>

          <button className="btn" type="submit">
            {t("Calculate")}
          </button>
          <button className="btn btn-delete" onClick={cleanAll} type="delete">
            {t("Reset")}
          </button>
        </form>

        <div className="center">
          <h3>
            {t("TOTAL volume is: ")}
            {volumeBox} {t("mᶟ")}
          </h3>
          {/* <p>{message}</p> */}
        </div>

        <div className="img-container">
          <img src={imgSrc} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Volume;
