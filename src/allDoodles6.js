import React, { useState } from "react";
import Doodle from "./doodle";
import "./allDoodles.css";

function AllDoodles6() {
  const [grids, setGrids] = useState(4);
  const [size, setSize] = useState(85);
  return (
    <div className="individual">
      <Doodle
        rule={`
          @grid:${grids}/460px;
          --s: @r(15%, ${size}%);
          --t: calc(100% - var(--s));
          background: @multi(2,
            linear-gradient(@p(#ED7B4E, #E3363A, #3B120E, #4CAABE), @lp())
          );
          background-color: #EDEED1;
          background-size: var(--s) var(--s), var(--t) var(--t);
          background-position: 0 0, 100% 100%;
          background-repeat: no-repeat;
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
            placeholder="size : (25-100)"
            onChange={(e) => setSize(e.target.value)}
          />
        </label>
        <h2>Click on the art to see variations</h2>
      </div>
    </div>
  );
}

export default AllDoodles6;
