var mongoose = require('mongoose');
var Venue = mongoose.model("venue");

const createResponse = function(res,status,content){
    res.status(status).json(content);
}

const listVenues = function(req,res){
    createResponse(res, 200, {"status" : "basarılı"});
}

const addVenue = function(req,res){
    createResponse(res, 200, {"status" : "basarılı"});
}

const getVenue = function(req,res){
    createResponse(res, 200, {"status" : "basarılı"});
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