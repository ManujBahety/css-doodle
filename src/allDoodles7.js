import React from "react";
import Doodle from "./doodle";

function AllDoodles7() {
  const arr = [];
  for (var i = -180; i <= 180; i = i + 2) {
    arr.push(i);
  }
  return arr.map((el) => {
    return (
      <div>
        {el}
        <Doodle
          rule={`
          :doodle {
            @grid: 6 / 460px;
          }

          @shape: alien
            @calc(@row() + 1) @calc(@col() + 1);

          transition: .2s ease @rand(500ms);
          will-change: clip-path, transform;
          transform: rotate(${el + "deg"});

          margin: 2px;
          background: hsl(
            calc(1.5 * @row() * @col()), 60%, 70%
          );
      `}
        />
      </div>
    );
  });
}

export default AllDoodles7;
