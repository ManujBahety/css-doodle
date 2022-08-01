import "./App.css";
import Doodle from "./doodle";

function App() {
  return (
    <div className="doodles">
      <Doodle
        rule={`
  :doodle {
    @grid: 5;
    @size: 40vmax;
  }
  background: hsla(@rand(360) , @r(100%), @r(60%,90%), @r(0.9));
  transform: scale(@rand(.2, .9));
  `}
      />

      <Doodle
        rule={`
        :doodle {
          @grid: 6 / 60vmax;
          background: pink;
        }
        @shape: clover 5;
        background: hsla(
          calc(360 - @i * 4), 70%, 68%, @r.8
        );
        transform:
          scale(@r(.2, 1.5))
          translate(@m2.@r(±50%));
`}
      />

      <Doodle
        rule={`
        :doodle {
          @grid: 7 / 15em;
          @shape: circle;
        }
        @even {
          @shape: hypocycloid 4;
          background: #60569e;
          transform: scale(2) rotate(-60deg);
        }
      `}
      />
      <Doodle
        rule={`
      :doodle {
        @grid: 18 / 50vmax;
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
      ));`}
      />
    </div>
  );
}

export default App;
