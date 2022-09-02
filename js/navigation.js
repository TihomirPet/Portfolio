let links = document.querySelectorAll('.menu_item');
let linkImages = document.querySelectorAll('.hover_reveal_img');

links.forEach((link, index) => {
  link.addEventListener('mousemove', (e) => {
    link.children[1].style.opacity = 1;
    link.children[0].stylezIndex = 3;
    //  link.children[1].style.transform = `translate(${e.clientX -20}px)`;
    linkImages[index].style.transform = 'scale(1, 1)';
  });
  link.addEventListener('mouseleave', (e) => {

link.children[1].style.opacity=0
  // link.children[1].style.transform=`translate(${-e.clientY -50}px )`
linkImages[index].style.transform='scale(0.8, 0.8)'
link.style.zIndex=0
  });
});
