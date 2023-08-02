const express =require('express')
const app = express()

const home = require("./routes/home")

app.use(cors())
app.use(bodyParser.json());

app.use("/home",home)




app.listen(3000,()=>{
    console.log("berjalan")
})