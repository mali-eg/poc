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
        .directive(directiveName, [function () {
            return{
                templateUrl:tplUrl,
                restrict:'AE',
                scope:{
                    innerId: '@',
                    ngModel: '=',
                    label: '@?',
                    dataModel : '=',
                    name: '@?'/*,
                    ngChange: '=?',
                    ngInit: "@?",
                    ngDisabled: "=?"*/
                },
                transclude: true,
                link: function (scope, elem, attrs) {
                    scope.innerModel = scope.ngModel.value;
                    scope.$watch('innerModel',function(newVal,oldVal){
                        debugger;
                    });
                }
            }
        }])
})();
