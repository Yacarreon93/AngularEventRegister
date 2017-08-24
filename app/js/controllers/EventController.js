'use strict'

eventsApp.controller('EventController', function ($scope, $log, $anchorScroll, eventData) {

  $scope.sortOrder = 'name'

  eventData.getEvent()
    .$promise
    .then(function (event) { $scope.event = event })
    .catch(function (response) { console.log(response) })

  $scope.upvoteSession = function (session) {
    session.upvoteCount++
  }

  $scope.downvoteSession = function (session) {
    session.upvoteCount--
  }

  $scope.scrollToSession = function () {
    $anchorScroll()
  }

})