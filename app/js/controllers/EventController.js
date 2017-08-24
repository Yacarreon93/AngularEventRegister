'use strict'

eventsApp.controller('EventController', function ($scope, $log, eventData) {

  $scope.sortOrder = 'name'

  $scope.event = eventData.getEvent()
    .success(function (event) { $scope.event = event })
    .error(function (data, status, headers, config) { 
      $log.warn(data, status, headers(), config)  
    })

  $scope.upvoteSession = function (session) {
    session.upvoteCount++
  }

  $scope.downvoteSession = function (session) {
    session.upvoteCount--
  }

})