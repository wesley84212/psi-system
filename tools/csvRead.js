'use strict'

const fs = require('fs');
fs.readFile('./testCsv.csv', 'utf8', function (err, data) {
    let dataArray = data.split(/\r?\n/);
    let jsonData = []
    dataArray = dataArray.map((product) => {
        let productSp = product.split(',')

        return productSp
    }).forEach((product) => {
        let status = 1;
        if (product[3] === '') {
            status = 0
        }
        if (product[0] === '') {
            return
        } else if (product[0] === '商品編號') {
            return
        } else if (product[0] === '刷大戶') {
            return
        } else if (product[0] === '刷中信') {
            return
        }
        let productObject = {
            "name": product[2],
            "quantity": 1,
            "cost": product[5],
            "purchaseDate": `2020/${product[1]}`,
            "status": status
        }
        jsonData.push(productObject)
    })
    fs.appendFile('./test.json', JSON.stringify(jsonData), function (err) {
        if (err)
            console.log(err);
        else
            console.log('Append operation complete.');
    });
});