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
})();
