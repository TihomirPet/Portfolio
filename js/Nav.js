// const infoHtml = document.querySelector('.navhold');
const subject = document.querySelector('#navhold');
const links = [
  { href: '#01', name: 'Home' },
  { href: '#02', name: 'Profil' },
  { href: '#03', name: 'Projekte' },
  { href: '#04', name: 'Kontakt' },
];

const infoHtml = `
     


 <nav class="nav font-Comfortaa-light font-12">

    ${links.reduce(
      (html, value) =>
        html +
        `     <li class="nav-item animateNav">
               <a class="nav-link "  href="${value.href}">${value.name}</a>
              </li>
              
              `,
      ''
    )}

       
 </nav> 
       
   


  
 
 
`;

subject.insertAdjacentHTML('beforeend', infoHtml);
