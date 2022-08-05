import React from "react";
import Doodle from "./doodle";

function AllDoodles2() {
  const arrH = [...Array(100).keys()];
  return arrH.map((elH) => {
    return (
      <div key={elH}>
        {elH}
        <Doodle
          rule={`
          @grid: 16 / 460px;
          @size: 1px calc(141.4% + 1px);
          transform: rotate(@p(+45deg,-45deg));
          background: #000;
          margin: auto;
      `}
        />
      </div>
    );
  });
}

export default AllDoodles2;
