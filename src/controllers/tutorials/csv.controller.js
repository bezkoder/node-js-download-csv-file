const db = require("../../models");
const Tutorial = db.tutorials;

const CsvParser = require("json2csv").Parser;

const download = (req, res) => {
  Tutorial.findAll().then((objs) => {
    let tutorials = [];

    objs.forEach((obj) => {
      const { id, title, description, published } = obj;
      tutorials.push({ id, title, description, published });
    });

    const csvFields = ["Id", "Title", "Description", "Published"];
    const csvParser = new CsvParser({ csvFields });
    const csvData = csvParser.parse(tutorials);

    res.setHeader("Content-Type", "text/csv");
    res.setHeader("Content-Disposition", "attachment; filename=tutorials.csv");

    res.status(200).end(csvData);
  });
};

module.exports = {
  download
};
