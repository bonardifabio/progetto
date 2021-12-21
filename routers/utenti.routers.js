const express = require("express");
//router di express
const router = express.Router();

const controllers = require("../controllers/utenti.controllers.js");

//scontroller. Essendo già in /studenti non serve mettere /studenti qui
router.get("/", controllers.getUtenti);

router.post("/addutente/", controllers.addUtente);

// //Express permette di generlizzare l'endpoint con :IDstudente per esempio. 
// router.get("/:IDArticolo/", controllers.getArticolo);
//     //req.params.IDstudente andrà a contenere l'IDstudente utilizzato, cioè i parametri nella richiesta
//     //console.log(req.params.IDstudente);

// // router.put("/updatestudente/:IDStudente", controllers.updateStudente);

// // router.delete("/deletestudente/:IDStudente", controllers.deleteStudente);
// //Per fare in modo che tutto il router sia chiamabile da index
module.exports = router;