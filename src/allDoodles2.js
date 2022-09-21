import React, { useState } from "react";
import Doodle from "./doodle";
import "./allDoodles.css";

function AllDoodles2() {
  const [grids, setGrids] = useState(4);
  const [size, setSize] = useState(100);
  return (
    <div className="individual">
      <Doodle
        rule={`
          :doodle {
            @grid: ${grids} / 460px;
            background: #fff;
  
          }
  
          background: @p(#ffecbaaa, #ff8d68aa, #a10054aa, #001f52aa);
          transform: scale(.5) translate(-50%, -50%);
          margin: 2vmin;
  
          box-shadow:
            4.2vmin 4.2vmin 0 8vmin
            @pd(#bff4edaa, #280f34aa, #b30753aa, #f6c667aa);
  
          :after, :before {
            content: '';
            position: absolute;
            @size: ${size}%;
            transform-origin: 0 0;
          }
          :after {
            background: @p(#bff4ed, #280f34, #b30753, #f6c667);
            transform: translateX(100%) skewY(45deg);
          }
          :before {
            background: @p(#ffecba, #ff8d68, #a10054, #001f52);
            transform: translateY(100%) skewX(45deg);
          }
      `}
      />

      <div className="main-input">
        <label className="labelField">
          Enter Grid Size:
          <input
            className="inputField"
            type="text"
            inputMode="numeric"
            name="grid size"
            placeholder="min value : 2"
            onChange={(e) => setGrids(e.target.value)}
          />
        </label>
        <label className="labelField">
          Enter Block Size:
          <input
            className="inputField"
            type="text"
            inputMode="numeric"
            name="block size"
            placeholder="size : (1-100)"
            onChange={(e) => setSize(e.target.value)}
          />
        </label>
        <h2>Click on the art to see variations</h2>
      </div>
    </div>
  );
}

export default AllDoodles2;
