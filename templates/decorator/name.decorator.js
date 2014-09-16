(function(){
  'use strict';
  angular
    .module('<%= scriptAppName %>')
    .config( configuration );

  configuration.$inject = ['$provide'];
  function configuration($provide){

    $provide.decorator('<%= cameledName %>', function ($delegate) {
      // decorate the $delegate
      return $delegate;
    });

  };

}).call(this);