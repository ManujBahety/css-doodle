import React from "react";
import Doodle from "./doodle";

function AllDoodles6() {
  const arr = [];
  for (var i = -50; i <= 50; i = i + 1) {
    arr.push(i);
  }
  return arr.map((el) => {
    console.log(el);
    return (
      <div>
        {el}
        <Doodle
          rule={`
          :doodle {
            @grid: 8 / 460px;
            background-color: #9A5052;
            border-radius: 4px;
            color: rgba(255, 255, 255, .9);
            overflow: hidden;
          }
          transform: rotate(90deg);
          ::before {
            content: "(";
            position: absolute;
            top: 0;left: 0;width: 100%;height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 24px;
            font-weight: bold;
            transform: rotate(${
              el + "deg"
            }) translate(@m(2, (@r(-100%, 100%))));
          }
          ::after {
            content: ".";
            font-size: 24px;
            transform: rotate(@r(-5deg, 5deg)) translate(@m(2, (@r(-100%, 100%))));
          }
          @random {
            ::before {
              text-shadow: 0 @r(16px, 18px) 0;
            }
          }
      `}
        />
      </div>
    );
  });
}

export default AllDoodles6;
