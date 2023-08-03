const express =require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const home = require("./routes/home")

app.use(cors())
app.use(bodyParser.json());

app.use("/routes/home",home)




app.listen(3000,()=>{
    console.log("berjalan")
})