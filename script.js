const dots = document.querySelectorAll(".scroll-indicator a");

const removeActiveClass = () => {
  dots.forEach(dot => dot.classList.remove("active"));
};

const addActiveClass = (entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const currentDot = document.querySelector(`.scroll-indicator a[href="#${entry.target.id}"]`);
      if (currentDot) {
        removeActiveClass();
        currentDot.classList.add("active");
      }
    }
  });
};

const observer = new IntersectionObserver(addActiveClass, {
  threshold: 0.6
});

const sections = document.querySelectorAll("section[id]");
sections.forEach(section => observer.observe(section));