;(function(){
  'use strict';
  angular
    .module('<%= scriptAppName %>')
    .service('<%= cameledName %>', <%= cameledName %>);

  <%= classedName %>.$inject = [<%= injected %>];
  function <%= cameledName %>(<%= providers %>){
    // AngularJS will instantiate a singleton by calling "new" on this function
  }
}).call(this);