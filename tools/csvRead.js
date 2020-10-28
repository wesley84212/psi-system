'use strict'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const fs = require('fs');

const filterFunc = (product) => {
    if (product[0] === '') {
        return true
    } else if (product[0] === '商品編號') {
        return true
    } else if (product[0] === '刷大戶') {
        return true
    } else if (product[0] === '刷中信') {
        return true
    } else if (product[2].indexOf("自用") > -1) {
        return true
    }
}

fs.readFile('./inputCsv10.csv', 'utf8', function (err, data) {
    let dataArray = data.split(/\r?\n/);
    let jsonData = []
    dataArray = dataArray.map((product) => {
        let productSp = product.split(',')

        return productSp
    }).forEach((product) => {
        if (filterFunc(product)) { return }

        let status = 1;
        if (product[3] === '') {
            status = 0
        }
        let productObject = {
            "name": product[2],
            "quantity": 1,
            "cost": product[5],
            "purchaseDate": `2020/${product[1]}`,
            "status": status
        };
        if (status !== 0) {
            productObject.sales = {
                saleDate: `2020/${product[6]}`,
                saleAmount: product[3],
                saleCharge: product[4]
            }
            productObject.income = Number(productObject.sales.saleAmount) - (Number(productObject.cost) + Number(productObject.sales.saleCharge)) || 0;
        }
        jsonData.push(productObject)
    })
    fs.appendFile('./inputCsv10.json', JSON.stringify(jsonData), function (err) {
        if (err)
            console.log(err);
        else
            console.log('Append operation complete.');
    });
});