const express = require('express');

const exphs = require('express-handlebars');
const hbs = exphs.create({});
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.use(express.static(path.join(__dirname, 'public')));
app.use(require(''));

app.listen(PORT, () => {
    console.log('Server listening on: http://localhost:' + PORT);
})