var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");

var PORT = process.env.PORT || 3030; // Sets an initial port.

var app = express();

// Public
app.use(express.static(process.cwd() + "/public"));

app.use(bodyParser.urlencoded({ extended: false }));

// Override
app.use(methodOverride("_method"));

// Handlebars
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Routes
var routes = require("./controllers/burgers_controller.js");

app.use("/", routes);

app.listen(PORT, () => console.log(`Listening on port ${PORT}...`)
);