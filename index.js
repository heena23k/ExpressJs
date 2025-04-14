// nodemon automatic restart the server
// console.log("hii");


const express = require('express')
// create instance 
const app = express();
const path =  require('path')
// create an route home page
app.get('/',(req,res)=>{
    res.send('<h1>Hello word</h1>');
    // res.status(404).send('<h1>Hello how are u</h1>')
})
// contact page
app.get('/contact',(req,res)=>{
    res.send('<h1>contact</h1>')
})
app.get('/files',(req,res)=>{
    res.sendFile(path.join(__dirname,'demo.html'))
})
app.get('/jsonres',(req,res)=>{
    res.json([{
        firstname:'john',
        lastname:'Cena'
    },
    {
        firstname:'cody',
        lastname:'rhodes'
    }
])
})
// app.all('*', (req, res) => {
//     ressend('Page not found');
//   });
  
  
// create server 
app.listen(3000,()=>{
    console.log("Server is running.....");
    
})