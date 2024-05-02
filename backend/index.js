const express = require('express');
const app = express();
const port = 5000;
var cors = require('cors');
const fileupload = require('express-fileupload');

app.use(cors());
app.use(fileupload());

app.post('/upload_file',(req,res)=>{
    console.log(req.body);
    res.send('Hello World!');
})

app.listen(port,()=>{
    console.log(`Example app listening on port ${port}`);
})