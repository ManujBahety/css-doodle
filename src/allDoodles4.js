import React from "react";
import Doodle from "./doodle";

function AllDoodles4() {
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
          <Doodle // random butterfly shape in line 218
            rule={`
            @grid: 1 / 460px;
            background-size: 300px 300px;
            background-color: #293D56; 
            background-image: @doodle(
            @grid: 16x1 / 100%;
            @place-cell: center;
            @size: 100%;
            background-image: @doodle(
                @grid: 1 / 80px;
                background: @p(#ff6f6f,#fff46e,#f6f6f6,#a58bff);
                transform: rotate(${elH + "deg"}) scale(${el});
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
        </div>
      );
    });
  });
}

export default AllDoodles4;
