const express = require('express');
const path = require('path');
const app = express();
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

const PORT = process.env.PORT || 3301;

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static("public"));


app.use('apiRoutes.js', apiRoutes)(app);
app.use('htmlRoutes.js', htmlRoutes)(app);

app.listen(PORT, () => {
    console.log(`App listening on PORT: ${PORT}`);
  });
  