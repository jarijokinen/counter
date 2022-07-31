export const counter = (options) => {
  const opts = {
    elements: document.querySelectorAll('[data-counter]'),
    delay: 500,
    duration: 2000,
    fps: 60,
    ...options
  };

  const steps = Math.round(opts.duration / (1000 / opts.fps));
  const easeOutQuad = t => t * (2 - t);

  const animate = (el) => {
    let step = 0;
    const value = parseInt(el.getAttribute('data-counter'));

    const interval = setInterval(() => {
      const count = Math.round(value * easeOutQuad(step / steps));

      if (parseInt(el.innerText) != count) {
        el.innerText = count;
      }

      (step++ == steps) && clearInterval(interval);
    }, (1000 / opts.fps));
  };
  
  opts.elements.forEach((el) => {
    el.innerText = '0';
    setTimeout(animate, opts.delay, el);
  });
};
