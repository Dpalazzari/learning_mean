var express = require('express');
var router  = express.Router();
var mongojs = require('mongojs');
var db      = mongojs('mongodb://drew:drew@ds157349.mlab.com:57349/mytasklist_drew', ['tasks']);


// Get ALL tasks
router.get('/tasks', function(req, res, next){
  db.tasks.find(function(err, tasks){
    if(err){
      res.send(err);
    }
    res.json(tasks);
  });
});

// Get single task
router.get('/task/:id', function(req, res, next){
  db.tasks.findOne({_id: mongojs.ObjectId(req.params.id)},function(err, task){
    if(err){
      res.send(err);
    }
    res.json(task);
  });
});

module.exports = router;