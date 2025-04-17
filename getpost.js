const express = require('express');
const app = express()
app.use(express.static('public'))
// for post metho
app.use(express.urlencoded({extended:false}))

let books = [
    { id:1,title:'Book 1', author:'Author1'},
    { id:2,title:'Book 2', author:'Author2'},
    { id:3,title:'Book 3', author:'Author3'},

]
// get method
app.get('/books',(req,res)=>{
    res.json(books);
})
//post method
app.post('/books',(req,res)=>{
    console.log(req.body);
    
const newBook ={
    id:books.length+1,
    title:req.body.title,
    author:req.body.author
};
books.push(newBook);
res.status(201).json(books);
// res.status(201).json(newBook);
})
app.listen(3000,()=>{
    console.log("started server");
    
})