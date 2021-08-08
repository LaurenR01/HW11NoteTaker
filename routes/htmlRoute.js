const path = require('path');

module.export = (app) => {

    app.get('*', (req, res) =>{
        res.sendFile(path.join(__dirname, './public/assets/index.html'));
    })
    
    app.get('/notes', (req, res) => {
        res.sendFile(path.join(__dirname, './public/assets/notes.html'));
    })
}