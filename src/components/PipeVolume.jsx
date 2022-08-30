import React, { useState } from "react";
import "../index.css";

const PipeVolume = () => {
        // state
        const [diameterPipe, setDiameterPipe] = useState(0)
        const [lengthPipe, setLengthPipe] = useState(0)
        const [volumePipe, setVolumePipe] = useState(0)
    
        const [qtyVolumePipe, setQtyVolumePipe] = useState(0)
    
        let imgSrc = ''
    
    
        // calculations
        let calcVolumePipe = (event) => {
            event.preventDefault()
    
            if(diameterPipe === 0 || lengthPipe === 0 || qtyVolumePipe === 0) {
                alert('Please enter a valid parameters: Diameter, Length, Quantity')
            } else {
                let volumePipe = ((Math.PI * diameterPipe * diameterPipe / 4) * lengthPipe * qtyVolumePipe / 1000000)
                setVolumePipe(volumePipe.toFixed(4))
            }
        }
    
        let cleanAll = () => {
            window.location.reload()
        }
  return (
    <div >
        <div className="container">
            <h2 className="center">Pipe Volume Calculator</h2>
            <form onSubmit={calcVolumePipe}>
                <div>
                    <label>Diameter (cm)</label>
                    <input value={diameterPipe} onChange={(event) => setDiameterPipe(event.target.value)} type="number" />
                </div>
                <div>
                    <label>Length (cm)</label>
                    <input value={lengthPipe} onChange={(event) => setLengthPipe(event.target.value)} type="number" />
                </div>


                <div className="qtyOfBox">
                    <label> How many pipes? (Qty)</label>
                    <input value={qtyVolumePipe} onChange={(event) => setQtyVolumePipe(event.target.value)} type="number" />
                </div>

                <button className="btn" type="submit">Submit</button>
                <button className="btn btn-delete" onClick={cleanAll} type="delete">Delete</button>
            </form>

            <div className="center">
                <h3>TOTAL volume is: {volumePipe} mᶟ</h3>
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
