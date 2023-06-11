const MongoClient = require('mongodb').MongoClient;

const fs = require('fs');
const filePath = './config/data.json';


// Đọc dữ liệu từ file
const rawData = fs.readFileSync(filePath);
const jsonData = JSON.parse(rawData);
const data = jsonData.results

// console.log(data,'........');

module.exports = data;


