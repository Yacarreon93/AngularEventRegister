'use strict'

eventsApp.controller('CookieStoreSampleController', function ($scope, $cookieStore) {

  $scope.event = { id: 1, name: "New Event"}

  $scope.saveEventToCookie = function (event) {
    $cookieStore.put('event', event)
  }

  $scope.getEventFromCookie = function () {
    console.log($cookieStore.get('event'))
  }

  $scope.removeEventCookie = function () {
    $cookieStore.remove('event')
  }

})