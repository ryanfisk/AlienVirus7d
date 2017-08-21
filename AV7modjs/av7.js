const util = require('util');
var fs = require('fs'),
    xml2js = require('xml2js');

var parser = new xml2js.Parser();
fs.readFile(__dirname + '/qualityinfo.xml', function(err, data) {
    parser.parseString(data, function(err, result) {
        console.dir(util.inspect(result, false, null)); //console.log(util.inspect(result, false, null))
        console.log('Done');
    });
});