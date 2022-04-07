const express = require("express");
const connection = require("./db");
const auth = require("./route/auth")
const app = express();
//use middlewere for json file
app.use(express.json())

const PORT = 8000



connection();


//routes

app.use("/api/v1/auth",auth)




//listen


app.listen(PORT,()=> {
    console.log("Server running at port " + PORT)
});