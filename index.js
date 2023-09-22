const express = require('express');
const app = express();
const port = 8000;

const db = require('./config/mongoose');
const expressLayouts = require('express-ejs-layouts');
const cookieParser = require('cookie-parser');//importing cookie-parser
app.use(express.static('./assets'));

app.use(expressLayouts);

app.use(express.urlencoded());
app.use(cookieParser());



app.set('layout extractStyles', true);
app.set('layout extractScripts', true);

app.set('view engine', 'ejs');
app.set('views', './views');




app.use('/', require('./routes'));

app.listen(port, function(err){
	if(err){
		console.log("Error in starting server", err);
	}
	console.log(`Server is running on port ${port}`);
})