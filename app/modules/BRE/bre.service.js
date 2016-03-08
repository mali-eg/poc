(function () {
    "use strict";

    angular
        .module('myApp')
        .factory('breService', ['modelBuilder', breService]);

    function breService( modelBuilder) {
        return {
            getAddons: getAddons
        }

        function getAddons() {
            //construct the model structure
            var model = modelBuilder.getAddOns();
            return model;
        }
    }
})();
