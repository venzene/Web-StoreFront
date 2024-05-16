const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const session = require('express-session');
const MongoDBStore = require('connect-mongodb-session')(session);

const errorController = require('./controllers/error');
const User = require('./models/user');

const MONGODB_URI = 'mongodb+srv://mangal:mangalprasad@cluster0.xutnbhc.mongodb.net/shop?retryWrites=true&w=majority&appName=Cluster0';

const app = express();
const store = new MongoDBStore({
    uri: MONGODB_URI,
    collection: 'sessions'
});

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const authRoutes = require('./routes/auth');

// const { start } = require('repl');

app.use(bodyParser.urlencoded({ extended: false })); // these are middleware
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({secret:'my secret', resave: false, saveUninitialized: false, store: store}));

app.use('/admin', adminRoutes);
app.use(shopRoutes);
app.use(authRoutes);

app.use(errorController.get404);

mongoose.connect(MONGODB_URI)
.then( result => {
    User.findOne().then(user => {
        if(!user) {
            const user = new User({
                name: 'Mangal',
                email: 'Mangal@email.com',
                cart: {
                    items: []
                }
            });
            user.save();
        }
    })
    app.listen(3000);
    console.log('Connected !!')
})
.catch(err => console.log(err));

