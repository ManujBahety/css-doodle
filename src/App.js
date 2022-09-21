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
import AllDoodles9 from "./allDoodles9";

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
        <Route path="/all9" element={<AllDoodles9 />} />
      </Routes>

      <div className="doodles">
        <Link to="/all1" target="_blank">
          <Doodle // randomisation can be done on the box colors and
            //the way they transform upon scale property in line 13
            rule={`
          :doodle {
            @grid: 4/460px;
          }
          background: hsla(@rand(360) , @r(100%), @r(60%,90%), @r(0.9));
          transform: scale(@rand(.2, .9));
        `}
          />
        </Link>
        <Link to="/all2" target="_blank">
          <Doodle // random on basis of colors of 4 shapes (539,545,554,558)
            rule={`
        :doodle {
          @grid: 5 / 460px;
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
        </Link>

        <Link to="/all3" target="_blank">
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

        <Link to="/all5" target="_blank">
          <Doodle // diff colors combination picked from a set of values
            rule={`
          @grid : 1x5/460px;
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
        </Link>

        <Link to="/all6" target="_blank">
          <Doodle // randomised variables s and t in line 272,273
            rule={`
          @grid:3/460px;
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
        </Link>
      </div>
    </Router>
  );
}

export default App;
