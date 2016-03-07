(function () {
    "use strict";
    angular
        .module("myApp")
        .controller("rootCtrl", ['ruleEngineService', '$rootScope', rootCtrl]);

    function rootCtrl(ruleEngineService, $rootScope){
        var entities = ruleEngineService.getEntities();

        _.forEach(entities.entities, function(obj) {
            $rootScope[obj.name]='';
        });

        _.forEach(entities.containers, function(obj, key) {
            _.forEach(entities.containers[key].entities, function(obj) {
                $rootScope[obj.name]='';
            });
        });
    }
})();
