import React from "react";
import Doodle from "./doodle";

function AllDoodles5() {
  const arr = [];
  for (var i = 10; i <= 50; i = i + 10) {
    arr.push(i);
  }
  const arrH = [];
  for (var i = 30; i <= 360; i = i + 30) {
    arrH.push(i);
  }
  return arrH.map((elH) => {
    return arr.map((el) => {
      return (
        <div>
          {elH + el}
          <Doodle
            rule={`
          @grid: 1 / 460px;
          background: @doodle(
            :doodle {
              @grid: / 10000px;
              transform: scale(1.5) rotate(45deg);
            }
            background-color: #213061;
            background-size: 150px 150px;
            background-image: @doodle(
              @grid: 10 / 100%;
              :after, :before {
                content: '';
                position: absolute;
                left: 50%; top: 50%;
                @size: @r(10%, 50%) 1px;
                transform: rotate(${elH + "deg"});
                transform-origin: 0 50%;
                background: currentColor;
                color: #fff9;
              }
            );
          );
        `}
          />
        </div>
      );
    });
  });
}

export default AllDoodles5;
