(function () {
    'use strict';

    var directiveName = "opsCheckbox",
        tplUrl = '../../assets/js/angular-onepos/widgets/checkbox/opsCheckbox.tpl.html';

    /**
     * @ngdoc directive
     * @name onePos radio button
     * @restrict AE
     *
     * @description
     * styled radio button based on simplicity lib.
     */

    angular
        .module('onePOS.widgets')
        .directive(directiveName, [function () {
            return{
                templateUrl:tplUrl,
                restrict:'AE',
                scope:{
                    innerId: '@',
                    ngModel: '=',
                    label: '@?',
                    name: '@?'/*,
                    ngChange: '=?',
                    ngInit: "@?",
                    ngDisabled: "=?"*/
                },
                transclude: true
            }
        }])
})();
