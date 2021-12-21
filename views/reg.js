const d = new Date();
document.getElementById("data").innerHTML = d.toDateString();

let dati={}

function OnNuovo(){
    document.querySelector("#modale").style.display = "flex";
    document.querySelector(".overlay").style.display = "block"; 
}
function chiudimodal(){
    document.querySelector("#modale").style.display = "none";
    document.querySelector(".overlay").style.display = "none"; 
}
function formSubmit() {
    if (document.myform.username.value == "" || document.myform.password.value == "")
      alert("Submit non effettuato. Inserisci almeno un carattere");
    else{
        let user={
            username:document.myform.username.value,
            password:document.myform.password.value
        }
        


        // if(IsPresente(user))
        //     alert("username già in uso");
        // else
            fetchVerifica(user);
    }
        
}
function fetchDati(user){
    fetch('http://localhost:3000/utenti/addutente',{
        method: 'POST',
        body:ObjectToTURL(user),
        headers:{
            'Content-Type':'application/x-www-form-urlencoded'
        }
    }).then(response => response.json())
    .then(json=>{
        dati = json;
        console.log(dati)
    })
    .catch(err=>console.log(err));
}
function ObjectToTURL(object){
    let parts=[];
    for(var part in object){
        parts.push(part+"="+object[part]);
    }
    console.log(parts.join('&'));
    return parts.join('&');
}
function fetchVerifica(obj){
    fetch('http://localhost:3000/utenti/').then(response => response.json())
    .then(json=>{
        dati = json;
        console.log(dati);
        verifica(dati,obj);
    })
    .catch(err=>console.log(err));
    }
    
    function verifica(dati,obj){
        let istrue=1;
        for(let i=0;i<dati.length && istrue;i++){
            console.log("datodb "+dati[i].username)
            console.log("da verif "+obj.username)
            if(dati[i].username==obj.username){
                alert("username già in uso");
                istrue=0;
            }              
        }
        if(istrue){
        fetchDati(obj);
        alert("registrazione "+obj.username+" avvenuta con successo");
        window.location.href = './index.html';
        }
    }