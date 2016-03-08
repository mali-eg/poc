(function() {
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
        .directive(directiveName, ['$parse', '$rootScope', 'ruleEngineService', 'flatedModel',
            function($parse, $rootScope, ruleEngineService, flatedModel) {
                return {
                    templateUrl: tplUrl,
                    restrict: 'AE',
                    scope: true,
                    transclude: true,
                    link: function(scope, elem, attrs) {

                        // handle the directive creation
                        // needs a refactor to get the data from ng model controller
                        var ngModel = $parse(attrs.ngModel)(scope);
                        scope.innerModel = ngModel.value;

                        // rule based logic
                        // TODO: handling the other types of the validation
                        var name = $parse(attrs.ngModel)(scope).name;
                        var rules = ruleEngineService.getRules(name);
                        // TODO-ref: handles multiple rules


                        scope.$watch('innerModel', function(newVal, oldVal) {
                            flatedModel.updateEntity(name, newVal);
                        });

                        scope.disabled = function() {
                            if (rules && rules.enabled.rules.length > 0) {
                                return $parse(rules.enabled.rules[0].condition)(flatedModel.currentModel);
                            }
                            return false;
                        };
                    }
                }
            }
        ])
})();