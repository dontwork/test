const config = require('./config')

const clean = require('./clean')
const html = require('./html')
const wright = require('./wright')

clean()
.then(html)
.then(wright)