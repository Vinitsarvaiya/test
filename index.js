const express = require('express')
const multer = require('multer')
const path = require('path')
const fileupload = require('express-fileupload')

const app = express()
app.use(fileupload())
app.use(express.json());

// const upload = multer({
//     storage:multer.diskStorage({
//         destination:function(req,res,cb){
//             cb(null,'public')
//         },
//         filename:function(req,res,cb){
//             cb(null,res.filename +"-"+Date.now()+".jpg")
//         }
//     })
// }).array("user_photo",2) 

// app.post('/upload',upload,(req,res)=>{
//     res.send("upload")
// })

app.get('',(req,res)=>{
    res.sendFile(path.join(__dirname,'index.html'))
})

app.post('/',(req,res)=>{
    console.log(req.files)
    const filename = req.files.file.name;
    req.files.file.mv(__dirname+'/public/'+Math.random()*3+filename)
    res.send('uploaded')
})

app.listen(3000)