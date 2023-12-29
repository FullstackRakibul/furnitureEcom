"use strict";
const csvParser = require("csv-parse");
const path = require("path");
const fs = require("fs");

const inputFile = path.resolve(
  __dirname,
  "..",
  "DATA",
  "Document from Ashfaq.csv"
);
const parser = csvParser.parse(
  {
    delimiter: ",",
    quote: true,
  },
  (err, records) => {
    if (err) throw err;
    console.log({ records });
    writeToJson(records);
  }
);

fs.createReadStream(inputFile).pipe(parser);

function generateJsonFromArr(arr) {
  const propertiesItem = arr[0];
  console.log({ propertiesItem });
  const jsonArr = [];
  for (let i = 1; i <= arr.length; i++) {
    const item = arr[i];
    if (!item) {
      console.log({ item });
    }

    const _part = propertiesItem.reduce((prev, cur, idx) => {
      if (item[idx]) {
        prev[cur] = item[idx];
      }
      return prev;
    }, {});
    jsonArr.push(_part);
  }
  return JSON.stringify(jsonArr);
}

function writeToJson(array) {
  const output = path.resolve(__dirname, "..", "DATA", "p.json");

  const writer = fs.createWriteStream(output);

  writer.write(generateJsonFromArr(array));
}
