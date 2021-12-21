const d = new Date();
document.getElementById("data").innerHTML = d.toDateString();
let dati={}
let fileName = location.pathname.substring(location.pathname.lastIndexOf("/") + 1);
let id=fileName.replace("icolo", "");
id= id.replace(".html", "");

fetchDati();

function fetchDati(){
    fetch('http://localhost:3000/articoli/'+id).then(response => response.json())
    .then(json=>{
        dati = json;
        console.log(dati)
        CaricaDati();
    })
    .catch(err=>console.log(err));
}

function CaricaDati(){
    let img = document.createElement("img");
    let desc = document.createElement("p");
    let tag1=document.createElement("span");
    let tag2=document.createElement("span");
    let linktag1=document.createElement("a");
    let linktag2=document.createElement("a");
    let testo= document.createElement("p");
    linktag1.href="./"+dati.tags[0].substring(1)+".html";
    linktag2.href="./"+dati.tags[1].substring(1)+".html";
    img.src =dati.linkImm;
    desc.innerHTML=dati.descrizione;
    tag1.innerHTML=dati.tags[0];
    tag2.innerHTML=dati.tags[1];
    testo.innerHTML="Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit fugit aperiam dicta quidem consequuntur nostrum ullam praesentium accusantium saepe molestias! Quas soluta nobis molestiae deserunt cumque quod sapiente labore dignissimos.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate iusto laudantium natus culpa facere, consequatur quam fugit eaque commodi deserunt dicta, praesentium repellendus perspiciatis cum eveniet ipsam dolores magni libero!  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate iusto laudantium natus culpa facere, consequatur quam fugit eaque commodi deserunt dicta, praesentium repellendus perspiciatis cum eveniet ipsam dolores magni libero!  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate iusto laudantium natus culpa facere, consequatur quam fugit eaque commodi deserunt dicta, praesentium repellendus perspiciatis cum eveniet ipsam dolores magni libero!  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate iusto laudantium natus culpa facere, consequatur quam fugit eaque commodi deserunt dicta, praesentium repellendus perspiciatis cum eveniet ipsam dolores magni libero!  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate iusto laudantium natus culpa facere, consequatur quam fugit eaque commodi deserunt dicta, praesentium repellendus perspiciatis cum eveniet ipsam dolores magni libero!  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate iusto laudantium natus culpa facere, consequatur quam fugit eaque commodi deserunt dicta, praesentium repellendus perspiciatis cum eveniet ipsam dolores magni libero!  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate iusto laudantium natus culpa facere, consequatur quam fugit eaque commodi deserunt dicta, praesentium repellendus perspiciatis cum eveniet ipsam dolores magni libero!  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate iusto laudantium natus culpa facere, consequatur quam fugit eaque commodi deserunt dicta, praesentium repellendus perspiciatis cum eveniet ipsam dolores magni libero!  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate iusto laudantium natus culpa facere, consequatur quam fugit eaque commodi deserunt dicta, praesentium repellendus perspiciatis cum eveniet ipsam dolores magni libero!  "
    // img.setAttribute("class","item3");
    // desc.setAttribute("class","item5");
    linktag1.setAttribute("id","tag1_1");
    linktag2.setAttribute("id","tag1_2");
    document.getElementById("imm").appendChild(img);
    document.getElementById("par").appendChild(desc);
    document.getElementById("testo").appendChild(testo);
    document.getElementById("par").appendChild(linktag1);
    document.getElementById("par").appendChild(linktag2);
    document.getElementById("tag1_1").appendChild(tag1);
    document.getElementById("tag1_2").appendChild(tag2);
    
}

function OnNuovo(){
    document.querySelector("#modale").style.display = "flex";
    document.querySelector(".overlay").style.display = "block"; 
}
function chiudimodal(){
    document.querySelector("#modale").style.display = "none";
    document.querySelector(".overlay").style.display = "none"; 
}