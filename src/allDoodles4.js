import React, { useState } from "react";
import Doodle from "./doodle";
import "./allDoodles.css";

function AllDoodles4() {
  const [grids, setGrids] = useState(1);
  return (
    <div className="individual">
      <Doodle // random butterfly shape in line 218
        rule={`
        @grid: ${grids}/ 460px;
        background-size: 300px 300px;
        background-color: #293D56; 
        background-image: @doodle(
          @grid: 16x1 / 100%;
          @place-cell: center;
          @size: 100%;
          background-image: @doodle(
            @grid: 1 / 80px;
            background: @p(#ff6f6f,#fff46e,#f6f6f6,#a58bff);
            transform: rotate(@r(360deg)) scale(@r(.5, 1));
            clip-path: @shape(
              split: 240;
              y: sin(2t) * sin(4t) * cos(5t);
              x: cos(2t) * cos(5t) * sin(t); 
            );
          );
          background-position: @pn(
            -5px 10px, 65px 25px, 80px 90px, 110px -40px, -40px 120px,
            40px 240px, 90px 180px, 150px 190px, 160px 40px, 220px 60px,
            240px 240px, 210px 160px, 20px 150px,  160px 100px
          );
          z-index: 2;
          @nth(15, 16) {
            z-index: 1;
            background: @m90(
              radial-gradient(
                @p(#ff6f6f,#fff46e,#f6f6f6,#a58bff) @r(50%), 
                transparent 0
              ) 
              @r(100%) @r(100%) / @r(10px) @lr 
              no-repeat
            );
          }
        );
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

export default AllDoodles4;
