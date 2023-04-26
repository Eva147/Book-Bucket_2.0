const express = require("express");
const app = express();

// set view engine to use EJS as a templating engine
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
	res.render('/client/src/App.js');
})

app.listen(5050, () => {
	console.log(`Server is running on port 5050.`);
});
