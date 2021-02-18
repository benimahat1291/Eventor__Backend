
//Importing 
const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');
const routes = require('./api_routes');

//app configs
const app = express()
const port = process.env.PORT || 9001

// middleware
app.use(express.json())
app.use(cors())

//DB configs
const connection_url = 'mongodb+srv://admin:QZVvkgzT3ptj8gIm@cluster0.a1gsr.mongodb.net/eventdb?retryWrites=true&w=majority'
mongoose.connect(connection_url, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
})


const db = mongoose.connection

//api routes
app.use(routes)
//litsener

app.listen(port, () => console.log(`Listening on localhost: ${port}`))


















// //importing
// const express = require("express");
// const mongoose = require("mongoose");
// const routes = require("./backend/routes");
// const app = express();
// const PORT = process.env.PORT || 3001;

// // Define middleware here
// app.use(express.urlencoded({ extended: true}));
// app.use(express.json());
// // Serve up static assets (usually on heroku)
// if (process.env.NODE_ENV === "production") {
//   app.use(express.static("client/build"));
// }
// // Add routes, both API and view
// app.use(routes);

// app.get("*", (req, res) => {
//     res.sendFile(path.join(__dirname, "./client/build/index.html"));
//   });

// // Connect to the Mongo DB
// mongoose.connect(
//     process.env.MONGODB_URI || 'mongodb://localhost/dbname',
//     {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//       useCreateIndex: true,
//       useFindAndModify: false
//     }
//   );

// // Start the API server
// app.listen(PORT, function() {
//   console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
// });
