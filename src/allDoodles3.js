import React from "react";
import Doodle from "./doodle";

function AllDoodles3() {
  const arr = [];
  for (var i = 0.5; i <= 1; i = i + 0.1) {
    arr.push(i);
  }
  const arrH = [];
  for (var i = 10; i <= 360; i = i + 30) {
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
          background-size: 200px 200px;
          background-image: @doodle(
            @grid: 1 / 100%;
            background-color: #005874;
            background-image: @m8.@doodle(
              @grid: 1 / 50px;
              background: @p(#65d6ce,#1c819e,#e6e6d4,#ffbe00);
              transform: rotate(${elH + "deg"}) scale(${el});
              clip-path: @shape(
                split: 50;
                scale: .3;
                x: cos(t) + cos(2t) * 2;
                y: sin(2t) + sin(t) * 2;
              );
            );
            background-position:
              -25px 45px, 50px 75px, 90px 95px,
              160px 165px, 20px 0, 22px -65px,
              110px -18px, 120px 34px, 130px 125px,
              5px 90px;
          );
       `}
          />
        </div>
      );
    });
  });
}

export default AllDoodles3;
