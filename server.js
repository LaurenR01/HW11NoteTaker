const express = require('express');
const apiRoutes = require('./routes/apiRoutes');
const app = express();
const PORT = process.env.PORT || 3301;

app.use(express.json());

// require ('/routes/apiRoutes')(app);
// require ('/routes/htmlRoutes')(app);

app.listen(PORT, () => {
    console.log(`App listening on PORT: ${PORT}`);
  });
  