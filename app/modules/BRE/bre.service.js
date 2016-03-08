(function () {
    "use strict";

    angular
        .module('myApp')
        .factory('breService', ['ruleEngineService', 'modelFactory', breService]);

    function breService(ruleEngineService, modelFactory) {
        return {
            getAddons: getAddons
        }

        function getAddons() {
            //construct the model structure
            var model = modelFactory.getModel('AddOns');
            return model;
        }
    }
})();
