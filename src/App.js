import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Doodle from "./doodle";
import AllDoodles from "./allDoodles";
import AllDoodles2 from "./allDoodles2";
import AllDoodles3 from "./allDoodles3";
import AllDoodles4 from "./allDoodles4";
import AllDoodles5 from "./allDoodles5";
import AllDoodles6 from "./allDoodles6";
import AllDoodles7 from "./allDoodles7";
import AllDoodles8 from "./allDoodles8";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/all1" element={<AllDoodles />} />
        <Route path="/all2" element={<AllDoodles2 />} />
        <Route path="/all3" element={<AllDoodles3 />} />
        <Route path="/all4" element={<AllDoodles4 />} />
        <Route path="/all5" element={<AllDoodles5 />} />
        <Route path="/all6" element={<AllDoodles6 />} />
        <Route path="/all7" element={<AllDoodles7 />} />
        <Route path="/all8" element={<AllDoodles8 />} />
      </Routes>
      <div className="doodles">
        <Link to="/all1" target="_blank">
          <Doodle // randomisation can be done on the box colors and
            //the way they transform upon scale property in line 13
            rule={`
          :doodle {
            @grid: 5/460px;
          }
          background: hsla(@rand(360) , @r(100%), @r(60%,90%), @r(0.9));
          transform: scale(@rand(.2, .9));
        `}
          />
        </Link>
        <Doodle // Changes are done on the basis of polygon shapes that are picked in line 27
          rule={`
          :doodle {
            @grid: 18 / 460px;
            background: #0a0c27;
          }
          --hue: calc(180 + 1.5 * @row * @col);
          background: hsl(var(--hue), 50%, 70%);
          margin: -.5px;
          transition: @r(.5s) ease;
          clip-path: polygon(@pick(
            '0 0, 100% 0, 100% 100%',
            '0 0, 100% 0, 0 100%',
            '0 0, 100% 100%, 0 100%',
            '100% 0, 100% 100%, 0 100%'
          )
        );
      `}
        />

        <Link to="/all2" target="_blank">
          <Doodle // changes on the basis of line rotation of 45 deg in either direction
            rule={`
          @grid: 16 / 460px;
          @size: 1px calc(141.4% + 1px);
          transform: rotate(@p(+45deg,-45deg));
          background: #000;
          margin: auto;
      `}
          />
        </Link>

        <Doodle // 4 circles size and color is picked from set values in line 56
          rule={`
          @grid : 7/460px;
          background: @p(#FFF4E0, #F8B501, #06ACB5, #17191D, #FC3D3C);
        :after
        {
          content: '';
          @size: 100%;
          position: absolute;
          background:
            @m(4, radial-gradient(
              circle at @p(-40% -40%, 140% 140%, 140%  -40%, -40% 140%),
              @p(#FFF4E0, #F8B501, #06ACB5, #17191D, #FC3D3C) 50%,
              transparent 50%
            )),
            radial-gradient(
              @p(#FFF4E0, #F8B501, #06ACB5, #17191D, #FC3D3C) @r(10%, 40%),
              transparent 0
            )
        }
    `}
        />
        <Doodle
          rule={`
          :doodle {
            @grid : 7/460px;
            background-color: @p(#F8B501, #06ACB5, #FC3D3C);
          }
          transform: rotate(@pn(45deg, -45deg)) scale(.9);
          --c: @p(#FFF4E0, #F8B501, #06ACB5, #FC3D3C);
          background-repeat: space;
          background-position: center;
          background-color: #17191D;
          background-image: @m(4, radial-gradient(var(--c) 35%, transparent 0));
          background-size: @m(4, @pn(100% 40%, 40% 100%));

          @random(.5) {
            background-size: @m(4, @pn(25% 25%, 25% 25%));
          }
          @random(.4) {
            background-size: @m(4, @pn(100% 30%, 30% 100%));
          }
          @random(.3) {
            background-size: @m(4, @pn(100% 45%, 45% 100%));
          }
          @random(.2) {
            background-size: @m(4, @pn(60% 45%, 45% 60%));
          }
          @random(.2) {
            background-image: @m(4, (radial-gradient(var(--c) 50%, transparent 0)));
            background-size: @m(4, @pn(100% 60%, 60% 100%));
          }
          :after
          {
            content: '';
            position: absolute;
            left: @pn(auto, 105%);
            top: @pn(105%, auto);
            @size: 50%;
            background-image: radial-gradient(
              @p(#17191D, #FFF4E0) @r(20%, 60%), transparent 0
            );
          }
      `}
        />

        <Doodle // randomisation on basis of linear gradients picked from 6 diff values in line 117
          rule={`
          @grid : 6/460px;
          --p: @pn(0 100%, 0 0, 100% 100%, 100% 0);
          background:
            @multi(6, (
              linear-gradient(@p(#4CAABE, #EDEED1, #ED7B4E, #3B120E, #E3363A), @lp())
                var(--p) / @pn(20%, 40%, 60%, 80%, 100%) @lp() no-repeat
            ))
        `}
        />
        <Doodle // randomisation on basis of rtation of Y and X axis which is picked from 2 values
          rule={`
          @grid : 7/460px;
          background: @multi(5, linear-gradient(
            -135deg,
            @p(#ED7B4E, #E3363A, #3B120E, #4CAABE) 50%,
            #EDEED1 50%
          ));
          background-size: 25% 25%, 25% 25%, 25% 25%, 50% 50%, 100% 100%;
          background-position: 66.66% 100%, 0 33.33%, 0 100%, 0 100%, 100% 0;
          background-repeat: no-repeat;
          transform: rotateY(@p(180deg, 0deg)) rotateX(@p(180deg, 0deg));
        `}
        />
        <Doodle // position is picked from 4 values in line 145
          rule={`
          @grid: 8/460px;
          background: @multi(2, (
            linear-gradient(
              @p(45deg, -45deg),
              @multi(2, @p(#E3363A, #3B120E, #4CAABE, #ED7B4E, #EDEED1) 50%)
            )
              @p(100% 100%, 0 100%, 100%, 0 0) /
              calc(@n() * 100% / 2) calc(@n() * 100% / 2) no-repeat
          ))
        `}
        />
        <Doodle //randomisation in line 169
          rule={`
          @grid: 1 / 460px;
          background-color: #fff;
          background-image: @doodle(
            @grid: 1 / 100%;
            background-size:  125px 125px;
            background-image: @doodle(
              :doodle {
                @grid: 3 / 100%;
                transform: scale(calc(3 / 2));
              }
              z-index: @ri(100);
              :after, :before {
                content: '';
                @size: 100%;
                border-radius: 50%;
                position: absolute;
                background: radial-gradient(
                  @stripe.@m8.@pn(#F7D006, #52514F)
                );
              }
              :before {
                transform: translate(50%, 50%);
              }
            );
          );
      `}
        />

        <Link to="/all3" target="_blank">
          <Doodle // randomisation could be done in line 189,190
            rule={`
          @grid: 1 / 460px;
          background-size: 200px 200px;
          background-image: @doodle(
            @grid: 1 / 100%;
            background-color: #005874;
            background-image: @m8.@doodle(
              @grid: 1 / 50px;
              background: @p(#65d6ce,#1c819e,#e6e6d4,#ffbe00);
              transform: rotate(@r(360deg)) scale(@r(.5, 1));
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
        </Link>

        <Link to="/all4" target="_blank">
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
        transform: rotate(@r(360deg)) scale(@r(.5, 1));
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
        </Link>
        <Doodle // diff colors combination picked from a set of values
          rule={`
          @grid : 1x5;
          background-image: repeating-linear-gradient(
            @multi(@size(), (
              @pd(#ED7B4E, #E3363A, #3B120E, #EDEED1, #4CAABE)
                calc((@n() - 1) * 100% / @size()),
              @lp()
                calc(@n() * 100% / @size())
            ))
          );
      `}
        />

        <Doodle //random completely
          rule={`
          @grid : 8/460px ;
          will-change: transform;
          background: linear-gradient(
            @p(#ED7B4E, #E3363A, #3B120E, #4CAABE) 50%,
            #EDEED1 50%
          ) 0 0 / 100% @r(10%, 100%);
      `}
        />
        <Doodle // randomised variables s and t in line 272,273
          rule={`
          @grid:6/460px;
          --s: @r(15%, 85%);
          --t: calc(100% - var(--s));
          background: @multi(2,
            linear-gradient(@p(#ED7B4E, #E3363A, #3B120E, #4CAABE), @lp())
          );
          background-color: #EDEED1;
          background-size: var(--s) var(--s), var(--t) var(--t);
          background-position: 0 0, 100% 100%;
          background-repeat: no-repeat;
        `}
        />

        <Doodle //randomisation in postition in line 293
          rule={`
          @grid: 8/460px;
          background: @multi(2, (
            linear-gradient(
              @p(45deg, -45deg),
              @multi(2, @p(#E3363A, #3B120E, #4CAABE, #ED7B4E, #EDEED1) 50%)
            )
              @p(100% 100%, 0 100%, 100%, 0 0) /
              calc(@n() * 100% / 2) calc(@n() * 100% / 2) no-repeat
          ))
        `}
        />

        <Doodle //random completely
          rule={`
          @grid: 14/460px;
          background: linear-gradient(45deg,
            @multi(2, @p(#ED7B4E, #E3363A, #3B120E, #4CAABE, #EDEED1) 50%)
          );
          mix-blend-mode: @p(color-burn, screen);
          margin: -25%;
      `}
        />

        <Doodle // random on basis of arc colors in line 328
          rule={`
          @grid: 1 / 460px;
          background-color: #fff;
          background-image: @doodle(
            @grid: 1 / 100%;
            background-size:  180px 180px;
            background-image: @doodle(
              :doodle {
                @grid: 3 / 100%;
                transform: scale(calc(3 / 2));
              }
              z-index: @ri(100);
              :after, :before {
                content: '';
                @size: 100%;
                border-radius: 50%;
                position: absolute;
                background: radial-gradient(
                  @stripe.@m9.@pn(#654062, #fff, transparent)
                );
              }
              :before {
                transform: translateX(50%) translateY(50%);
              }
            );
          );
      `}
        />

        <Doodle // random on basis of color combinations in line 358 and rotation in 359 and grid size in 356
          rule={`
          @grid: 1 / 460px;
          background: @doodle(
            :doodle {
              @grid: 1 / 10000px;
              transform: scale(1.5) rotate(45deg);
            }
            background-size: 150px 150px;
            background-color: #1d3557;
            background-image: @doodle(
              @grid: 4 / 100%;
              :after {
                content: '';
                @size: 100%;
                position: absolute;
                background: @doodle(
                  @grid: @p([1-4]) / 100%;
                  @shape: triangle;
                  background: @p(#e63946, #f1faee, #a8dadc, #457b9d);
                  transform: rotate(@p(0, 180deg)) scale(.8);
                );
              }
            );
          );
      `}
        />

        <Doodle //random mostly; random on basis of grid size in line 380,382 and color in 384
          rule={`
          @grid: 1 / 460px;
          background-color: #211a4c;
          background-image: @doodle(
            :doodle {
              @grid: 1 / 10000px;
              transform: scale(1.5) rotate(45deg);
            }
            background-size: 300px 300px;
            background-image: @doodle(
              @grid: 1 / 100%;
              background: @doodle(
                @grid: @r(8) / 100%;
                background: @doodle(
                  @grid: @r(10) / 100%;
                  background: radial-gradient(
                    @stripe.@m2.@p(
                      @m10(#293462),
                      @m10(#211a4c),
                      @m2(#b2ebf2),
                      #e84a5f
                    )
                  );
                );
              );
            );
          );
        `}
        />
        <Link to="/all5" target="_blank">
          <Doodle //random on basis of shape size and its rotation
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
                transform: rotate(@r(360deg));
                transform-origin: 0 50%;
                background: currentColor;
                color: #fff9;
              }
            );
          );
        `}
          />
        </Link>

        <Doodle // random on basis of double line colors and its alignment in line 433,34 and 441,42 and size in line 439
          rule={`
        :doodle {
          @grid: 9 / 460px;
          background: #fff;
        }

        border-style: double;
        border-color: @p(#FFECBA, #FF8D68, #A00154, #001E52);
        border-width: @p(2vmin 0 0 0, 0 2vmin 0 0, 0 0 2vmin 0, 0 0 0 2vmin );

        :after {
          content: '';
          position: absolute;
          @size: @p(50%,100%);
          border-style: double;
          border-color: @p(#FFECBA, #FF8D68, #A00154, #001E52);
          border-width: @pd(2vmin 0 0 0, 0 2vmin 0 0, 0 0 2vmin 0, 0 0 0 2vmin);
        }
      `}
        />
        <Link to="/all6" target="_blank">
          <Doodle //random in basis of shadow(473) ,and rotation (466,471)
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
            transform: rotate(5deg) translate(@m(2, (@r(-100%, 100%))));
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
        </Link>

        <Doodle // random on basis of which block will rotate and by how much deg theyll rotate (490,493)
          rule={`
          :doodle {
            @grid: 5x5 / 460px;
            background-color: #6e85a1;
            border-radius: 4px;
          }
          transition: .5s ease all;
          @even {
            transform: rotate(@p(90deg, 270deg));
          }
          @odd {
            transform: rotate(@p(0deg, 180deg));
          }
          ::before,
          ::after {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-image: @m(2, linear-gradient(
              calc(90deg * @n()),
              transparent 10%,
              #fff 10%,
              #fff calc(10% + 2px),
              #6e85a1 calc(10% + 2px),
              #6e85a1 20%,
              #fff 20%,
              #fff calc(20% + 2px),
              #6e85a1 calc(20% + 2px),
              #6e85a1 30%,
              #fff 30%,
              #fff calc(30% + 2px),
              #6e85a1 calc(30% + 2px),
              #6e85a1 40%,
              #fff 40%,
              #fff calc(40% + 2px),
              transparent calc(40% + 2px)
            ));
            clip-path: polygon(0 0, 100% 0 ,0 100%);
          }
          ::after {
            transform: rotate(180deg);
          }
      `}
        />

        <Doodle // random on basis of colors of 4 shapes (539,545,554,558)
          rule={`
        :doodle {
          @grid: 4 / 460px;
          background: #fff;

        }

        background: @p(#ffecbaaa, #ff8d68aa, #a10054aa, #001f52aa);
        transform: scale(.5) translate(-50%, -50%);
        margin: 2vmin;

        box-shadow:
          4.2vmin 4.2vmin 0 8vmin
          @pd(#bff4edaa, #280f34aa, #b30753aa, #f6c667aa);

        :after, :before {
          content: '';
          position: absolute;
          @size: 100%;
          transform-origin: 0 0;
        }
        :after {
          background: @p(#bff4ed, #280f34, #b30753, #f6c667);
          transform: translateX(100%) skewY(45deg);
        }
        :before {
          background: @p(#ffecba, #ff8d68, #a10054, #001f52);
          transform: translateY(100%) skewX(45deg);
        }
      `}
        />

        <Doodle //random on the basis of 12 colors of phone (574)
          rule={`
        --time: 4s;
        --delay: calc(-1 * @index() * var(--time) / 20);

        :doodle{
          @grid: 12x1 / 460px;
        }
        @place-cell:center;
        @size: 100px, 30px;
        background-color: @pick(#34a5d4,#00c7b4,#81e567,#d7f500,#ffff42,#ffe26a,#f99d78,#f79fb7, #fc71c4,#ff009b,#c672c2,#af8afe);
        @keyframes rotate {
          0%,
          33% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
        animation: rotate var(--time) infinite ease-in var(--delay);

        border-radius: 3px 8px 8px 3px;
        border: 2px solid #444;
        transform-origin: right center;
        z-index: calc(@index() + 2);
        :after {
          content: '';
          @size: 40%, 100%;
          position: absolute;
          bottom: 0;
          right: 0;
          background-color: #fff;
          border-left: 2px solid #444;
          border-radius: 0px 6px 6px 0px;
          background-image: linear-gradient(to right, #cbcccc, #cbcccc),linear-gradient(to right, #cbcccc, #cbcccc);
          background-repeat: no-repeat;
          background-position: 5px center, 12px 8px;
          background-size: 4px 20px, 2px 15px;
        }
      `}
        />

        <Doodle //random on basis of which circle will rotate by how much deg (629)
          rule={`
          @shape: circle;
          :after {
          content: "";
          @size: 2vmax;
          border: solid 1.5vmax #21295C;
          border-radius: 100%;
          transform: translate(0,-0.5em);
          }
        :before {
          content: "";
          @size: .01vmax;
          border: solid 1.5vmax rgba(158, 179, 194, .7);
          border-radius: 100%;
          position: absolute;
          transform: translate(0,-0.5em);
        }
        :doodle {
          @grid: 15 / 460px;
          background: #21295C;
        }
        transform: rotate(@rand(360)deg);
        background: @pick(#1B3B6F, #065A82);
        transition: .2s @rand(.6s);
        @size: 80%;
        margin: auto;
        :hover{
          transform: rotate(@rand(360)deg);
          transition: .2s;
        }
      `}
        />

        <Doodle //either clockwise or anticlockwise
          rule={`
        :doodle {
          @grid: 15 / 460px;
          @shape: circle;
        }

        border-radius: 50%;
        border: calc(1px + .05vmin)
          solid transparent;

        --r: @rand(360deg);
        --n: calc(
            @abs(@abs(@row() - 8)
          + @abs(@col() - 8) - 15) / 15
        );

        transform: rotate(var(--r));
        border-left-color: hsl(
          calc(var(--n) * 360 + 120), 60%, 60%
        );

        animation:
          spin calc(.6s / var(--n)) linear infinite;

        @keyframes spin {
          to {
            transform: rotate(
              calc(var(--r) + @pick(1turn, -1turn))
            );
          }
        }
      `}
        />
        <Link to="/all7" target="_blank">
          <Doodle // random on basis of which shape will rotate how much (687)
            rule={`
          :doodle {
            @grid: 6 / 460px;
          }

          @shape: alien
            @calc(@row() + 1) @calc(@col() + 1);

          transition: .2s ease @rand(500ms);
          will-change: clip-path, transform;
          transform: rotate(@rand(-180deg, 180deg));

          margin: 2px;
          background: hsl(
            calc(1.5 * @row() * @col()), 60%, 70%
          );
      `}
          />
        </Link>
        <Link to="/all8" target="_blank">
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
        </Link>
      </div>
    </Router>
  );
}

export default App;
