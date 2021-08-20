const fs = require('fs');
const uuid = require('uuid')
module.exports = (app) => {
    const data = fs.readFileSync('../db/db.json', 'utf-8');
    const savedNotes = JSON.parse(data);


    app.get('/api/notes', (req, res)=> {
    res.set('Content-Type', 'application/json');
    res.sendFile(path.join(__dirname, '/db/db.json'))
    });

    app.post('/api/notes', (req, res) =>{
        let info = req.body
        let newID = uuid.v1()
        info.id = newID
        savedNotes.push(info);

        savedNote(savedNotes);
        res.sendFile(info);
    });

    app.delete('/api/notes/:id', (req, res) => { 
        let info = req.params.id;
        for (let i=0; i < savedNotes.length, i++;) {
            if(savedNotes[i].id === info){
                savedNotes.splice(i, 1);
                
            }
        }
            saveNote(savedNotes);
            res.end();
    })
}