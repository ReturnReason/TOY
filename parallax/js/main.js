const $header = document.querySelector('header');
const $progressBar = document.querySelector('.progress-bar');

function init() {
  let scrollNum = 0;
  let documentHeight = 0;
  let per = 0;

  window.addEventListener('scroll', () => {
    scrollNum = window.scrollY;
    documentHeight = document.body.scrollHeight - window.innerHeight;

    per = percent(scrollNum, documentHeight);
    $progressBar.computedStyleMap.width = `${per}%`;

    if (scrollNum >= 400) {
      $header.classList.add('fixed');
    } else $header.classList.remove('fixed');
  });
}

function percent(num, totalNum) {
  return ((num / totalNum) * 100).toFixed(0);
}

init();
