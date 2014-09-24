;(function(){
  'use strict';
  angular
    .module('<%= scriptAppName %>')
    .config( <%= classedName %> );

    <%= classedName %>.$inject = ['$routeProvider'];
    function <%= classedName %>($routeProvider) {
      $routeProvider
        .when('<%= route %>', {
          templateUrl: '<%= htmlUrl %>',
          controller: '<%= classedName %>Ctrl'
        });
    }
}).call(this);