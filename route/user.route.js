const express = require('express');
const userservice = require('../service/user');
const app = express();
 
module.exports = (app)=>{
    app.use(express.json());
    app.use('/api/user', userservice);
}