const fs = require('fs');
const faker = require('faker');
var data = [];
for (var i = 0; i < 10; i++) {
    obj = {};
    obj.id = i + 1;
    obj.name = faker.name.findName();
    obj.email = faker.internet.email();
    obj.address = {
        city: faker.address.city(),
        country: faker.address.country()
    }
    data.push(obj);
}

fs.writeFile('demo.json', JSON.stringify(data), function (err, data) {
    console.log('File Created Successfully');

});