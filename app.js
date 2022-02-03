const express = require('express');
const app = express();

require('./src/utils/db');
require('./src/route/user.route')(app);
PORT = 5000 || process.env.PORT
app.listen(PORT ,()=> console.log(`Server started at ${PORT}`));