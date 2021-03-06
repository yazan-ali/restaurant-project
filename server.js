const express = require('express');
const cors = require('cors')
const app = express();
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
const passport = require("passport");
const path = require('path')
var session = require('express-session')
var MemoryStore = require('memorystore')(session)

const pizzaRoutes = require("./routes/pizza");
const pastaRoutes = require("./routes/pasta");
const dessertRoutes = require("./routes/dessert");
const startersRoutes = require("./routes/starters");
const dealsRoutes = require("./routes/deals");
const userRoutes = require("./routes/user");
const cartRouts = require("./routes/cart");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "https://limitless-beyond-06124.herokuapp.com",
    credentials: true,
  })
);

mongoose.connect("mongodb+srv://yazan1ali:yazan154ali@cluster0-x9sw4.mongodb.net/<dbname>?retryWrites=true&w=majority", {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true
});
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
});

app.use(session({
  cookie: { maxAge: 86400000 },
  store: new MemoryStore({
    checkPeriod: 86400000
  }),
  secret: 'keyboard cat'
}))


//passport configuer
app.use(require("express-session")({
  secret: "secretcode",
  resave: false,
  saveUninitialized: false
}));

app.use(cookieParser("secretcode"));


app.use(passport.initialize());
app.use(passport.session());
require("./passportConfig")(passport);

app.use(function (req, res, next) {
  res.locals.currentUser = req.user;
  next();
});

app.use(pizzaRoutes);
app.use(pastaRoutes);
app.use(dessertRoutes);
app.use(startersRoutes);
app.use(dealsRoutes);
app.use(userRoutes);
app.use(cartRouts);

// serve static assets if in production
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
}

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});