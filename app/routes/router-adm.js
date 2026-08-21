const express = require("express");
const router = express.Router();
const {body,ValidationResult, validationResult }= require ("express-validator")
 
router.get("/", (req, res)=>{
    res.render("pages/index-adm");
})
 
router.get("/adm-cliente", (req, res)=>{
    res.render("pages/adm-cliente");
})
 
router.get("/adm-cliente-novo", (req, res)=>{
    res.render("pages/adm-cliente-novo");
})
router.post("/adm-cliente-novo" ,
    body("nome").isLength({min: 3, max: 30})
        .withMessage("Nome deve ter de 3 a 30 caracteres!"),
    body("email").isEmail(),
   
    body("CEP").isLength({min: 8, max: 8}),
        body("nomeUsuario").isLength({min: 3, max: 30})
        .withMessage("Nome deve ter de 3 a 30 caracteres!"),
     body("senha").isLength({min: 8, max: 30})
        .withMessage("Nome deve ter de 8 a 30 caracteres!"),
    function (req, res) {
    const errors = validationResult(req);
    if (!errors. isEmpty()) {
        console.log(errors);
        return res.render("pages/adm-cliente-novo.ejs", {"erros":errors, "valores":req.body, "retorno":null});
    }    
return res.render("pages/adm-cliente-novo.ejs", {"erros":null, "valores":req.body, "retorno":req.body});
    res.json(req. body)
});
 
router.get("/adm-cliente-edit", (req, res)=>{
    res.render("pages/adm-cliente-edit");
})
 
router.get("/adm-cliente-list", (req, res)=>{
    res.render("pages/adm-cliente-list");
})
 
router.get("/adm-cliente-del", (req, res)=>{
    res.render("pages/adm-cliente-del");
})
 
 
 
 
 
 
 
module.exports = router;
 