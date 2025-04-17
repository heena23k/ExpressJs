const express = require('express'); // ✅ Corrected
const app = express(); // ✅ Corrected

const bookRoutes = require('./routes/bookRoutes'); // Make sure this path is correct

app.use(express.json()); // Middleware to parse JSON
app.use('/', bookRoutes); // Mount routes

app.listen(3000, () => {
    console.log('Server has been started on port 3000');
});

