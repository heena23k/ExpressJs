const  express = require('express');
const morgan = require('morgan');
const app = express();

const logger =  require("morgan");
// create middlewarw
// const logger = (req,res,next)=>{
//     console.log(`${new Date()},Request[${req.method},[${req.url}]]`);
//     next();  
// }
// // again create 1 more middleware
// const authorized = (req,res,next)=>{
//     console.log("I am 2nd one");
//     next();  
// }
// // Use the middleware for all routes
// app.use(logger);
// app.use(authorized)
// // we use bothe middleware in store in arr eg app.use([authorized,logger])

// using morgan third party middleware
app.use(morgan('dev'))

// // Example route
app.get('/', (req, res) => {
    res.send('Home Page');
});
app.get('/about', (req, res) => {
    res.send('About');
});
app.get('/contact', (req, res) => {
    res.send('Contact');
});


app.listen(3000,()=>{
    console.log("Server has been started...");
    
})