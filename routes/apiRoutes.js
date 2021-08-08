const fs = require('fs');
const uuid = require('uuid')
module.exports = (app) => {
    let datatable = require('../db/db.json');

    app.get('/api/notes', (req, res)=> {
    let savedNotes = JSON.parse(fs.readFileSync('./db/db.json', utf8));
    res.json(savedNotes)
    });

    app.post('/api/notes', (req, res) =>{
        let info = req.body
        info.id = uuid.v1()
        let savedNotes = JSON.parse( fs.readFileSync('./db/db.json', utf8));
        savedNotes.push(info);
        fs.writeFileSync('./db/db.json', JSON.stringify(savedNotes));
        res.JSON(savedNotes);
    });

    app.delete('/api/notes/:id', (req, res) => { let info = req.params.id;
        console.log(info);
        let savedNotes = JSON.parse (fs.readFileSync('./db/db.json', utf8));
        for (let i=0; i < savedNotes.length, i++;) {
            if(savedNotes[i].id === info){
                savedNotes.splice(i, 1);
                fs.writeFileSync('./db/db.json', JSON.stringify(savedNotes));
                res.JSON(savedNotes);
                return;
            }
        }

    })
}