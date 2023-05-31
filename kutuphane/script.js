
const form=document.getElementById("form");
const kitapad=document.getElementById("kitapadi");
const kitapsayfa=document.getElementById("kitapsayfasi");
const yazar=document.getElementById("yazar");


form.addEventListener("submit",verileriKaydet);

async function verileriKaydet(e){
  e.preventDefault();
   
  let kitapadi=kitapad.value;
  let kitapsayfasi=kitapsayfa.value;
  let yazarr=yazar.value;

  const sunucuYaniti=await fetch('http://localhost:3000/kitaplar',{
    method:'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        kitapad:kitapadi,
        kitapsa:kitapsayfasi,
        yazar:yazarr
    })
  
  });

  let veriler=await sunucuYaniti.json();
  console.log(veriler);
  alert("Veri kaydı yapıldı.");
  
}
