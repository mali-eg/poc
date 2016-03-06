(function () {
    "use strict";
    angular
        .module("myApp")
        .controller("breCtrl", ['breService', breCtrl]);

    function breCtrl(breService){
        var vm = this;
        vm.model = breService.getAddons();
        vm.name = "hello";
    }

    _.forEach(entities.containers[groupIndex].entities, function(obj) {
        $scope[entities[i].name] = ''
    });

})();
