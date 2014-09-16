'use strict'

angular.module '<%= scriptAppName %>'
.service '<%= cameledName %>', (<%= providers %>)->
  # AngularJS will instantiate a singleton by calling 'new' on this function