const express = require('express');
const app = express();
const phone = require('./data.js'); 
// Importing data

app.get('/', (req, res) => {
    // res.json(phone); // Sending JSON data as response

    res.send('<h1>Home Page</h1><a href="/api/phone">Phone</a>');

});
// API route to return phone data as JSON
app.get('/api/phone', (req, res) => {
    const newItem = phone.map((product)=>{
        const{id,name,image} = product;
        return {id,name,image};
    })
    // res.json(phone);
    res.json(newItem)
});

app.listen(3000, () => {
    console.log("server started");
});
