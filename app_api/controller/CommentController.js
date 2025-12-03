var mongoose = require('mongoose');
var Venue = mongoose.model("venue");

const createResponse = function(res,status,content){
    res.status(status).json(content);
}
const addComment = function(req,res){
    createResponse(res, 200, {"status" : "basarılı"});
}
const getComment = function(req,res){
    createResponse(res, 200, {"status" : "basarılı"});
}
const updateComment = function(req,res){
    createResponse(res, 200, {"status" : "basarılı"});
}
const deleteComment = function(req,res){    
    createResponse(res, 200, {"status" : "basarılı"});
}

module.exports = {
    addComment,
    getComment,
    updateComment,
    deleteComment
}