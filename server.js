//Dependencies
const express = require('express');
const path = require('path');
const routes = require('./controllers');
const helpers = require('./utils/helpers');

// To Import express-handlebars
const exphbs = require('express-handlebars');
// Handlebars.js engine with custom helpers
const hbs = exphbs.create({ helpers });
const session = require('express-session');

// express app
const app = express();
const PORT = process.env.PORT || 3001;

// Set up sessions
const sess = {
    secret: 'Super secret secret',
    cookie: {
      // Stored in milliseconds
      maxAge: 60 * 60 * 1000, // expires after 1 hour
    },
    resave: false,
    saveUninitialized: true,
  };
  app.use(session(sess))
