const section = document.querySelector('.section');
const square = section.querySelector('.square');

let isHovering = false;
let rotateX = 0;
let rotateY = 0;

const ROTATION_LIMIT = 30;

section.addEventListener('mouseenter', () => {
  isHovering = true;
});

section.addEventListener('mouseleave', () => {
  isHovering = false;
  rotateX = 0;
  rotateY = 0;
  square.style.transform = `translate(-50%, -50%) rotateX(0deg) rotateY(0deg)`;
});

section.addEventListener('mousemove', (e) => {
  if (isHovering) {
    const sectionRect = section.getBoundingClientRect();
    const centerX = sectionRect.left + sectionRect.width / 2;
    const centerY = sectionRect.top + sectionRect.height / 2;
    const xDiff = e.clientX - centerX;
    const yDiff = centerY - e.clientY;

    rotateX = (yDiff / centerY) * ROTATION_LIMIT;
    rotateY = (xDiff / centerX) * ROTATION_LIMIT;

    square.style.transform = `translate(-50%, -50%) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  }
});
