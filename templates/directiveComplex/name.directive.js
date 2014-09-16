(function(){
  'use strict';
  angular
    .module('<%= scriptAppName %>')
    .directive('<%= cameledName %>', <%= cameledName %>);

  <%= cameledName %>.$inject = [<%= injected %>];

  function <%= cameledName %>(<%= providers %>){
    return {
      templateUrl: '<%= htmlUrl %>',
      restrict: 'EA',
      link: link
    };

    ///////////////////

    function link(scope, element, attrs) {

    }

  };
}).call(this);