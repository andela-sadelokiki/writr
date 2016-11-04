var app = angular.module("Writr", ["ui.router"])
app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise("/");
  $stateProvider
    .state("home", {
      url: '/',
      templateUrl: 'app/views/home.html',
      controller: 'FeedCtrl'
    })
}])