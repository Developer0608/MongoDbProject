const mongoose = require('mongoose');

class MongoDB {
    constructor(){
        console.log(">>>>>>>>>>>>>.")
        if(!MongoDB.instance){

            const URI = 'mongodb://localhost:27017/SinghProject';
            mongoose.connect(URI, {
                useNewUrlParser: true,
                useUnifiedTopology: true
            }, (err) => {
                if(err) {
                    console.error("[MONGO-DB-CONFIG]::Error:: Not Connected!!!");
                } else {
                    console.log("[MONGO-DB-CONFIG]::Connected!!!");
                }
            });

            // mongoose.connection.on("connection", () => {
            //     console.log("Connection establised");
            // })

            // mongoose.connection.on("error", (error) => {
            //     console.log("Connection error", error);
            // })
        }
    }

}

const mongoDB = new MongoDB();
Object.freeze(mongoDB);

module.exports = { mongoDB }