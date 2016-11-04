angular.module("Writr")
  .controller("FeedCtrl", ["$scope", "FeedService", "$stateParams", "$state", function($scope, FeedService, $stateParams, $state) {

    $scope.feeds = [];
    $scope.sortedfeeds = [];

    FeedService.getAll().then(function(res) {
      $scope.feeds = res.data;
      $scope.sortedfeeds = $scope.feeds.sort(compareDates);
      console.log($scope.sortedfeeds);
    }, function(err) {});

    function compareDates(date1, date2) {
      if (date1 > date2) {
        return -1;
      }
      if (date1 < date2) {
        return 1;
      }
      return 0;
    };

    $scope.createFeed = function() {
      console.log("post clicked")
      FeedService.create($scope.feed).then(function(res) {
        console.log(res.data, "new feed");
        $state.reload()
        $scope.feeds.push(res.data);
        $scope.feed.title = '',
          $scope.feed.content = ''
      }, function(err) {
        console.log(err, "error1")
      })
    };


  }]);
