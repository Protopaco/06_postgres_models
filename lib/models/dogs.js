const pool = require('../utils/pool');

module.exports = class Dogs {
    name;
    breed;
    age;
    nicknames;

    constructor(row) {
        this.id = row.id;
        this.breed = row.breed,
            this.name = row.name;
        this.age = row.age;
        this.nicknames = row.nicknames;
    }

    static async insert({ name, breed, age, nicknames }) {

        console.log('INSERT')
        const { rows } = await pool.query(`
        INSERT INTO dogs
        (name, breed, age, nicknames)
        VALUES($1, $2, $3, $4)
        RETURNING *`,
            [name, breed, age, nicknames]);
        console.log(rows[0])
        return new Dogs(rows[0]);
    }



}