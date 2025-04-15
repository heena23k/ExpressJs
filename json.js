const express = require('express');
const app = express();
const phone = require('./data.js'); 
// Importing data

app.get('/', (req, res) => {
    // res.json(phone); // Sending JSON data as response

    res.send('<h1>Home Page</h1><a href="/api/phone">Phone</a>');

});
// API route to return phone data as JSON
// app.get('/api/phone/:phoneId', (req, res) => {
//     // const newItem = phone.map((product)=>{
//     //     const{id,name,image} = product;
//     //     return {id,name,image};
// // })
// const{phoneId} = req.params;
// console.log(req.params);

//     const singleProduct = phone.find((product)=> product.id===Number(phoneId))
//     if(!singleProduct){
//         res.status('404')
//     }
   
//     res.json(singleProduct)
//     // res.json(phone);
//     // res.json(newItem)
// });

// using query string 
app.get('/api/v1/query',(req,res)=>{
    let sortedPhone = [...phone];
    const{search,limit} = req.query;
    res.send("hiiiiiiiillllll");
    // console.log(req.query);
    
    res.send("hiiiiiiii")
})
app.listen(3000, () => {
    console.log("server started");
});
