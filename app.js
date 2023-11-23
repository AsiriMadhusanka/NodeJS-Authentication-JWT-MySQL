require("dotenv").config();
const express = require("express");
const app = express();
const userRouter = require("./api/users/user.router");

app.use(express.json());


app.use("/api/users", userRouter);

const port = process.env.APP_PORT || 4000;
app.listen(port, () => {
  console.log("server up and running on PORT :", port);
});







// const mysql = require("mysql");

// const app = express();

// const db = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: '',
//     database: 'nodejs-login'
// });

// db.connect( ( error) =>{
//     if(error) {
//         console.log(error)
//     } else {
//         console.log("MYSQL Connected...")
//     }
// })

// app.get("/", (req, res) => {
//     res.send("<h1>Home Page</h1>")
// });

// app.listen(5000, () => {
//     console.log("Server started on port 5000");
// })