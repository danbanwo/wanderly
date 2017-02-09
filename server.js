var express = require('express')
var app = express()
var bodyparser = require('body-parser')
var multer = require('multer')
var path = require('path')
var db = require('./back/models')


app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json())
app.use(express.static('front/public'))

app.use("/api", require('./back/routes'))

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, '/front/views/index.html'))
})


db.sequelize.sync().then(function() {
	
  app.listen(3000, () => console.log('Server running on Port 3000'))
})

module.exports = app
