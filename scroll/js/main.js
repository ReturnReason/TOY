const $title = document.querySelector('.title');

const percent = (scrollNum, totalScrollNum) => {
  return `${((scrollNum / totalScrollNum) * 100).toFixed(0)}%`;
};

const calcScroll = () => {
  let scrollNum = 0;

  addEventListener('scroll', () => {
    scrollNum = scrollY;
    $title.innerText = percent(scrollNum, document.body.scrollHeight - innerHeight);
  });
};

calcScroll();
