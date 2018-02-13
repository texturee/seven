

var connect = require('connect');
var serveStatic = require('serve-static');

const port = process.env.PORT || 3000
connect().use(serveStatic(__dirname)).listen(port, function () {
  console.log(`Server running on ${port}`);
});



