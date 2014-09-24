;(function(){
  'use strict';
  angular
    .module('<%= scriptAppName %>')
    .factory('<%= cameledName %>', <%= cameledName %>);

  <%= classedName %>.$inject = [<%= injected %>];
  function <%= cameledName %>(<%= providers %>){

    var meaningOfLife = 42;

    // Public API here
    return {
      someMethod: someMethod
    };

    //////////////

    function someMethod() {
      return meaningOfLife;
    }
  }
}).call(this);