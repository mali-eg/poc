(function () {
    "use strict";
    angular
        .module("myApp")
        .controller("rootCtrl", ['ruleEngineService', '$scope', rootCtrl]);

    function rootCtrl(ruleEngineService, $scope){
        var entities = ruleEngineService.getEntities();

        _.forEach(entities.entities, function(obj) {
            //fetch CMS and VLUX data
           $scope[obj.name]='';
        });

        _.forEach(entities.containers, function(obj, key) {
            _.forEach(entities.containers[key].entities, function(obj) {
                $scope[obj.name]='';
            });
        });

        console.log($scope);
    }
})();
