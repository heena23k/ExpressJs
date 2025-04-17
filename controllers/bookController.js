let books = [
    { id: 1, title: 'Book 1', author: 'Author1' },
    { id: 2, title: 'Book 2', author: 'Author2' }
  ];
  
  // GET all books
  const getBooks = (req, res) => {
    res.json(books);
  };
  
  // POST a new book
  const postBook = (req, res) => {
    console.log(req.body);
    const newBook = req.body;
    newBook.id = books.length + 1;
    books.push(newBook);
    res.status(201).json(books);
  };
  
  // PUT update book by ID
  const putBooks = (req, res) => {
    const id = parseInt(req.params.id);
    const updatedBook = req.body;
    const index = books.findIndex(book => book.id === id);
    if (index !== -1) {
      books[index] = { ...books[index], ...updatedBook };
      res.json(books[index]);
    } else {
      res.status(404).json({ error: 'Book not found' });
    }
  };
  
  // DELETE book by ID
  const deleteBook = (req, res) => {
    const id = parseInt(req.params.id);
    const index = books.findIndex(book => book.id === id);
    if (index !== -1) {
      const deletedBook = books[index];
      books.splice(index, 1);
      res.json(deletedBook);
    } else {
      res.status(404).json({ error: 'Book not found' });
    }
  };
  
  module.exports = {
    getBooks,
    postBook,
    putBooks,
    deleteBook
  };
  