'use strict'

angular.module '<%= scriptAppName %>'
.factory '<%= cameledName %>', (<%= providers %>)->

  # Service logic
  # ...
  meaningOfLife = 42

  # Public API here
  someMethod: ->
    meaningOfLife
