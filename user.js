const crypto = require("crypto");

function registerUser(secret,data){
  return new Promise(function(resolve, reject) {
    global.db.query("INSERT INTO users (secret,data) VALUES (:secret,:data);",{secret,data},function(err, result) {
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
    global.db.query("SELECT data FROM users WHERE id=:userId LIMIT 1;",{userId},function(err, result) {
      console.log(result["data"]);
      resolve(result["data"]);
    });
  });
}

module.exports = {
    registerUser,
    updateUserData,
    getUserData
};
