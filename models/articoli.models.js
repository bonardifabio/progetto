const fs = require("fs");
const studenti = require("../controllers/articoli.controllers");
const mongoose=require("mongoose");
require("dotenv").config();


const articoliSchema=mongoose.Schema({
    IDArticolo:{type:String, required:true, unique:true},
    descrizione:String,
    linkImm:String,
    tags:[String]
});

const articoliModel=mongoose.model("Article",articoliSchema);

module.exports = {
    returnArticolo:function(IDArticolo,callback){
        // console.log(IDArticolo)
        articoliModel.findOne({IDArticolo:IDArticolo},function(err,articolo){
            if(err)
                console.log("errore ricerca "+articolo);
            else{
                console.log("articolo:\n"+articolo);
                callback(articolo);
            }
        });
    },
    returnListaArticoli: function (callback){
        articoliModel.find(function(error,articoli){
            if(error)
            throw error;
            console.log("TUTTI GLI Articoli:\n"+articoli);
            callback(articoli);
        });
    },

    // addStudente: function (IDStudente, voti, nome, cognome, luogo, data, callback){
    //     let nuovoStud=new studentiModel({nome:nome,cognome:cognome,nascita:{data:data,luogo:luogo},voti:voti,IDStudente:IDStudente});
    //     callback(nuovoStud);
    // },

    // writeStudenti: function(data, callback){
    //     data.save(function(error,result){
    //         if(error)
    //             console.log("IDstudente già presente");
    //         else
    //             callback(result);
    //     });
    // },
    // deleteStudenti:function(IDstudente,callback){
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