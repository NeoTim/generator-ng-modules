'use strict'

angular.module '<%= scriptAppName %>'
.directive '<%= cameledName %>', (<%= providers %>)->
  templateUrl: '<%= htmlUrl %>'
  restrict: 'EA'
  link: (scope, element, attrs) ->
