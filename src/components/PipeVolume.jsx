import React, { useState } from "react";
import "../index.css";
import { useTranslation } from "react-i18next";

const PipeVolume = () => {
  //Languages
  const { t } = useTranslation();
  // const handleLngChange = (lng) => {
  //   i18n.changeLanguage(lng);
  //   localStorage.setItem("lng", lng);
  // };

  // state
  const [diameterPipe, setDiameterPipe] = useState(0);
  const [lengthPipe, setLengthPipe] = useState(0);
  const [qtyVolumePipe, setQtyVolumePipe] = useState(0);

  const [volumePipe, setVolumePipe] = useState(0);

  const [ratePricePipe, setRatePricePipe] = useState(0);
  const [totalPricePipe, setTotalPricePipe] = useState(0);

  let imgSrc = "";

  // calculations
  let calcVolumePipe = (event) => {
    event.preventDefault();

    if (
      diameterPipe === 0 ||
      lengthPipe === 0 ||
      qtyVolumePipe === 0 ||
      ratePricePipe === 0
    ) {
      alert(t("Please enter a valid parameters!"));
    } else {
      const volumePipe =
        (((Math.PI * diameterPipe * diameterPipe) / 4) *
          lengthPipe *
          qtyVolumePipe) /
        1000000;
      setVolumePipe(volumePipe.toFixed(4));

      const priceCalculationPipe = volumePipe * ratePricePipe;
      setTotalPricePipe(priceCalculationPipe.toFixed(2));
    }
  };

  let cleanAll = () => {
    window.location.reload();
  };

  return (
    <div>
      <div className="container">
        <h2 className="center">{t("Pipe Volume Calculator")}</h2>

        <form onSubmit={calcVolumePipe}>
          <div>
            <label>{t("Diameter (cm)")}</label>
            <input
              value={diameterPipe}
              onChange={(event) => setDiameterPipe(event.target.value)}
              type="number"
            />
          </div>
          <div>
            <label>{t("Length (cm)")}</label>
            <input
              value={lengthPipe}
              onChange={(event) => setLengthPipe(event.target.value)}
              type="number"
            />
          </div>

          <div className="qtyOfBox">
            <label>{t("How many pipes? (Qty)")}</label>
            <input
              value={qtyVolumePipe}
              onChange={(event) => setQtyVolumePipe(event.target.value)}
              type="number"
            />
          </div>

          <div className="qtyOfBox">
            <label>{t("Price per 1mᶟ")}</label>
            <input
              value={ratePricePipe}
              onChange={(event) => setRatePricePipe(event.target.value)}
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
            {volumePipe} {t("mᶟ")}
          </h3>
          {/* <p>{message}</p> */}
        </div>

        <div className="center">
          <h3>
            {t("TOTAL sum is: ")}
            {totalPricePipe} {t("")}
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

export default PipeVolume;
