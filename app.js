const express = require('express');
const config = require('./src/config.js');
const app = express();

app.set('view engine', 'ejs');
app.set('views', 'src/web/views');

app.use('/', require('./src/web/router.js'));


app.listen(config.express.port, () => {
    console.log(`Listening on :${config.express.port}`);
});