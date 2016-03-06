(function () {
    "use strict";
    angular
        .module("myApp")
        .controller("rootCtrl", [rootCtrl]);

    function rootCtrl(){
        var vm = this;
        vm.model = breService.getAddons();
        vm.name = "hello";
    }
})();
