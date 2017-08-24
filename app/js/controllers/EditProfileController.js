'use strict'

eventsApp.controller('EditProfileController', function ($scope, gravatarUrlBuilder) {
  
  $scope.user = {}
  $scope.getGravatarUrl = gravatarUrlBuilder.buildGravatarUrl

})