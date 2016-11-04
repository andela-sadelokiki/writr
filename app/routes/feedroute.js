var express = require("express"),
  router = express.Router();
var FeedCtrl = require("../controllers/feedctrl.js");

module.exports = function(app) {
  router.route('/')
    .post(FeedCtrl.createFeed)
    .get(FeedCtrl.getFeeds)
    // .get(FeedCtrl.sortFeeds)
  router.route('/sortdescending')
    .get(FeedCtrl.sortFeedsDescending)
  router.route('/sortascending')
    .get(FeedCtrl.sortFeedsAscending)
  router.route('/:id')
    .get(FeedCtrl.getFeedbyId)
    .put(FeedCtrl.updateFeed)
    .delete(FeedCtrl.removeFeed)


  app.use('/api', router);
}
