const crypto = require("crypto");

function registerUser(secret,data){
  return new Promise(function(resolve, reject) {
    global.db.query("INSERT INTO users (secret,data) VALUES (:secret,:data);",{secret,data},function(err, result, fields) {
      resolve(result.insertId);
    });
  });
}
function updateUserData(userId,data){
  return new Promise(function(resolve, reject) {
    global.db.query("UPDATE users SET data=:data WHERE id=:userId LIMIT 1;",{data,userId});
  });
}
function getUserData(userId){
  return new Promise(function(resolve, reject) {
    console.log("get User Data got called with id="+userId);
    global.db.query("SELECT data FROM users WHERE id=:userId LIMIT 1;",{userId},function(err, result, fields) {
      console.log("Query complete");
      console.log(result);
      console.log(JSON.stringify(fields));
      resolve(result);
    });
  });
}

module.exports = {
    registerUser,
    updateUserData,
    getUserData
};
