var convert = require('xml-js');
var fs = require('fs');
var xml = fs.readFileSync('qualityinfo.xml', 'utf8');
var joptions = { spaces: 4, compact: false, ignoreComment: false, alwaysChildren: true };
var xoptions = { spaces: 4 };
var jsonresult = convert.xml2json(xml, joptions); // or convert.xml2json(xml, options) 
// result = JSON.stringify(result);
console.log(jsonresult);
var jsresult = convert.xml2js(xml, joptions);
console.log(jsresult);
fs.writeFile('qi_raw.txt', jsresult);
fs.writeFile('qualityinfo.json', jsonresult);
var xresult = convert.json2xml(jsonresult, xoptions);
fs.writeFile("qi.xml", xresult);
console.log(xresult);