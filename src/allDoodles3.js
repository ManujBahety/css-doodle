import React, { useState } from "react";
import Doodle from "./doodle";

function AllDoodles3() {
  const [grids, setGrids] = useState(7);
  const [size, setSize] = useState(100);
  return (
    <div className="individual">
      <Doodle
        rule={`
        @grid : ${grids}/460px;
        background: @p(#FFF4E0, #F8B501, #06ACB5, #17191D, #FC3D3C);
      :after
      {
        content: '';
        @size: ${size}%;
        position: absolute;
        background:
          @m(4, radial-gradient(
            circle at @p(-40% -40%, 140% 140%, 140%  -40%, -40% 140%),
            @p(#FFF4E0, #F8B501, #06ACB5, #17191D, #FC3D3C) 50%,
            transparent 50%
          )),
          radial-gradient(
            @p(#FFF4E0, #F8B501, #06ACB5, #17191D, #FC3D3C) @r(10%, 40%),
            transparent 0
          )
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
          Enter Circle Size:
          <input
            className="inputField"
            type="text"
            inputMode="numeric"
            name="grid size"
            placeholder="size : (1-100)"
            onChange={(e) => setSize(e.target.value)}
          />
        </label>
        <h2>Click on the art to see variations</h2>
      </div>
    </div>
  );
}

export default AllDoodles3;
