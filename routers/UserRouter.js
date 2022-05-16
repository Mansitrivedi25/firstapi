// importing express
const express = require("express");
const res = require("express/lib/response");
const { model } = require("../connection");
const Model= require("../models/userModel");

// create router
const router = express.Router();

router.get("/home", (req, res) => {
  console.log("request at user home");
  res.send("you have found user Home");
});


router.post("/add",(req,res)=>{
  console.log(req.body);

  //for storing data in database
  new Model(req.body)//20 april for model
  .save()
  .then((data) =>{
    console.log("user saved");
    res.status(200).json({message:"success"});
  })
  .catch((err) => {
    console.error(err);
    res.status(500).json(err)
  });
})

router.get("/add", (req, res) => {
  res.send("you have requested on /add in user");
});
router.get('/getall',(req,res)=>{   //get request for manageuser
  Model.find({})
  .then((data) =>{
    console.log("data saved");
    res.status(200).json(data);
  })
  .catch((err) => {
    console.error(err);
    res.status(500).json(err)
  });
})

router.post('/authenticate',(req,res)=>{
  const formdata=req.body;

  model.findOne({email:formdata.email,password:formdata.password})//19 april for login data
  .then((data) => {
    if(data){
      console.log('login success')
      res.status(200).json(data);
    }
    else{
      console.log("login failed");
      res.status(400).json({message:"failed"});
    }
  })
  .catch((err) => {
    console.error(err);
    res.status(500).json(err)
  });
})

module.exports = router;