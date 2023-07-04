const $title = document.querySelector('.title');

const calcScroll = () => {
  let scrollNum = 0;

  addEventListener('scroll', () => {
    scrollNum = scrollY;
    $title.innerText = `${((scrollNum / (document.body.scrollHeight - innerHeight)) * 100).toFixed(
      0
    )}%`;
  });
};

calcScroll();
