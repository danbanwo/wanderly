var fs        = require('fs');
var path      = require('path');
var Sequelize = require('sequelize');
var basename  = path.basename(module.filename);


var fileArr =[];
 fs
 .readdirSync(__dirname) 
 .filter(function(fileName) {
    return (fileName.indexOf('.') !== 0) && (fileName !== basename) && (fileName.slice(-3) === '.js');
  })
 .forEach(function(fileName) {
 		fileArr.push(fs.readFileSync(fileName, 'utf8'));
 })

console.log(eval(fileArr[0]))