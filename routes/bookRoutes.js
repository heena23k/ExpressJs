const express = require('express');
const bookController = require('../controllers/bookController'); // ✅ Make sure this path is correct
const router = express.Router();

// Routes
router.get('/books', bookController.getBooks);
router.post('/books', bookController.postBook);
router.put('/books', bookController.putBooks);
router.delete('/books', bookController.deleteBook);

module.exports = router;
