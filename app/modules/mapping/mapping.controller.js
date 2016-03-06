(function () {
    "use strict";
    angular
        .module("myApp")
        .controller("mappingCtrl", ['mappingService', pocCtrl]);

    function pocCtrl(mappingService){
        var vm = this;
        vm.model = mappingService.getData();
        vm.name = "hello";
    }
})();
