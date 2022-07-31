export const counter = (options) => {
  const opts = {
    elements: document.querySelectorAll('[data-counter]'),
    delay: 500,
    speed: 30,
    ...options
  };

  const animate = (el) => {
    const value = parseInt(el.getAttribute('data-counter'));
    const data = parseInt(el.innerText);

    if (data < value) {
      el.innerText = data + 1;
      setTimeout(animate, opts.speed, el);
    }
    else {
      el.innerText = value;
    }
  };
  
  opts.elements.forEach((el) => {
    el.innerText = '0';
    setTimeout(animate, opts.delay, el);
  });
};
