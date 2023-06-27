const h1 = document.querySelector('h1');
const $box = document.querySelector('.box');

let [x, y, targetX, targetY] = [0, 0, 0, 0];
const SPEED = 0.03;

window.addEventListener('mousemove', (e) => {
  x = e.pageX;
  y = e.pageY;

  h1.innerText = `x : ${e.pageX} y : ${e.pageY}`;

  $box.style.top = `${y}px`;
  $box.style.left = `${x}px`;
});

// const loop = () => {
//   // 가속과 감속
//   targetX += (x - targetX) * SPEED;
//   targetY += (y - targetY) * SPEED;

//   $box.style.top = `${targetY.toFixed(2)}px`;
//   $box.style.left = `${targetX.toFixed(2)}px`;

//   window.requestAnimationFrame(loop);
// };

// loop();
