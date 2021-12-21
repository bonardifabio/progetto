const d = new Date();
document.getElementById("data").innerHTML = d.toDateString();

let dati = {};
let ordine=[
        "art2",
        "art5",
        "art6",
]
let contatag1=1;

for(elem of ordine){
    console.log(elem)
    fetchDati('http://localhost:3000/articoli/'+elem,contatag1);
    
    contatag1++;
}
// chiudi modale se clicco fuori

function fetchDati(s,contatag1){
    fetch(s).then(response => response.json())
    .then(json=>{
        dati = json;
        console.log(dati)
        CaricaDati(contatag1);
    })
    .catch(err=>console.log(err));
}
function CaricaDati(contatag1){
    let conta1=1;
    let conta2=2;
    let img = document.createElement("img");
    let desc = document.createElement("p");
    let tag1=document.createElement("span");
    let tag2=document.createElement("span");
    let linktag1=document.createElement("a");
    let linktag2=document.createElement("a");
    linktag1.href="./"+dati.tags[0].substring(1)+".html";
    linktag2.href="./"+dati.tags[1].substring(1)+".html";
    img.src =dati.linkImm;
    desc.innerHTML=dati.descrizione;
    tag1.innerHTML=dati.tags[0];
    tag2.innerHTML=dati.tags[1];
    // img.setAttribute("class","item3");
    // desc.setAttribute("class","item5");
    linktag1.setAttribute("id","tag"+contatag1+"_"+conta1);
    linktag2.setAttribute("id","tag"+contatag1+"_"+conta2);
    document.getElementById("img"+contatag1).appendChild(img);
    document.getElementById("p"+contatag1).appendChild(desc);
    document.getElementById("p"+contatag1).appendChild(linktag1);
    document.getElementById("p"+contatag1).appendChild(linktag2);
    document.getElementById("tag"+contatag1+"_"+conta1).appendChild(tag1);
    document.getElementById("tag"+contatag1+"_"+conta2).appendChild(tag2);
}

function OnNuovo(){
    document.querySelector("#modale").style.display = "flex";
    document.querySelector(".overlay").style.display = "block"; 
}
function chiudimodal(){
    document.querySelector("#modale").style.display = "none";
    document.querySelector(".overlay").style.display = "none"; 
}