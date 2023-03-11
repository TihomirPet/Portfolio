const supabaseUrl = 'https://aibelnaujwpcpngoufvk.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFpYmVsbmF1andwY3BuZ291ZnZrIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzgzNzY0NjEsImV4cCI6MTk5Mzk1MjQ2MX0.WNplVHonh2Lg4mYI9zdujZaiEtwuXprxzdMD6f1RiYk';
var supabase = supabase.createClient(supabaseUrl, supabaseKey);
console.log(supabase);

async function detailGallery() {
  let { data: content, error } = await supabase.from('content').select('*');

  if (error) {
    throw new Error(error);
  }

  let contentD = `  


  ${content.map(
    (element) =>
      `

       <div class="col-12 col-md-3 project-card">
           <form method="get" action="/pages/detail.html" >
             <button class="projekt-card-link btn"  type="submit" >
               <div class="row">
                  <div class="col-12 project-card-title d-flex align-items-center ps-4">
                 
                    <input  class="font-37-90 font-Comfortaa-light letter-spacing-02 inputCart" type="text" name="id"  value="${element.id}"/>
                  </div>
                   <div class="col-12 project-card-image ">
                    <img src="images/${element.imgUrl}" alt="Sprachen" width="100%" /> 
                   </div>
                   <div class="col-12 pt-4 ps-4 ps-md-4 d-flex flex-column align-items-start ">
                    <h4 class="font-Comfortaa-light font-21-33 ">
                      ${element.title}
                     </h4>
                    <p class="font-Comfortaa-light font-12 mt-2">
                      ${element.description}
                    </p>
                  </div>
                </div>
              </button>
           </form>
     </div>

     `
  )}
  

  
  `;

  let p = document.getElementById('gallery');
  p.insertAdjacentHTML('beforeend', contentD);
}

window.addEventListener('load', () => {
  let params = new URL(document.location).searchParams;

  const idDetail = params.get('id');
  //  const title = params.get('title-detail');

  document.getElementById('result').innerHTML = idDetail;
  //  document.getElementById('result-title').innerHTML = title;

  //  let output = window.location.search;
  //  alert(output);
});

detailGallery();
