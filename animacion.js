var WIDTH = window.innerWidth;
var HEIGHT = window.innerHeight;
var WAVEHEIGHT = 60;
var FREQUENCY = 200;
var SPEED = 4;

let xs = [];
let tick = 0;

function createWave() {
  for (var i = 0; i <= WIDTH; i++) {
    xs.push(i);
  }
}
createWave();

function animate() {
  let points = xs.map(x => {
    let y = HEIGHT / 2 + WAVEHEIGHT * Math.sin((x + tick) / FREQUENCY);
    return [x, y];
  });

  let path =
    "M" +
    points
      .map(p => {
        return p[0] + "," + p[1];
      })
      .join(" L") +
    "L " +
    WIDTH +
    "," +
    HEIGHT +
    " L " +
    0 +
    "," +
    HEIGHT +
    " Z";

  document.querySelector("path").setAttribute("d", path);
  tick += SPEED;
  requestAnimationFrame(animate);
}

animate();

window.addEventListener("resize", function() {
  WIDTH = window.innerWidth;
  HEIGHT = window.innerHeight;
  xs = [];
  createWave();
});
