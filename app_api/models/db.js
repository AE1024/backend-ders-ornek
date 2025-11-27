var mongoose = require('mongoose');
var dbURI = 'mongodb+srv://anildb:elmaZ1024BERK@mycluster.nnz7cv3.mongodb.net/mekanbul?appName=myCluster';
mongoose.connect(dbURI); 
mongoose.connection.on("connected", function(){
    console.log("Mongoose " + dbURI + " adresindeki veritabanına bağlandı.");
});

mongoose.connection.on("error",function(){
    console.log("Mongoose bağlantı hatası.");
});
 
mongoose.connection.on("disconnected", function(){
    console.log("Mongoose bağlantısı kesildi.");
});
process.on("SIGINT",function(){
    mongoose.connection.close();
    console.log("Mongoose uygulama sonlandırma nedeniyle kapandı.");
    process.exit(0);
});
require("./venue");