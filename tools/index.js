export const getUrlParameter = (parameter, url = window.location.href) => {
  const splitIndex = url.indexOf('?');
  const str = url.substring(splitIndex + 1);
  const reg = new RegExp(`(^|&)${parameter}=([^&]*)(&|$)`, 'i');
  const result = str.match(reg);
  if (result != null) {
    return decodeURI(decodeURIComponent(result[2]));
  }
  return null;
};

export const UUID8Bit = () => {
  const chars = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k',
    'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x',
    'y', 'z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A',
    'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N',
    'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
  ];

  let uuid = '';
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < 8; ++i) {
    const index = Math.min(Math.floor(Math.random() * 62), 61);
    uuid += chars[index];
  }
  return uuid;
};

export const AnimateJS = ({
  timing,
  draw,
  duration,
  finishCallback,
}) => {
  const start = performance.now();
  requestAnimationFrame(function animate(time) {
    let timeFraction = (time - start) / duration;
    if (timeFraction > 1) timeFraction = 1;

    const progress = timing(timeFraction);
    draw(progress);

    if (timeFraction < 1) {
      requestAnimationFrame(animate);
    } else {
      finishCallback?.();
    }
  });
};
