let express = require('express'),
    app = express();
let PORT = process.env.PORT || 8081;
app.use(express.static(__dirname + '/public'));

app.listen(PORT);
console.log(`App started on port ${PORT}`);