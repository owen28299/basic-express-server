var express = require('express');
var router = express.Router();

var adults = ['Tony', "Jon", "Jason"];

router.route('/:id')
  .get(function(req,res){
    var id = req.params.id;
    res.send(adults[id]);
  });

router.route('/')
  .get(function(req,res){
  res.json({
    users : adults
  });
  })
 .post(function(req,res){
  res.json({
    success:true,
    message: "posted"
  });
  })
  .put(function(req,res){
  res.json({
    success:true,
    message: "user updated!"
  });
  })
  .delete(function(req,res){
  res.json({
    success:true,
    message: "user deleted!"
  });
  });

module.exports = router;