const express =require('express')
const router = express.Router()

const axios = require('axios')
const a20 = 'k-dfcac4ac5add'
const a71 = 'k-15528d2b9b65'



router.get("/",(req,res)=>{
    res.json({
        status:200,
        ini:"benar"
    })
})

router.post("/message",(req,res)=>{
    return res.send({status:200,success: 'kamu berhasil hore'})


})

async function notif(skillCome,il,judul,reqBody){
    let newS = []
    for(let i = 0; i < skillCome.length; i++){
        const iniloh = il.findIndex(el => el === skillCome[i])
        if(iniloh < 0) {
            const ygbeda = skillCome[i]
            newS.push(ygbeda)
            
        }
    }
    try{
        const sklJ = skillCome.join()
        const url = 'http://xdroid.net/api/message?k='+a20
        const url2 = 'http://xdroid.net/api/message?k='+a71
        const data = {t:"Job Baru",c:`${judul}\n${sklJ}`}
        const config = {
            headers: {
                'Content-Type': 'application/json',
            },
        };

    
        if(newS.length === 0 ){
            const res = await axios.post(url,data,config)
            const res2 = await axios.post(url2,data,config)
            console.log('Respons', res.data, res2.data)
        console.log("ini boleh cocok")
    }else{
        console.log("ini ada yg beda",newS)
    }
    const tulis = await fs.writeFileSync('data.json', JSON.stringify(reqBody))

    }catch(err){
        console.error(err.message)
    }


}

module.exports = router