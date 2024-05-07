const express = require('express');
const BodyParser = require('body-parser');
const path = require('path');
const app = express();

app.set('view engine', 'pug'); // view engine tells which t-engine to use
app.set('views', 'views'); // views tells where to find those templating files, (in our case, in views folder)

const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(BodyParser.urlencoded({extended: false}));

app.use(express.static(path.join(__dirname, 'public')));
app.use('/admin', adminData.route);
app.use(shopRoutes);

app.use((req,res,next)=> {
    res.status(404).render('404',{pageTitle: 'Page Not Found'});
})

app.listen(3000);