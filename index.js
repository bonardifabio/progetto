const express = require("express");
const app = express();
const mongoose=require("mongoose");
const cors = require("cors");
require("dotenv").config();

const articoliRouter = require("./routers/articoli.routers");
const utentiRouter = require("./routers/utenti.routers");
mongoose.connect("mongodb://127.0.0.1:27017/progetto",function(error){
//Middleware per andare a interpretare quello che c'è nel body
app.use(express.urlencoded({extended: true}));
app.use(cors());
//quando passiamo da un middleware bisogna sembre richiamare un passaggio successivo
//next(); fa continuare la richiesta sul suo rout. Se non c'è un next e facciamo un res le cose/rout sotto non funzioneranno.
app.use("/", function(req, res,  next){
    console.log(req.method, req.url, req.query, req.body);
    next();
});

//Middleware. Tutte le richiesti /studenti/ andranno al router degli studenti
app.use("/articoli", articoliRouter);
app.use("/utenti", utentiRouter);

//funzione per differire i vari endpoint
app.get("/", function (req, res){
    res.send("hello world");
});

//per inizializare il server
app.listen(process.env.PORT, process.env.HOST, function(){
    console.log("Server avviato sulla porta " + process.env.PORT);
});
});