const utentiModel = require("../models/utenti.models.js");
const express = require("express");
const app = express();

module.exports = {
    getUtenti: function(req, res) {
        utentiModel.returnListaUtenti((utenti)=>{
            //console.log(utenti);
            res.json(utenti);
        });
    },

     //Andiamo a usare req.bosy essendo i parametri nel body e non nel query
     addUtente: function (req, res) {
         if (req.body.username){
             //res.status(400).send("Parametri non validi, impossibile aggiungere studente");
             utentiModel.addUtente(req.body.username, req.body.password, (newUtenti)=>{
                 utentiModel.writeUtenti(newUtenti, ()=>{ //console.log(req.body.data)
                     res.json(req.body.username+" aggiunto");
                 });         
             });
         };
     },

     // getArticolo: function (req, res){
     //     articoliModel.returnArticolo(req.params.IDArticolo,(articolo)=>{
     //         //console.log(studenti);
     //         res.json(articolo);
     //     });
     // },

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