var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var _ = require('lodash');
var morgan = require('morgan');

var lionRouter = require('./lions');
var tigerRouter = require('./tigers');


app.use('/lions', lionRouter);
app.use('/tigers', tigerRouter);

// var lions = [];
// var id = 0;
//
// var updateId = function(req, res, next){
//   if(!req.body.id){
//     id++;
//     req.body.id = id + '';
//   }
//   next();
// };

app.use(morgan('dev'));
app.use(express.static('client'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// app.param('id', function(req, res, next, id){
//   var lion = _.find(lions, {id: id});
//
//   if(lion) {
//     req.lion = lion;
//     next();
//   }else {
//     res.send;
//   }
// });
//
// app.get('/lions', function(req, res){
//   res.json(lions);
// });
//
// app.get('/lions/:id', function(req, res){
//   var lion = req.lion;
//   res.json(lion || {});
// });
//
// app.post('/lions', updateId, function(req, res){
//     var lion = req.body;
//
//     lions.push(lion);
//     res.json(lion);
// });
//
// app.put('/lions/:id', function(req, res){
//   var update = req.body;
//   if(update.id){
//     delete update.id;
//   }
//
// var lion = _.findIndex(lions, {id: req.params.id});
// if(!lions[lion]){
//   res.send();
// }else{
//   var updateLion = _.assign(lions[lion], update);
//   res.json(updateLion);
//   }
// });
//
//
// app.delete('/lions/:id', function(req, res){
//   var lion = _.findIndex(lions, {id: req.params.id});
//   if(!lions[lion]){
//     res.send()
//   }else{
//     var deletedLion = lion[lion];
//     lions.splice(lion, 1);
//     res.json(deletedLion);
//   }
// });

app.use(function(err, req, res, next){
  if(err){
    res.status(500).send(error);
  }
});

app.listen(3000);
