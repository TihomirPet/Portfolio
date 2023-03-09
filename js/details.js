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

  console.log(element);

  let content = `  


  ${element.detail.map(
    (el) =>
      `

   
 
<p>${el.content}</p>
     `
  )}
  

  
  `;

  let parent = document.getElementById('galleryD');
  parent.insertAdjacentHTML('beforeend', content);
}
readGallery();
