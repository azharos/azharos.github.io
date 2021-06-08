const express = require('express')
const app = express()
const expressLayouts = require('express-ejs-layouts');

app.set('view engine', 'ejs');
 
app.use(expressLayouts);
app.use(express.static('asset'));
 
app.get('/', function (req, res) {
    res.render('index', {
        layout : 'layout/main'
    });
})
 
app.listen(3000, () => console.log('Server dijalankan Port 3000'));