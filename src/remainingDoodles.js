import React from "react";

function remainingDoodles() {
  return (
    <div className="doodles">
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

      {/* <Link to="/all9" target="_blank"> */}
      <Doodle
        rule={`
          --color: @p(#fa4659, #feffe4, #a3de83, #2eb872);
    --bg-color: #2a0d5f;
    --border-style: 2px @p(dashed, solid, dotted) var(--color);
            :doodle {
              @grid: 200x1 / 460px; 
              @max-size: 800px 600px;
              background: var(--bg-color);
              overflow: hidden;
            }
            :container {
              transform: rotateX(45deg) rotate(45deg) scale(2);
              grid-template-rows: auto;
              grid-template-columns: repeat(auto-fill, calc(.5em + 1vmin));
              grid-auto-rows: calc(.5em + 1vmin);
              grid-auto-flow: dense;
            }
          
            grid-row-end: span @p(2, 4);
            grid-column-end: span @lp(); 
            margin: -1px;
            border: var(--border-style);
            outline: var(--border-style);
            outline-offset: -8px;
            background: 
              linear-gradient(@r(360deg), var(--color), var(--color)) 
              50% 50% / calc(8% + 1px) calc(8% + 1px) no-repeat;
          
            :after, :before {
              content: '';
              position: absolute;
              margin: auto;
              outline: var(--border-style);
              outline-offset: 2px;
              @size: @pn(25%, 50%);
            }
         
        `}
      />
      {/* </Link> */}
      <Doodle
        rule={`
            :doodle {
              @grid: 14 / 460px;
            }
            overflow: hidden;
            margin: -.5px;
            border-color: @p(#51eaea, #65799B, #FF9D77, #FB3569);
            border-width: 1px;
            border-radius: 50%;
            border-style: @repeat(4, (
              @p(solid, dashed, dotted)
            ));

            :after, :before {
              content: '';
              @size: calc(@sqrt(2) * 50%);
              position: absolute;
              border-width: inherit;
              border-color: @p(#51eaea, #65799B, #FF9D77, #FB3569);
              border-radius: 50%;
              border-style: @repeat(4, (
                @p(solid, dashed, dotted)
              ));
            }
            :after {
              transform: rotate(@r(-180deg, 180deg));
              z-index: 0;
              background: conic-gradient(
                from @r(360deg), #E2EEF1 @r(20%, 70%), transparent 0
              );
            }
            :before {
              @size: calc(50% - 2px);
              background: #fff
                linear-gradient(
                  @p(#51eaea, #E2EEF1, #FF9D77, #FB3569),
                  @lp()
                )
                50% 50% / 25% 25%
                no-repeat;
              z-index: 1;
            }
            @random(.35) {
              border: none;
              :after {
                border: none;
                background: none;
              }
              :before {
                @size: @r(10%, 20%);
                border: none;
                background: @p(#0001, #51eaea, #E2EEF1, #FF9D77, #FB3569);
                @shape: @p(circle, rhombus, hexagon);
              }
    }`}
      />

      <Doodle
        rule={`
            :doodle {
              @grid: 16 / 460px;
              background: #F0F4D8;
            }
          
            /* stroke width */
            --sw: 1px;
            
            /* stroke color */
            --sc: @pick(
              #F0F4D8, #000000, #E0A191, #D9EFB0, #C74F54
            );
            
            margin: 3px;
            
            filter: 
              drop-shadow(0 var(--sw) 0 var(--sc))
              drop-shadow(0 calc(-1 * var(--sw)) 0 var(--sc))
              drop-shadow(var(--sw) 0 0 var(--sc))
              drop-shadow(calc(-1 * var(--sw)) 0 0 var(--sc));
          
            :after {
              content: '';
              @size: 100%;
              clip-path: polygon(
                @rand(20%) 0, @rand(80%, 100%) 0,
                100% @rand(70%, 100%), @rand(20%) 100%
              );  
          
              background: @pick(
                #F0F4D8, #F0F4D8, var(--sc)
              );
          }
        `}
      />

      <Doodle
        rule={`
          :doodle {
            @grid: 12 / 460px;
            background: #0a0c27;
            filter: blur(1.5px);
            transform: scale(1.1)
          }
        
          @shape: circle;
          background: hsla(@index(), 70%, 68%, @rand(0.6));
          transform:
            scale(@rand(.2, 1.2))
            translate(
              @rand(-50%, 50%), @rand(-50%, 50%)
            );
        `}
      />

      <Doodle
        rule={`
          :doodle {
            @grid: 5 / 460px;
            background: #0a0c27;
          }
          
          transition: .2s ease @rand(.6s);
          will-change: transform;
        
          border-radius: 50%;
          border: @rand(10px) double hsla(
            calc(5 + 4 * @index()), 90%, 75%,
            @rand(.8)
          );
        
          @row(even) { --x: 25%; }
          @row(odd)  { --x: -25%; }
          @col(even) { --y: -10%; }
          @col(odd)  { --y: 10%; }
         
          transform:
            translate(var(--x), var(--y))
            rotate(@rand(360deg))
            scale(@rand(.4, .95, .01));
        `}
      />

      <Doodle
        rule={`
          :doodle {
            @grid: 7 / 460px;
            background: #0a0c27;
          }
          
          transition: .2s ease @rand(.6s);
          will-change: transform;
        
          border: 1px solid hsla(
            calc(5 + 4 * @index()), 90%, 75%,
            @rand(.8)
          );
        
          @size: 30% 100%;
          @row(even) { --x: 100%; }
          @row(odd)  { --x: -0%; }
          @col(even) { --y: -20%; }
          @col(odd)  { --y: 20%; }
        
          transform:
            translate(var(--x) , var(--y))
            rotate(@rand(360deg))
            scale(@rand(.5, .95, .01));
        `}
      />

      <Doodle
        rule={`
          :doodle {
            @grid: 6 / 460px;
            background: #0a0c27;
          }
        
          --color: hsla(
            calc(5 + 5 * @index()), 90%, 75%,
            @rand(.8)
          );
        
          transition: .2s ease @rand(.6s);
          will-change: transform;
          margin: 2px;
          border-radius: 50%;
          border-left: 1px solid var(--color);
          border-top: 1px solid var(--color);
        
          @row(even) { --x: 20%; }
          @row(odd)  { --x: -20%; }
          @col(even) { --y: -20%; }
          @col(odd)  { --y: 20%; }
        
          transform:
            translate(var(--x), var(--y))
            rotate(@rand(360deg));
          `}
      />

      <Doodle
        rule={`
          :doodle {
            @grid: 10 / 460px;
            background: #0a0c27;
          }
        
          transition: .2s ease @rand(.6s);
          will-change: transform;
          
          width: @rand(200%);
          transform:
            rotate(-45deg)
            translateY(@rand(-50%, 50%));
        
          border-top: 1px solid hsla(
            calc(5 + 2 * @index()), 90%, 75%,
            @rand(.8)
          );
        `}
      />
      <Doodle // changes on the basis of line rotation of 45 deg in either direction
        rule={`
          @grid: 16 / 460px;
          @size: 1px calc(141.4% + 1px);
          transform: rotate(@p(+45deg,-45deg));
          background: #000;
          margin: auto;
      `}
      />

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
    </div>
  );
}
export default remainingDoodles;
