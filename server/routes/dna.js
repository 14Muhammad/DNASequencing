var express = require('express');

/*
 express.Router class to create modular, mountable route handlers.
 A Router instance is a complete middleware and routing system; for this reason, it is often referred to as a �mini-app�.
 The following example creates a router as a module, loads a middleware function in it,
 defines some routes, and mounts the router module on a path in the main app.
 */

var router = express.Router();
/*

 Before we can handle CRUD operations, we will need a mongoose Model.
 These models are constructors that we define.
 They represent documents which can be saved and retrieved from our database.
 The mongoose Schema is what is used to define attributes for our documents.
 Mongoose Methods can also be defined on a mongoose schema.

 */
var mongoose = require('mongoose');
require('mongoose-double')(mongoose); //Provides Double support for Mongoose.
var mPromise = require('mpromise'); // not implemented yet
/*
 SchemaTypes handle definition of path defaults, validation, getters, setters,
 field selection defaults for queries and other general characteristics for Strings and Numbers.
 Following are all valid Schema Types.

 String
 Number
 Date
 Buffer
 Boolean
 Mixed
 Objectid
 Array
 */
var SchemaTypes = mongoose.Schema.Types;

/*
 Everything in Mongoose starts with a Schema.
 Each schema maps to a MongoDB collection and defines the shape of the documents within that collection.
 */
var Schema = mongoose.Schema;
var dnaSchema = new Schema({
  id : { type: Schema.ObjectId },
  sequence:{ type: String, required: true},
  createdAt:{ type: Date, required: false, default: new Date()}
},{collection:'dna'});

// the schema is useless so far
// we need to create a model using it

var dnaModel = mongoose.model('dna', dnaSchema);

// make this available to our users in our Node applications

module.exports = dnaModel;

// create the new dna (accessed at POST http://localhost:8899/dnasequencing/dna/add)
router.post('/dna/add', function (req, res) {
  dnaSchema.pre('save', function(next) {
    var currentDate = new Date();
    this.createdAt = currentDate;
    next();
  });
  console.log(":: dna/add ");

  // create a new instance of the dna model
  var newdna = dnaModel(req.body);

  // save the dna and check for errors
  newdna.save(function(err) {
    if (err) throw err;
    console.log('New dna '+req.body+' saved!');
    res.json({ isSaved: true });
  });
})

module.exports = router;
