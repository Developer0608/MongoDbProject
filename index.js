const express = require('express');
const { default: mongoose } = require('mongoose');
const app = express();
const PORT = 8000;
const { mongoDB } = require('./repository/MongoDdConfig');

// const uri  = 'mongodb://localhost:27017/SinghProject';
// mongoose.connect(uri, (error) => {
//     if(error){
//         console.log('ERROR : ', error);
//     }

//     else{
//         console.log('CONNECTED');
//     }
// });



app.listen(PORT, () => {
    console.log('server is runnning on ', PORT);
})
