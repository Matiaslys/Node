var http = require('http')
var dt = require('./myfirstmodule')
var fs = require('fs')

http.createServer(function (req, res) {
    fs.readFile('demofile.html', function(err, data) {
        res.writeHead(200, {'Content-Type': 'text/html'})
        res.write(data)
        res.write("Hello World! ")
        res.write("The date and time are currently: " + dt.myDateTime())
        res.end()
    })
}).listen(8080)