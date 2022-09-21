import React, { useState } from "react";
import Doodle from "./doodle";
import "./allDoodles.css";

function AllDoodles5() {
  const [grids, setGrids] = useState(1); // rotate
  return (
    <div className="individual">
      <Doodle
        rule={`
            @grid : ${grids}x5/ 460px;
            background-image:
             repeating-linear-gradient(
              @multi(@size(), (
                @pd(#ED7B4E, #E3363A, #3B120E, #EDEED1, #4CAABE)
                  calc((@n() - 1) * 100% / @size()),
                @lp()
                  calc(@n() * 100% / @size())
              ))
            );
            
        `}
      />
      <label className="labelField">
        Enter Grid Size:
        <input
          className="inputField"
          type="text"
          inputMode="numeric"
          name="grid size"
          placeholder="min value - 2"
          onChange={(e) => setGrids(e.target.value)}
        />
        Click on the art to see variations
      </label>
    </div>
  );
}

export default AllDoodles5;
