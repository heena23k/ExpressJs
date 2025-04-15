const express = require('express')
const app = express();
const path = require('path');

// send the folder
app.use(express.static('Example'))
// only send file 
// app.get('/',(req,res)=>{
// res.sendFile(path.join(__dirname,'Example','index.html'))
// })
app.listen(3000,()=>{
    console.log("Server is running on 3000 port");
    
})