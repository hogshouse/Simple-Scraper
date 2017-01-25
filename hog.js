var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');

request("http://www.imdb.com/name/nm0000216/?ref_=nv_sr_1", function(error, response, body) {
  if(error) {
    console.log("Error: " + error);
  }
  console.log("Status code: " + response.statusCode);

  var $ = cheerio.load(body);

  $('#name-overview-widget').each(function( index ) {
    var title = $(this).find('h1.header').text().trim();

    console.log("Who is the biggest hog: " + title);

    fs.appendFileSync('log.txt', title + '\n');
  });

});
