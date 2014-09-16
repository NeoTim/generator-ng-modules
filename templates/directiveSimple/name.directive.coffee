'use strict'

angular.module '<%= scriptAppName %>'
.directive '<%= cameledName %>', (<%= providers %>)->
  template: '<div></div>'
  restrict: 'EA'
  link: (scope, element, attrs) ->
    element.text 'this is the <%= cameledName %> directive'