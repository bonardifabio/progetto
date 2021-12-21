const fs = require("fs");
const utenti = require("../controllers/utenti.controllers");
const mongoose=require("mongoose");
require("dotenv").config();
const utentiSchema=mongoose.Schema({
    username:{type:String, required:true, unique:true},
    password:String,
    online:Boolean
});
const utentiModel=mongoose.model("User",utentiSchema);
module.exports = {
// returnArticolo:function(IDArticolo,callback){
//     // console.log(IDArticolo)
//     articoliModel.findOne({IDArticolo:IDArticolo},function(err,articolo){
//         if(err)
//             console.log("errore ricerca "+articolo);
//         else{
//             console.log("articolo:\n"+articolo);
//             callback(articolo);
//         }
//     });
// },
returnListaUtenti: function (callback){
    utentiModel.find(function(error,utenti){
        if(error)
            throw error;
        console.log("TUTTI GLI utenti:\n"+utenti);
        callback(utenti);
    });
},
addUtente: function (username,password,callback){
    let nuovoStud=new utentiModel({username:username,password:password,online:0});
    callback(nuovoStud);
},
writeUtenti: function(data, callback){
    data.save(function(error,result){
        if(error)
            console.log("username già presente");
        else
            callback(result);
    });
},
// deleteStudenti:function(IDUtente,callback){
//     studentiModel.deleteOne({IDstudente:IDstudente }, function (err) {
//         if (err)
//             console.log("errore nella cancellazione di"+IDstudente)
//         else
//         callback(IDstudente);
//     });
// },
// updateStudenti:function(IDCerca,IDStudente, voti, nome, cognome, luogo, data, callback){
//     studentiModel.updateOne({IDStudente: IDCerca }, {nome:nome,cognome:cognome,nascita:{data:data,luogo:luogo},voti:voti,IDStudente:IDStudente}, function(err, res) {
//         if (err)
//            // console.log("errore nella modifica di "+IDStudente)
//            throw err;
//         else
//             callback(IDStudente);
//     });
// }
}