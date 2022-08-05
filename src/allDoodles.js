import React from "react";
import Doodle from "./doodle";

function AllDoodles() {
  const arrL = [];
  const arrH = [];
  const arrA = [];
  const arrS = [];
  for (var i = 20; i < 23; i++) {
    arrL.push(i);
  }
  for (var i = 10; i <= 100; i += 40) {
    // range it to 360
    arrH.push(i);
  }
  for (var i = 0.5; i <= 0.9; i += 0.1) {
    arrA.push(i);
  }

  for (var i = 10; i <= 100; i = i + 10) {
    arrS.push(i);
  }

  return arrH.map((elH) => {
    return arrS.map((elS) => {
      return arrL.map((elL) => {
        return arrA.map((elA) => {
          console.log(elH, elS, elL, elA);
          return (
            <div key={elH}>
              {elH}
              <Doodle
                rule={`
            :doodle {
              @grid: 5/460px;
            }
            background: hsla(${elH} , ${elS + "%"}
             , ${elL + "%"}, ${elA / 10});
            transform: scale(.5);
          `}
              />
            </div>
          );
        });
      });
    });
  });
}

export default AllDoodles;
