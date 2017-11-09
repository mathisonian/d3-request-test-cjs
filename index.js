

const d3 = require('d3-request');

d3.json('/data/my-data.json', function(err, data) {
  console.log(err, data);
});

