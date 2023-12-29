"use strict";

const csvToJson = require("convert-csv-to-json");

const path = require("path");

const fileName = "Document from Ashfaq.csv";
const input = path.join(__dirname, "..", "DATA", fileName);
const output = path.join(__dirname, "..", "DATA", "products.json");
// function getJson(p) {
//   console.log({ p });
//   return csvToJson.fieldDelimiter(",").getJsonFromCsv(p);
// }
// console.log(getJson(input));

/* 
p = input path
o = output path
*/
function genarateJson(p, o, d) {
  csvToJson.fieldDelimiter(d).generateJsonFileFromCsv(p, o);
}

genarateJson(input, output, ",");

let json = csvToJson.supportQuotedField(true);
// import fs from "fs";
// import assert from "assert";
// import { parse } from "csv-parse";

// const records = [];
// // Initialize the parser
// const parser = parse({
//   delimiter: ",",
// });
// // Use the readable stream api to consume records
// parser.on("readable", function () {
//   let record;
//   while ((record = parser.read()) !== null) {
//     records.push(record);
//   }
// });
// // Catch any error
// parser.on("error", function (err) {
//   console.error(err.message);
// });
// // Test that the parsed records matched the expected records
// parser.on("end", function () {
//   //   assert.deepStrictEqual(records, [
//   //     ["root", "x", "0", "0", "root", "/root", "/bin/bash"],
//   //     ["someone", "x", "1022", "1022", "", "/home/someone", "/bin/bash"],
//   //   ]);
//   console.log(records);
// });
// // Write data to the stream
// parser.write("root:x:0:0:root:/root:/bin/bash\n");
// parser.write("someone:x:1022:1022::/home/someone:/bin/bash\n");

// fs.readFileSync("../DATA/Document from Ashfaq.csv");

// // Close the readable stream
// parser.end();
