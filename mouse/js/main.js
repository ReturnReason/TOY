const h1 = document.querySelector('h1');
const $box = document.querySelector('.box');

let [x, y, targetX, targetY] = [0, 0, 0, 0];
const SPEED = 0.03;

window.addEventListener('mousemove', (e) => {
  x = e.pageX;
  y = e.pageY;

  h1.innerText = `x : ${e.pageX} y : ${e.pageY}`;
});

const loop = () => {
  targetX += (x - targetX) * SPEED;
  targetY += (y - targetY) * SPEED;

  $box.style.top = `${targetY}px`;
  $box.style.left = `${targetX}px`;

  window.requestAnimationFrame(loop);
};

loop();
