angular.module("Writr")
  .factory("FeedService", ["$http", "baseUrl", function($http, baseUrl) {
    var Feed = {
      create: function(feed) {
        return $http.post(baseUrl + "/api", feed)
      },
      getAll: function() {
        return $http.get(baseUrl + "/api")
      },
      sortDescending: function() {
        return $http.get(baseUrl + "/api/sortDescending")
      },
      sortAscending: function() {
        return $http.get(baseUrl + "/api/sortAscending")
      },
      edit: function(id) {
        return $http.put(baseUrl + "/api/" + id)
      },
      delete: function(id) {
        return $http.delete(baseUrl + "/api/" + id)
      }
    }
    return Feed;
  }]);
