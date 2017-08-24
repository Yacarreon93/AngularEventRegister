'use strict'

eventsApp.controller('EventController', function ($scope, eventData) {

  $scope.sortOrder = 'name'
  $scope.event = eventData.getEvent(function (event) {
    $scope.event = event
  })

  $scope.upvoteSession = function (session) {
    session.upvoteCount++
  }

  $scope.downvoteSession = function (session) {
    session.upvoteCount--
  }

})