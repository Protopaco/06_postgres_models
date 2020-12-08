const pool = require('../utils/pool');

module.exports = class Dogs {
    name;
    breed;
    age;
    nicknames;

    constructor(row) {
        this.id = row.id;
        this.name = row.name;
        this.age = row.age;
        this.nicknames = row.nicknames;
    }




}