'use strict'

eventsApp.controller('TimeoutSampleController', function ($scope, $timeout) {

  var promise = $timeout(function () {
    $scope.name = 'John'
  }, 3000)

  $scope.cancel = function () {
    $timeout.cancel(promise)
  }
  
})