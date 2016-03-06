(function () {
    "use strict";
    angular
        .module("myApp")
        .controller("homeCtrl", [homeCtrl]);

    function homeCtrl(){
        var vm = this;
        vm.name = "hello";
    }
})();
