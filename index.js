const express =require('express')
const app = express()

const home = require("./routes/home")

app.use(cors())
app.use(bodyParser.json());

app.use("/routes/home",home)




app.listen(3000,()=>{
    console.log("berjalan")
})