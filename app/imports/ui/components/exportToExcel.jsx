import React from 'react';
import { ExportToCsv } from 'export-to-csv';

class exportToExcel extends React.Component {

  render() {
    const data = [
      {
        name: 'Test 1',
        age: 13,
        average: 8.2,
        approved: true,
        description: "using 'Content here, content here' ",
      },
      {},
      {
        name: 'Test 2',
        age: 11,
        average: 8.2,
        approved: true,
        description: "using 'Content here, content here' ",
      },
      {
        name: 'Test 4',
        age: 10,
        average: 8.2,
        approved: true,
        description: "using 'Content here, content here' ",
        test: 1,
      },
    ];


    const options = {
      fieldSeparator: ',',
      quoteStrings: '"',
      decimalSeparator: '.',
      showLabels: false,
      showTitle: true,
      title: 'My Awesome CSV',
      useTextFile: false,
      useBom: true,
      useKeysAsHeaders: false,
      // headers: ['Column 1', 'Column 2'] // <-- Won't work with useKeysAsHeaders present!

    };

    const csvExporter = new ExportToCsv(options);

    return (

        csvExporter.generateCsv(data)

    );
  }
}

export default exportToExcel;


/**
class exportToExcel extends React.Component {

  render() {

    const rows = [
      ["name1", "city1", "some other info"],
      ["name2", "city2", "more info"]
    ];

    let csvContent = "data:text/csv;charset=utf-8,"
        + rows.map(e => e.join(",")).join("\n");

    var encodedUri = encodeURI(csvContent);


    return (
        window.open(encodedUri)
    );
  }
}

export default exportToExcel;
*/