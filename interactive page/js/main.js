let [x, y] = [0, 0];

const $container = document.querySelector('.iu-wrapper');
const $iu = $container.querySelector('#iu');
const $iuShadow = $container.querySelector('.iu-shadow');
const $lilacLogos = $container.querySelectorAll('.lilac-logo');

const move = () => {
  $lilacLogos.forEach((child) => {
    child.style.transform = `translateX(${x / 10}px)`;
  });

  $iu.style.transform = `translateX(${(x * -0.1) / 50}%)`;
  $iuShadow.style.transform = ` translateX(${(x * 0.03) / 50}%)`;
};

window.addEventListener('mousemove', (e) => {
  x = e.pageX - window.innerWidth / 2;

  move();
});
