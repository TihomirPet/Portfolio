(function () {
//   let parallax = document.querySelector('.parallax');
//   let front = document.querySelector('.front-layer');
//   let back = document.querySelector('.back-layer');
//   console.log(back);
//   // the heiwr the number the lower the sensitivity
//   const sFront = 500;
//   const sBack = 1000;

//   parallax.addEventListener('mousemove', (e) => {
//     let x = e.clientX;
//     let y = e.clientY;

//     front.style.transform = `
// translate(
//     ${x / sFront}%,
//     ${y / sFront}%)`;
//     back.style.transform = `
// translate(
//     ${x / sBack}%,
//     ${y / sBack}%
//     )`;
//   });

  document.addEventListener('mousemove', parallax);
  const elem = document.querySelector('.BackMobileViewPort');

  function parallax(e) {
    let w = window.innerWidth / 2;
    let h = window.innerHeight / 2;
    let mouseX = e.clientX;
    let mouseY = e.clientY;
    let chalk = `${50 - (mouseX - w) * 0.01}% ${50 - (mouseY - h) * 0.01}%`;

    let chalk1 = `${50 - (mouseX - w) * 0.02}% ${50 - (mouseY - h) * 0.01}%`;

    let x = `${chalk},${chalk1}`;

   

    elem.style.backgroundPosition = x;
  }
})();
