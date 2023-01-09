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
