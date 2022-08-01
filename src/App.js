import "./App.css";
import Doodle from "./doodle";

function App() {
  return (
    <div className="doodles">
      <Doodle
        rule={`
          :doodle {
            @grid: 5/460px;
            
          }
          background: hsla(@rand(360) , @r(100%), @r(60%,90%), @r(0.9));
          transform: scale(@rand(.2, .9));
        `}
      />

      <Doodle
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
      <Doodle
        rule={`
          @grid: 16 / 460px; 
          @size: 1px calc(141.4% + 1px);
          transform: rotate(@p(±45deg));
          background: #000;
          margin: auto;
      `}
      />

      <Doodle
        rule={`
          @grid : 6/460px;
          overflow: hidden;
          :after 
          {
            content: '';
            position: absolute;
            @size: 200%;
            --pos: @pn(0 100%, 100% 0, 100% 100%, 0 0);
            background:
              repeating-radial-gradient(
                circle at var(--pos),
                transparent 0,
                transparent @r(5%, 8%),
                @p(#FFF4E0, #F8B501, #06ACB5, #FC3D3C) @lr(),
                @lp() calc(@lr() + 1px)
              ),
              @m(5, (
                radial-gradient(
                  @pn(#F8B501, #FC3D3C, #06ACB5, #FFF4E0, #17191D) 50%,
                  transparent 0
                )
                var(--pos) / calc(@n() * 20%) calc(@n() * 20%) no-repeat
              )
            );
          }
      `}
      />

      <Doodle
        rule={`
          @grid: 7/460px;
          overflow: hidden;
          --pos: @pn(100% 50%, 0 50%);
          :after 
          {
            content: '';
            position: absolute;
            @size: 1800% 600%;
            background: @m(50, (
              radial-gradient(
                ellipse 80% 32%,
                @pn(#FFF4E0, #06ACB5, #17191D, #FC3D3C, #F8B501) 45%,
                transparent 0
              )
              var(--pos) / calc(@n() * 2%) calc(@n() * 2%)
              no-repeat
            ));
          }
      `}
      />

      <Doodle
        rule={`
          @grid : 7/460px;
          overflow: hidden;
          :after 
          {
            content: '';
            position: absolute;
            @size: 900% 1022%;
            --pos: @pn(100% 50%, 0 50%);
            background: @multi(50, (
              radial-gradient(
                ellipse 100% 40%,
                @pn(#F8B501, #FC3D3C, #17191D, #06ACB5, #FFF4E0) 50%,
                transparent 0%
              )
              var(--pos) / calc(@n() * 2%) calc(@n() * 2%) no-repeat
            ));
          }
          @row(even) {
            :after {
              background: @multi(50, (
                radial-gradient(
                  ellipse 100% 40%,
                  @pn(#17191D, #FC3D3C, #F8B501, #FFF4E0, #06ACB5) 50%,
                  transparent 0
                )
                var(--pos) / calc(@n() * 2%) calc(@n() * 2%) no-repeat
              ));
            }
          }
      `}
      />

      <Doodle
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

      <Doodle
        rule={`
          @grid: 1 / 460px;
          background: @doodle(
            @grid: 1 / 100%;
            background-color: #f5f8ff;
            background-size:  160px 160px;
            background-image: @doodle(
              :doodle {
                @grid: 3 / 100%;
                transform: scale(calc(3 / 2));
              }
              :after, :before {
                content: '';
                @size: 100%;
                border-radius: 50%;
                position: absolute;
                border: 3px double #4169E1;
                background: @doodle(
                  @grid: 1 / 100%;
                  @shape: clover 4;
                  background: #4169E1;
                );
                background-size: 45% 45%;
                background-repeat: no-repeat;
                background-position: 50% 52%;
              }
              :before {
                transform: translate(50%, 50%);
              }
            );
          );
      `}
      />
      <Doodle
        rule={`
          @grid: 1 / 460px;
          background: @doodle(
            :doodle {
              @grid: 1 / 10000px;
              transform: rotate(45deg) scale(2);
            }
            background-size: 30px 30px;
            background-image: @doodle(
              @grid: 5x1 / calc(100% + 1px);
              @place-cell: center;
              @size: calc(100% - 100% / @I * (@i - 1));
              border-radius: calc(100% / @I * (@i - 1));
              border: 1px solid #003049;
              background: @pn(
                #d62828, #f77f00, #fcbf49, #eae2b7
              );
            );
          );
      `}
      />

      <Doodle
        rule={`
          @grid : 8/460px;
          --p: @pn(0 100%, 0 0, 100% 100%, 100% 0);
          background:
            @multi(5, (
              linear-gradient(@p(#4CAABE, #EDEED1, #ED7B4E, #3B120E, #E3363A), @lp()) 
                var(--p) / @pn(20%, 40%, 60%, 80%, 100%) @lp() no-repeat
            ))
        `}
      />

      <Doodle
        rule={`
          @grid : 8/460px;
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

      <Doodle
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

      <Doodle
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

      <Doodle
        rule={`
          @grid: 1 / 460px;
          background-size: 200px 200px;
          background-image: @doodle(
            @grid: 1 / 100%;
            background-color: #005874;
            background-image: @m10.@doodle(
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

      <Doodle
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
      `}
      />
    </div>
  );
}

export default App;
