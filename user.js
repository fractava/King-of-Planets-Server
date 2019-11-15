const crypto = require("crypto");

function registerUser(secret,data){
  return new Promise(function(resolve, reject) {
    global.db.query("INSERT INTO users (secret,data) VALUES (?,?);",[secret,data], function(err, result, fields) {
      resolve(result.insertId);
    });
  });
}
function updateUserData(userId,data){
  return new Promise(function(resolve, reject) {
    let json = JSON.stringify(data);
    global.db.query("UPDATE users SET data=? WHERE id=? LIMIT 1;",[json,userId],function(err){
      if(err){
        reject(err);
      }else{
        resolve(true);
      }
    });
  });
}
function setArrayProperty(array,path,value){
  var property = array;

  for(let i=0; i<path.length; i++){
    if(i == path.length-1){
      property[path[i]] = value;
    }else{
      property = property[path[i]];
    }
  }

  return array;
}
function updateUserDataProperty(userId,propertyPath,newValue){
  return new Promise(function(resolve, reject) {
    getUserData(userId).then(function(data){
      data = setArrayProperty(data,propertyPath,newValue);

      updateUserData(userId,data);
      resolve(true);
    });
  });
}
function getUserData(userId){
  return new Promise(function(resolve, reject) {
    global.db.query("SELECT * FROM users WHERE id=? LIMIT 1;",[userId],function(err, result, fields) {
      if(err){
        reject(err);
      }else{
        result = result[0];
        result = JSON.parse(result["data"]);
        resolve(result);
      }
    });
  });
}

module.exports = {
    registerUser,
    updateUserData,
    updateUserDataProperty,
    getUserData
};
