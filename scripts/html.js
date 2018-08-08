const config = require('./config.js')
var path = require('path')
const fs = require('fs')

module.exports = function () {
  return new Promise((resolve, reject) => {
    console.log('start html')
    const html = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8">
        <title>${config.title}</title>
      </head>
      <body>
        <div id="app">
        </div>
        <script src="app.js"></script> 
      </body>
    </html>
    `
  
    fs.writeFile(config.distDir + '/index.html', html, function(err) {
        if(err) {
            return console.log(err);
        }
  
        console.log('end html')
        resolve()
    }); 
  });

}