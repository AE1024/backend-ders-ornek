var mongoose = require('mongoose');
var Venue = mongoose.model("venue");

const createResponse = function(res,status,content){
    res.status(status).json(content);
}

const listVenues = async function(req,res){
    try {
        Venue.find().exec().then(function(venues){
            createResponse(res, 200, venues);
        });
        //Venue.find().select("rating").exec().then(function(venues){ //sadece rating alanını getir
        //    createResponse(res, 200, venues);
        //})
    } catch (error) {
        createResponse(res, 404, {"status" : "mekan bulunamadı"});

    }
}

const addVenue = function(req,res){
    createResponse(res, 200, {"status" : "basarılı"});
}

const getVenue =async function(req,res){
    try{
        await Venue.findById(req.params.venueid).exec().then(function(venue){
            createResponse(res, 200, venue);
        });

    }catch(err){
        createResponse(res, 404, {"status" : "mekan bulunamadı"});
    }
    //createResponse(res, 200, {"status" : "venu basarılı"});
}

const updateVenue = function(req,res){
    createResponse(res, 200, {"status" : "basarılı"});
}

const deleteVenue = function(req,res){
    createResponse(res, 200, {"status" : "basarılı"});
}

module.exports = {
    listVenues,
    addVenue,
    getVenue,
    updateVenue,
    deleteVenue
}