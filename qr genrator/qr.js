
let img = document.getElementById('qrImage');
let form = document.getElementById('qrForm');
let cont = document.getElementById('qrContainer');

 async function rend(text){
    let res = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${text}`;
   // let data = await res.json();
    console.log(res)
    
   img.setAttribute('src',res);
   cont.classList.add("show");

 }

  form.addEventListener('submit',(event)=>{
    event.preventDefault();
    const formData = new FormData(form);
  const text = formData.get("qrText");
    rend(text);
  })

