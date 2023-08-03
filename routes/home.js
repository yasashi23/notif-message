const express =require('express')
const router = express.Router()

const axios = require('axios')
const a20 = 'k-dfcac4ac5add'
const a71 = 'k-1df62120bdfe'



router.get("/",(req,res)=>{
    res.json({
        status:200,
        ini:"benar"
    })
})

router.post("/message",(req,res)=>{
    const dataFromUpw = req.body
    console.log(dataFromUpw)

    notif(dataFromUpw.title,`Desk:\n${dataFromUpw.deskripsi}\n\nSkills:\n${dataFromUpw.keahlian}`,"http://google.com")


    return res.send({success: 'kamu berhasil hore'})


})

async function notif(t,c,u){

    try{
        const url = 'http://xdroid.net/api/message?k='+a20
        const url2 = 'http://xdroid.net/api/message?k='+a71
        const data = {t,c,u}
        const config = {
            headers: {
                'Content-Type': 'application/json',
            },
        };

        const res = await axios.post(url,data,config)
        const res2 = await axios.post(url2,data,config)
        console.log('Respons', res.data, res2.data)
    }catch(err){
        console.error(err.message)
    }
        }



module.exports = router