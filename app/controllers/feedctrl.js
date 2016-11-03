var mongoose = require("mongoose");
var Feed = require("../models/feedmodel.js");

module.exports = {
  createFeed: function(req, res) {
    var dateCreated = new Date();
    var publishedOn = dateCreated.getDate() + '-' + (dateCreated.getMonth() + 1) + '-' + dateCreated.getFullYear() + ' ' + dateCreated.getHours() + ':' + dateCreated.getMinutes() + ':' + dateCreated.getSeconds();

    var newfeed = new Feed({
      title: req.body.title,
      content: req.body.content,
      created: publishedOn
    });

    newfeed.save(function(err, newfeed) {
      if (err) {
        res.status(400).json(err);
      }
      res.status(200).json({
        success: "Feed created",
        data: newfeed
      });
    });
  },

  getFeeds: function(req, res) {
    Feed.find({}, function(err, feeds) {
      if (err) {
        res.status(400).json(err);
      }
      res.status(200).json(feeds);
    });
  },

  getFeedbyId: function(req, res) {
    Feed.findById(req.params.id, function(err, feed) {
      if (err) {
        res.status(400).json(err);
      }
      res.status(200).json({
        success: "found it!",
        data: feed
      })
    })
  },

  updateFeed: function(req, res) {
    Feed.update(req.params.id, req.body, function(err, updatedfeed) {
      if (err) {
        res.status(400).json(err);
      }
      res.status(200).json({
        success: "feed updated",
        data: updatedfeed
      });
    });
  },

  removeFeed: function(req, res) {
    Feed.remove({ _id: req.params.id }, function(err, deleted) {
      if (err) {
        res.status(400).json(err);
      }
      res.status(200).json({
        success: "feed deleted",
        data: deleted
      });
    });
  },

  sortFeedsDescending: function(req, res) {
    Feed.find({}).sort('-created').exec(function(err, sorteddescending) {
      if (err) {
        res.status(400).json(err)
      }
      res.status(200).json({
        success: "Feeds sorted",
        data: sorteddescending
      });
    });
  },

  sortFeedsAscending: function(req, res) {
    Feed.find({}).sort('created').exec(function(err, sortedascending) {
      if (err) {
        res.status(400).json(err)
      }
      res.status(200).json({
        success: "Feeds sorted",
        data: sortedascending
      });
    });
  },
}
