const express = require('express');
const path = require('path');
const app = express();
const fs = require('fs')
const uuid = require('uuid');
// Data
const data = fs.readFileSync('./db/db.json', 'utf-8');
const savedNotes = JSON.parse(data);


const PORT = process.env.PORT || 3001;
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static("public"));

// HTML Routes

app.get('/', (req, res) =>{
  res.set('Content-type', 'text/html')
  res.sendFile(path.join(__dirname,'/public/index.html'));
});

app.get('/notes', (req, res) => {
  res.set('Content-type', 'text/html')
  res.sendFile(path.join(__dirname,'/public/notes.html'));
});

app.get('assets/js/index.js', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/assets/js/index.js'))
});
app.get('assets/css/styles.css', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/assets/css/styles.css'))
});

// API Routes

app.get('/api/notes', (req, res)=> {
res.set('Content-Type', 'application/json');
res.sendFile(path.join(__dirname, '/db/db.json'))
});

app.post('/api/notes', (req, res) =>{
    let info = req.body
    let newID = uuid.v1(4)
    info.id = newID
    savedNotes.push(info);

    saveNote(savedNotes);
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

// To save a note

const saveNote = (notes) => {
  fs.writeFile(
    path.join(__dirname, './db/db.json'),
    JSON.stringify(notes),
    console.log("Note Saved!")
  )
};



app.listen(PORT, () => {
    console.log(`App listening on PORT: ${PORT}`);
  });
  