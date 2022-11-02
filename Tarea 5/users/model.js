const collection = require('../database/collection');

class User {

    collection;

    constructor(){
        this.collection = collection('users');
    }

    findAll(colData) {
        this.collection.find({}).toArray(colData);
    }
}

module.exports = User;