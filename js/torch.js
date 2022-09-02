function moveTorch(e) {
  document.documentElement.style.setProperty('--cursorX', `${e.clientX}px`);
  document.documentElement.style.setProperty('--cursorY', `${e.clientY}px`);
}

document.addEventListener('pointermove', moveTorch);
