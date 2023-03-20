const supabaseUrl = 'https://aibelnaujwpcpngoufvk.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFpYmVsbmF1andwY3BuZ291ZnZrIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzgzNzY0NjEsImV4cCI6MTk5Mzk1MjQ2MX0.WNplVHonh2Lg4mYI9zdujZaiEtwuXprxzdMD6f1RiYk';
var supabase = supabase.createClient(supabaseUrl, supabaseKey);
console.log(supabase);

let baseUrl = window.location.href; // You can also use document.URL
let koopId = baseUrl.substring(baseUrl.lastIndexOf('=') + 1);
console.log(koopId); //503

async function readGallery() {
  let { data: element, error } = await supabase
    .from('content')
    .select('*,detail(*)')
    .eq('id', koopId)
    .single();
  if (error) {
    throw new Error(error);
  }

  let url = element.detail.map((element) => element.imgUrl);
console.log(url);


  let content = `  
 
 
  ${element.detail.map(
    (el) =>
      `




      <div class="container-fluid  ps-0 pe-0 details-header ">
      
        <img id="my-img" src="/images/${el.imgUrl}" alt="Sprachen" width="100%" />
     
    
      </div>




      <div class="container-fluid mt-5 pb-5 details-title">
        <div class="row">
          <!-- container title start -->
          <div class="container-fluid d-flex pb-4 mt-5">
            <div class="col-7 col-md-5 col-lg-4 d-flex align-items-center justify-content-end">
              <h1 class="font-28-43 font-Comfortaa-regular">
              ${el.titleD}
              </h1>
            </div>
            <div class="col-6"></div>
          </div>
          <!-- container title end -->
          <div class="col-1 col-md-5"></div>
          <div class="col-10 col-md-6 details-text mb-md-5 p-2">
            <p class="font-Comfortaa-light font-16 w-100">  ${el.content}
            </p>
          </div>
        </div>
      </div>
      <div class="container-fluid mt-5 mb-5 details-colour-palette">
        <div class="row pb-5">
          <!-- container title start -->
          <div class="container-fluid d-flex">
            <div class="col-7 col-md-4 d-flex align-items-center justify-content-end">
              <h1 class="font-28-43 font-Comfortaa-regular">Farbpalette</h1>
            </div>
            <div class="col-6"></div>
          </div>
          <!-- container title end -->

          <div class=" col-1 col-md-5"></div>
          <div class="col-11 col-md-6">
            <div class="container-fluid mt-5 mt-md-0">
              <div class="row">
                <!--colour-primary start  -->
                <div class="col-4 col-md-3 d-flex colour-primary">
                  <div class="col colours-hex d-flex align-items-center">
                    <p class="font-Comfortaa-light font-12">${el.primary_hex}</p>
                  </div>
                  <div class="colours ms-2">
                    <img src="/colors/${el.primary_colour}" width="50%" />
                  </div>
                </div>
                <!--colour-primary end  -->
                <!--colour-secondary start  -->
                <div class="col-4 col-md-3 colour-secondary d-flex">
                  <div class="col colours-hex d-flex align-items-center">
                    <p class="font-Comfortaa-light font-12">${el.secondary_hex}</p>
                  </div>
                  <div class="colours ms-2">
                    <img src="/colors/${el.secondary_colour}" width="50%" />
                  </div>
                </div>
                <!--colour-secondary end  -->
                <!--colour-third start  -->
                <div class="col-4 col-md-3 color-third d-flex">
                  <div class="col colours-hex d-flex align-items-center">
                    <p class="font-Comfortaa-light font-12">${el.third_hex}</p>
                  </div>
                  <div class="colours ms-2">
                    <img src="/colors/${el.third_colour}" width="50%" />
                  </div>
                </div>
                <!--colour-third end  -->
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container-fluid mt-5 details-fonts pb-5">
        <div class="row mt-md-5 ">
          <!-- container title start -->
          <div class="container-fluid d-flex mt-md-5">
            <div class="col-7 col-md-4 d-flex align-items-center justify-content-end pe-4 pe-md-0">
              <h1 class="font-28-43 font-Comfortaa-regular">Fonts</h1>
            </div>
            <div class="col-6"></div>
          </div>
          <!-- container title end -->

          <div class="col-1 col-md-5"></div>
          <div class="col-10 col-md-6">
            <div class="container-fluid">
              <div class="row">
                <!--Medium start  -->
                <div
                  class="col-md-4 d-flex flex-column align-items-start justify-content-center"
                >
                  <div class="col-8 d-flex align-items-center">
                    <h2 class="font-Comfortaa-medium font-50-52">Aa</h2>
                  </div>
                   <div
                    class="col-10 d-flex align-items-center justify-content-start"
                  >
                    <h2 class="font-28-43 font-Comfortaa-medium">
                       ${el.font_medium}
                    </h2>
                  </div>
                </div>
                <!--Medium end  -->
                <!--regular start  -->
                <div
                  class="col-md-4 d-flex flex-column align-items-start justify-content-center"
                >
                  <div class="col-4 d-flex align-items-center">
                    <h2 class="font-Comfortaa-medium font-28-43">Aa</h2>
                  </div>
                  <div class="col-7 d-flex align-items-center">
                    <h2 class="font-21-33 font-Comfortaa-regular">
                         ${el.font_regular}
                    </h2>
                  </div>
                </div>
                <!--regular end  -->
                <!--light start  -->
                <div
                  class="col-md-4 d-flex flex-column align-items-start justify-content-center"
                >
                  <div class="col-4 d-flex align-items-center">
                    <h2 class="font-Comfortaa-medium font-21-33">Aa</h2>
                  </div>
                  <div class="col-7 d-flex align-items-center">
                    <h2 class="font-16 font-Comfortaa-light">
                     ${el.font_light}
                    </h2>
                  </div>
                </div>
                <!--light end  -->
              </div>
            </div>
          </div>
        </div>
      </div>
  




   
     `
  )}
  

  
  `;

  let parent = document.getElementById('galleryD');
  parent.insertAdjacentHTML('beforeend', content);
}

async function readDetailGallery() {
  let { data: element, error } = await supabase
    .from('content')
    .select('*,detail(*)')
    .eq('id', koopId)
    .single();
  if (error) {
    throw new Error(error);
  }

  let url = element.detail.map((element) => element.imgUrl);
  console.log(url);

  let contentNav = `  
 
 
  ${element.detail.map(
    (el) =>
      `

              <a class="detail-link" href="${el.href}">Projekt&nbspSehen</a>
      


   
     `
  )}
  

  
  `;

  let parent = document.getElementById('detail_btn');
  parent.insertAdjacentHTML('beforeend', contentNav);
}



// ##################################################################

readGallery();
readDetailGallery();
