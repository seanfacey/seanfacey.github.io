const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.08 });

document.querySelectorAll('.exp-item, .edu-item').forEach((el, i) => {
  el.classList.add('animate');
  el.style.transitionDelay = `${(i % 3) * 80}ms`;
  observer.observe(el);
});
