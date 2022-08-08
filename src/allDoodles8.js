import React from "react";
import Doodle from "./doodle";

function AllDoodles8() {
  const arr = [];
  for (var i = 0; i <= 100; i = i + 1) {
    arr.push(i);
  }
  return arr.map((el) => {
    return (
      <div>
        {el}
        <Doodle // random on basis of which shape will rotate how much (706)
          rule={`
          :doodle {
            @grid: 6 / 460px;
          }

          @shape: alien @rand(10) @rand(6) 6 4;

          will-change: clip-path, transform;
          transition: .2s ease @rand(500ms);
          transform: rotate(@rand(-180deg, 180deg));

          margin: 2px;
          background: hsl(
            calc(180 - 1.5 * @index()), 60%, 70%
          );
      `}
        />
      </div>
    );
  });
}

export default AllDoodles8;
