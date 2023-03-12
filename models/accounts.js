var mongoose = require("mongoose");
var bcrypt = require("bcryptjs");
var passportLocalMongoose = require("passport-local-mongoose");

var accountsSchema = new mongoose.Schema({
  name: String,
  type: String,
  username: String,
  password: String,
  image: String
});

accountsSchema.plugin(passportLocalMongoose);
var Accounts = (module.exports = mongoose.model("Accounts", accountsSchema));

module.exports.createAccounts = function(newAccounts, callback) {
  bcrypt.genSalt(10, function(err, salt) {
    bcrypt.hash(newAccounts.password, salt, function(err, hash) {
      newAccounts.password = hash;
      newAccounts.save(callback);
    });
  });
};

module.exports.getUserByUsername = function(username, callback) {
  var query = { username: username };
  Accounts.findOne(query, callback);
};

module.exports.getUserById = function(id, callback) {
  Accounts.findById(id, callback);
};

module.exports.comparePassword = function(candidatePassword, hash, callback) {
  bcrypt.compare(candidatePassword, hash, function(err, passwordFound) {
    if (err) throw err;
    callback(null, passwordFound);
  });
};
