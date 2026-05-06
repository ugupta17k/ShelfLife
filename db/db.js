const mongoose = require("mongoose")


function ConnectTODb(){
    mongoose.connect(process.env.MONGODB_URI)
    .then(()=>{
        console.log("server connected to DB");
    })
    .catch((err)=>{
        console.error("Error connecting to DB", err)
    })
}

module.exports = {
    ConnectTODb
}
