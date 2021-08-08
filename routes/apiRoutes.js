const database = require('./db/db.json');
const fs = require('fs');

module.exports = (app) => {
    app.get('/api/notes', (req, res) =>
    res.json(database)
    );

    app.post('/api/notes', (req, res) =>
    database.push(req.query).send())
}