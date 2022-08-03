import React from "react";
import Doodle from "./doodle";

function AllDoodles() {
  const arrL = [];
  const arrH = [...Array(10).keys()];
  const arrS = [...Array(5).keys()];
  for (var i = 6; i < 9; i++) {
    arrL.push(i);
  }
  const arrA = [...Array(2).keys()];

  console.log("in allDoodles");
  return arrH.map((elH) => {
    // console.log(elH);
    return arrS.map((elS) => {
      // console.log("elS=", elS);
      return arrL.map((elL) => {
        //console.log("elL=", elL);
        return arrA.map((elA) => {
          //   console.log("elA=", elA);
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
