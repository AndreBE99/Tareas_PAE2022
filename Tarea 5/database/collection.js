const db = require("./database");

module.exports = function (collectionName) {
  if (collectionName) {
    const collection = db().collection(collectionName);
    return collection;
  } else {
    return null;
  }
};
