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
        .directive(directiveName, ['$parse','$rootScope', 'ruleEngineService','flatedModel',function ($parse,$rootScope, ruleEngineService, flatedModel) {
            return{
                templateUrl:tplUrl,
                restrict:'AE',
                scope: true,
                transclude: true,
                link: function (scope, elem, attrs) {
                    var ngModel = $parse(attrs.ngModel)(scope);
                    ngModel.ruleFunction = "AnotherPromo == true";
                    scope.innerModel = ngModel.value;
                    var name =  $parse(attrs.ngModel)(scope).name;

                    scope.$watch('innerModel',function(newVal,oldVal){
                        flatedModel[name]=newVal;
                    });

                    //function test(){
                    //    return eval(ngModel.ruleFunction);
                    //}
                    // var boundedFun = test.bind(flatedModel, ngModel.ruleFunction);
                    scope.disabled = function(){
                        return $parse(ngModel.ruleFunction)(flatedModel);
                    };
                }
            }
        }])
})();
