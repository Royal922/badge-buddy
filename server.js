
// Adding the Express Template
// express: the core library that helps you create a web server easily
// path: A built-in Node.js moduleto work with file and folder paths (helps keep fil paths consistent across OS)
// app: Your Express apllication instance - the main thing you use to configure your server
const express = require('express');
const path = require('path');
const expressLayouts = require('express-ejs-layouts');

const app = express();

// View engine setup
// Tells Express you're using EJS as your templating engine
// Sets the folder where your view templates are stored
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(expressLayouts);
app.set('layout', 'layout');

// Serve static files
// Serves static files like css, images, javaScript from the public folder
// So when the browser requests /css/styles.css, Express knows to look inside the public/css folder
app.use(express.static(path.join(__dirname, 'public')));

// Logger middleware
// Middleware is a function that runs on every request before your route handlers
// Here, it logs the date/time, HTTP method and requested URLS
// next() calls the next middleware or route handler - without it, the request would hang 
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()}  ${req.method} ${req.url}`);
  next();
});

// Routes
// Defines a route for the home page
// When someone visits /, it renders views/pages/home.ejs
// The { title: 'home'} part sends data (a variabe called title) to the EJS template
app.get('/', (req, res) => {
  res.render('pages/home', { title: 'Home', activePage: 'home'});
});
app.get('/badge-explorer', (req, res) => {
  res.render('pages/badge-explorer', { title: 'Badge Explorer', activePage: 'badge-explorer'});
});
app.get('/dashboard-girl', (req, res) => {
  res.render('pages/dashboard-girl', { title: 'Girl Dashboard'});
});
app.get('/dashboard-leader', (req, res) => {
  res.render('pages/dashboard-leader', { title: 'Leader Dashboard'});
});
app.get('/dashboard-admin', (req, res) => {
  res.render('pages/dashboard-admin', { title: 'Administrator Dashboard' });
});
app.get('/login', (req, res) => {
  res.render('pages/login', { title: 'Login', activePage: 'login' });
});
app.get('/signup', (req, res) => {
  res.render('pages/signup', { title: 'Sign Up', activePage: 'signup' });
});
app.get('/contact', (req, res) => {
  res.render('pages/contact', { title: 'Contact & Help', activePage: 'contact' });
});


// 404 page
// If no previous route matched, this middleware runs
// Sets HTTP status to 404 
app.use((req, res) => {
  res.status(404).render('pages/home', { title: 'Not Found' });
});

// Start server
// PORT is set either from your enviroment (like a hosting provider) or defaults to 3000.
// Starts the server, listening on that port
// Logs the URL to the console so you kno where to open it in your browser
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`http://localhost:${PORT}`));




/*
    The main Node.js script that runs your web server.
    It uses Express to handle HTTP requests (routes). tells where to find templates (views/), and static files (public/).
    Decides how to respond when users visit different URLS
*/

