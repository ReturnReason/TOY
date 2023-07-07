const $title = document.querySelector('.title');

const percent = (scrollNum, totalScrollNum) => {
  return `${((scrollNum / totalScrollNum) * 100).toFixed(0)}%`;
};

const calcScroll = () => {
  const $progressBar = document.querySelector('.progress-bar');
  const bodyHeight = document.body.scrollHeight;
  let scrollNum = 0;

  addEventListener('scroll', () => {
    scrollNum = scrollY;
    $title.innerText = percent(scrollNum, bodyHeight - innerHeight);
    $progressBar.style.width = `${percent(scrollNum, bodyHeight - innerHeight)}`;
  });
};

calcScroll();
