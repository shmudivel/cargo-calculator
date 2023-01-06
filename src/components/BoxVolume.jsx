import React, { useState, useEffect } from "react";
import "../index.css";
import { useTranslation } from "react-i18next";
import { BsBoxSeam } from "react-icons/bs";

const Volume = () => {
  //Languages
  const { t } = useTranslation();

  // state
  const [depthBox, setDepthBox] = useState("");
  const [lengthBox, setLengthBox] = useState("");
  const [heightBox, setHeightBox] = useState("");
  const [qtyVolumeBox, setQtyVolumeBox] = useState("");
  const [ratePriceBox, setRatePriceBox] = useState("");
  const [volumeBox, setVolumeBox] = useState("");
  const [totalPriceBox, setTotalPriceBox] = useState("");

  // calculations
  let calcVolume = (event) => {
    event.preventDefault();

    if (
      depthBox === 0 ||
      lengthBox === 0 ||
      heightBox === 0 ||
      qtyVolumeBox === 0 ||
      ratePriceBox === 0
    ) {
      alert(t("Please enter a valid parameters!"));
    } else {
      const volumeBox =
        (depthBox * lengthBox * heightBox * qtyVolumeBox) / 1000000;
      setVolumeBox(volumeBox.toFixed(4));

      const priceCalculation = volumeBox * ratePriceBox;
      setTotalPriceBox(priceCalculation.toFixed(2));
    }
  };

  useEffect(() => {
    const depthBox = localStorage.getItem("depthBox");
    const lengthBox = localStorage.getItem("lengthBox");
    const heightBox = localStorage.getItem("heightBox");
    const qtyVolumeBox = localStorage.getItem("qtyVolumeBox");
    const ratePriceBox = localStorage.getItem("ratePriceBox");

    if (depthBox) {
      setDepthBox(depthBox);
    }
    if (lengthBox) {
      setLengthBox(lengthBox);
    }
    if (heightBox) {
      setHeightBox(heightBox);
    }
    if (qtyVolumeBox) {
      setQtyVolumeBox(qtyVolumeBox);
    }
    if (ratePriceBox) {
      setRatePriceBox(ratePriceBox);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("depthBox", depthBox);
    localStorage.setItem("lengthBox", lengthBox);
    localStorage.setItem("heightBox", heightBox);
    localStorage.setItem("qtyVolumeBox", qtyVolumeBox);
    localStorage.setItem("ratePriceBox", ratePriceBox);
  }, [depthBox, lengthBox, heightBox, qtyVolumeBox, ratePriceBox]);

  let cleanAll = () => {
    window.location.reload();
    localStorage.clear();
  };

  return (
    <div>
      <div className="container">
        <h2 className="center">
          <BsBoxSeam size={50} />
          {t(" Box Volume Calculator ")}
          <BsBoxSeam size={50} />
        </h2>

        <form onSubmit={calcVolume}>
          <div>
            <label>{t("Depth (cm)")} </label>
            <input
              // placeholder={t("Depth (cm)")}
              value={depthBox}
              onChange={(event) => setDepthBox(event.target.value)}
              type="number"
            />
          </div>
          <div>
            <label>{t("Length (cm)")}</label>
            <input
              // placeholder={t("Length (cm)")}
              value={lengthBox}
              onChange={(event) => setLengthBox(event.target.value)}
              type="number"
            />
          </div>
          <div>
            <label>{t("Height (cm)")}</label>
            <input
              // placeholder={t("Height (cm)")}
              value={heightBox}
              onChange={(event) => setHeightBox(event.target.value)}
              type="number"
            />
          </div>

          <div className="qtyOfBox">
            <label> {t("How many boxes? (Qty)")}</label>
            <input
              // placeholder={t("How many boxes? (Qty)")}
              value={qtyVolumeBox}
              onChange={(event) => setQtyVolumeBox(event.target.value)}
              type="number"
            />
          </div>

          <div>
            <label>{t("Price per 1mᶟ")}</label>
            <input
              // placeholder={t("Price per 1mᶟ")}
              value={ratePriceBox}
              onChange={(event) => setRatePriceBox(event.target.value)}
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
          <h3>
            {t("TOTAL sum is: ")}
            {totalPriceBox} {t("")}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Volume;
