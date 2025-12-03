var express = require('express');
var router = express.Router();
var venuController = require("../controller/VenueController");
var commentController = require("../controller/CommentController");

router
.route("/venues")
.get(venuController.listVenues)
.post(venuController.addVenue);

router
.route("/venues/:venueid")
.get(venuController.getVenue)
.put(venuController.updateVenue)
.delete(venuController.deleteVenue);

router
.route("/venues/:venueid/comments")
.post(commentController.addComment)

router 
.route("/venues/:venueid/comments/:commentid")
.get(commentController.getComment)
.put(commentController.updateComment)
.delete(commentController.deleteComment);

module.exports = router;
