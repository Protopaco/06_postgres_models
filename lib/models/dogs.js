const pool = require('../utils/pool');

module.exports = class Dog {
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
        const { rows } = await pool.query(`
        INSERT INTO dogs
        (name, breed, age, nicknames)
        VALUES($1, $2, $3, $4)
        RETURNING *`,
            [name, breed, age, nicknames]);

        return new Dog(rows[0]);
    }

    static async find() {
        const { rows } = await pool.query(`
        SELECT * FROM dogs ORDER BY id ASC
        `);

        return rows.map(row => new Dog(row))
    }

}