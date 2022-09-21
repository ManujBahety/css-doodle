import React, { useState } from "react";
import Doodle from "./doodle";
import "./allDoodles.css";
import { NumberInput } from "@mantine/core";

function AllDoodles() {
  const [grids, setGrids] = useState(4); // ADD SIZE
  const [size, setSize] = useState(0.9);
  return (
    <div className="individual">
      <Doodle
        rule={`
      :doodle {
        @grid: ${grids}/460px;
      }
      background: hsla(@rand(360) , @r(100%), @r(60%,90%), @r(0.9));
      transform: scale(@rand(.2, ${size}));
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
            placeholder="size : (2-10)"
            onChange={(e) => setSize(e.target.value / 10)}
          />
        </label>
        <h2>Click on the art to see variations</h2>
      </div>
    </div>
  );
}

export default AllDoodles;
