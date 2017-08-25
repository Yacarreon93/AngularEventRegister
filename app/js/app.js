'use strict';

var eventsApp = angular.module('eventsApp', ['ngResource', 'ngRoute'])
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/newEvent', {
        templateUrl: 'templates/newEvent.html',
        controller: 'EditEventController'
      })
      .when('/events', {
        templateUrl: 'templates/eventList.html',
        controller: 'EventListController'
      })
      .when('/event/:eventId', {
        foo: 'bar',
        templateUrl: 'templates/eventDetails.html',
        controller: 'EventController'
      })
      .otherwise({ redirectTo: '/events' })
      $locationProvider.html5Mode(true)
  })