const express = require(`express`);
const app = express();
const { use } = require("express/lib/application");
const { json } = require("express/lib/response");
const format = require(`./modules/format`)

// const { MongoConnection } = require("./mongo.js");
// const db = new MongoConnection();
// db.connect();

//App Config
app.set('port', process.env.PORT || 3000);
app.set('json spaces', 2);

//Middleware (procesa datos antes que el servidor los reciba)
const morgan = require(`morgan`);
app.use(morgan(`dev`)); //combined
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//Routes
app.use(`/api/post`, require(`./rutas/post.js`));
app.use(`/api/get`, require(`./rutas/get.js`));
app.use(`/api/patch`, require(`./rutas/patch.js`));
app.use(`/api/delete`, require(`./rutas/delete.js`));
app.use(`/api/getapi`, require(`./rutas/get-other-api`));

//Mongo Server
const { MongoConnection } = require("./modules/mongo");
const MongoClient = new MongoConnection();
MongoClient.connect();
const db = MongoClient.mongoose.connection
db.on('error', (error) => console.log(error));

//Server Start
app.listen(app.get(`port`), () =>  {
    console.log(`Servidor en el puerto ${app.get(`port`)}`);
});
