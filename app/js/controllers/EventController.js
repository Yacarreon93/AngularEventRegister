'use strict'

eventsApp.controller('EventController', function ($scope, $log, $anchorScroll, $routeParams, $route, eventData) {

  $scope.sortOrder = 'name'

  eventData.getEvent($routeParams.eventId)
    .$promise
    .then(function (event) { $scope.event = event })
    .catch(function (response) { console.log(response) })

  console.log($route.current.foo)
  console.log($route.current.params.eventId)
  console.log($route.current.params.foo)
  console.log($route.current.pathParams.eventId)
  console.log($route.current.pathParams.foo)

  $scope.reload = function () {
    $route.reload()
  }

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