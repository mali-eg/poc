(function () {
    "use strict";
    angular
        .module("myApp")
        .controller("pocCtrl", ['pocService', pocCtrl]);

    function pocCtrl(pocService){
        var vm = this;
        //var model = pocService.getData();

        vm.name = "hello";

        vm.list = pocService.getData();

        pocService.applyPath();
    }
})();
