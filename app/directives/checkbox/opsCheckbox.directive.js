(function () {
    'use strict';

    var directiveName = "opsCheckbox",
        tplUrl = 'directives/checkbox/opsCheckbox.tpl.html';

    /**
     * @ngdoc directive
     * @name onePos radio button
     * @restrict AE
     *
     * @description
     * styled radio button based on simplicity lib.
     */

    angular
        .module('myApp')
        .directive(directiveName, ['$parse','$rootScope',function ($parse,$rootScope) {
            return{
                templateUrl:tplUrl,
                restrict:'AE',
                scope: true,
                transclude: true,
                link: function (scope, elem, attrs) {
                    scope.innerModel = $parse(attrs.ngModel)(scope).value;
                    var name =  $parse(attrs.ngModel)(scope).name;
                    scope.$watch('innerModel',function(newVal,oldVal){
                        $rootScope[name]=newVal;
                    });
                }
            }
        }])
})();
