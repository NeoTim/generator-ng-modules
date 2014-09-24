;(function(){
  'use strict';
  angular
    .module('<%= scriptAppName %>')
    .controller('<%= classedName %>Ctrl', <%= classedName %>Ctrl);

  <%= classedName %>Ctrl
    .$inject = [<%= injected %>];

  function <%= classedName %>Ctrl(<%= providers %>) {
    $scope.message = 'Hello';
  }

}).call(this);
