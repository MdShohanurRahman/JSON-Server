const fs = require('fs');
const faker = require('faker');

var data = fs.readFileSync('demo.json').toString();
var people = JSON.parse(data)
console.log(people);

people.forEach(element => {
    console.log(element.name);

});