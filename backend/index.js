const express = require('express');
const app = express();
const port = 5000;
var cors = require('cors');
const fileupload = require('express-fileupload');
const send_to_api = require('./send_to_api');
//YnTxqzD99Hwu55tsbV7Mkn4c - api key
app.use(cors());
app.use(fileupload());
app.use('/no_bg_img',express.static('no_bg_img'));
app.use('/uploaded_image',express.static('uploaded_image'));

app.post('/upload_file',(req,res)=>{
    let d = new Date();
    let time = d.getTime();
    let color = req.body.color;
    let fileName =time + '_' + req.files.file.name;
    let file_path = __dirname+'/uploaded_image/'+fileName;
    req.files.file.mv(file_path,async err=>{
        if(err){
            
            console.log(err)
        }else{
            console.log('uploded!');
            await send_to_api(file_path,fileName ,color);
            res.send(fileName);
        }
    })
})

app.listen(port,()=>{
    console.log(`Example app listening on port ${port}`);
})