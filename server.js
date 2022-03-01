// Sets up required packages
const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const routes = require('./controllers');
const helpers = require('./utils/helpers');
const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

// Utilizes express and sets up PORT
const app = express();
const PORT = process.env.PORT || 3001;

// Creates cookies session
const sess = {
  secret: 'Super secret secret',
  cookie: {
    maxAge: 86400,
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sess));

// Equips Helpers tools
const hbs = exphbs.create({ helpers });

// Uses handlebars as view engine
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// Sets public as directory for JS
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

// Sets up server listener 
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening at http://localhost:' + PORT));
}); 