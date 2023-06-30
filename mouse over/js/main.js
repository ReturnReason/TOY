window.onload = () => {
  let [x, y] = [0, 0];
  let [targetX, targetY] = [0, 0];
  const SPEED = 0.1;
  const $cursor = document.querySelector('.cursor');

  const loop = () => {
    targetX += (x - targetX) * SPEED;
    targetY += (y - targetY) * SPEED;

    $cursor.style.transform = `translate(${targetX}px, ${targetY}px)`;
    window.requestAnimationFrame(loop);
  };

  window.addEventListener('mousemove', (e) => {
    x = e.pageX;
    y = e.pageY;
  });

  loop();
};
