const express = require('express');
const routes = require('./routes');
const handlebars = require('express-handlebars');
require('./database/index');

const app = express();

app.engine('handlebars', handlebars.engine({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.static('public'));
app.use(routes);

app.listen(8080, () => {
    console.log(`Server ON! ✅`);
});
