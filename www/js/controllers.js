angular.module('starter.controllers', [])

.controller('WelcomeCtrl', function($scope, $state) {
    // Direct to signup
    $scope.signup = function() {
        $state.go('signup');
    };

    // Direct to login
    $scope.login = function() {
        $state.go('login');
    };
})

.controller('LoginCtrl', function($scope, $state) {
    // Direct to login
    $scope.login = function(loginData) {
        $state.go('app.feed');
    };
})

.controller('SignupCtrl', function($scope, $state) {
    // Direct to signup
    $scope.signup = function(signupData) {
        $state.go('app.feed');
    };
})

.controller('AppCtrl', function($scope, $state) {

    // With the new view caching in Ionic, Controllers are only called
    // when they are recreated or on app start, instead of every page change.
    // To listen for when this page is active (for example, to refresh data),
    // listen for the $ionicView.enter event:
    //$scope.$on('$ionicView.enter', function(e) {
    //});

    $scope.logout = function() {
        $state.go("welcome");
    };
})
.controller('FeedCtrl', function($scope) {
  $scope.posts = [{
    title: "Post 1",
    id: 1
  },{
    title: "Post 2",
    id: 2
  },{
    title: "Post 3",
    id: 3
  }]
})

// .controller('PlaylistsCtrl', function($scope) {
//     $scope.playlists = [{
//         title: 'Reggae',
//         id: 1
//     }, {
//         title: 'Chill',
//         id: 2
//     }, {
//         title: 'Dubstep',
//         id: 3
//     }, {
//         title: 'Indie',
//         id: 4
//     }, {
//         title: 'Rap',
//         id: 5
//     }, {
//         title: 'Cowbell',
//         id: 6
//     }];
// })

// .controller('PlaylistCtrl', function($scope, $stateParams) {});
