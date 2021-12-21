const articoliModel = require("../models/articoli.models.js");
//const express = require("express");
//const app = express();

module.exports = {
    getArticoli: function(req, res) {
        articoliModel.returnListaArticoli((articoli)=>{
            //console.log(Articoli);
            res.json(articoli);
        });
    },

    //Andiamo a usare req.bosy essendo i parametri nel body e non nel query
    //addStudente: function (req, res) {
    //    if (req.body.IDstudente && req.body.voti && req.body.nome && req.body.cognome && req.body.luogo && req.body.data){
    //        //res.status(400).send("Parametri non validi, impossibile aggiungere studente");
    //        studentiModel.addStudente(req.body.IDstudente, req.body.voti, req.body.nome, req.body.cognome, req.body.luogo, req.body.data, (newStudenti)=>{
    //            studentiModel.writeStudenti(newStudenti, ()=>{ //console.log(req.body.data)
    //                res.send("Studente: ID = " + req.body.IDstudente + " nome = " + req.body.nome + " cognome = " + req.body.cognome + " luogo = " + req.body.luogo + " data = " + req.body.data + " voti = " + req.body.voti + " AGGIUNTO");
    //            });         
    //        });
    //    };
    //},

    getArticolo: function (req, res){
        articoliModel.returnArticolo(req.params.IDArticolo,(articolo)=>{
            //console.log(studenti);
            res.send(JSON.stringify(articolo));
        });
    },

    // updateStudente: function (req, res){//console.log(req.params.IDStudente)
    //     studentiModel.updateStudenti(req.params.IDStudente,req.body.IDStudente, req.body.voti, req.body.nome, req.body.cognome, req.body.luogo, req.body.data,function(IDStudente){
    //         res.send("studente "+ IDStudente + " modificato")
    //     })
    // },

    // deleteStudente: function (req, res){
    //     //console.log(req.params.IDstudente)
    //     studentiModel.deleteStudenti(req.params.IDstudente,function(IDstudente){
    //         res.send("studente "+ IDstudente + " cancellato")
    //     })
    // } 
}