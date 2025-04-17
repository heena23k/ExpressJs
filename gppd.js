const express = require('express');
const app = express();
app.use(express.json());

// In-memory book collection

let books = [
    { id:1,title:'Book 1', author:'Author1'},
    { id:2,title:'Book 2', author:'Author2'}
]
//get method 
app.get('/books',(req,res)=>{
    res.json(books)
})
// for post
app.post('/books',(req,res)=>{
    console.log(req.body);
    const newBook = req.body;
    newBook.id = books.length+1;
    books.push(newBook);
    // res.status(201).json(newBook)
    res.status(201).json(books)
    
})
// put method
app.put('/books/:id',(req,res)=>{
    const id = parseInt(req.params.id);
    const updatedBook = req.body;
    const index = books.findIndex(books=>books.id===id);
    if(index!==-1){
        books[index] = {...books[index],...updatedBook}
        res.json(books[index])
    }
else{
    res.status(404).json({error:'Book not found'})
}
})
app.delete('/books/:i',(req,res)=>{
    const id = parseInt(req.params.id);
    const index  = books.findIndex(book=>book.id===id);
     if(index!== -1){
        const deleteBook = books[index];
        books.splice(index,1);
        res.json(deleteBook);
     }
     else{
        res.sendStatus(404).json({error:'Book not found'})
     }
})
app.listen(3000,()=>{
    console.log('server has been started on port');
    
})