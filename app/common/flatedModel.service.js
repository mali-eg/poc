(function() {
    "use strict";

    angular
        .module('myApp')
        .factory('flatedModel', function($rootScope) {
            this.currentModel = {};

            function updateEntity(entityName, val) {
                this.currentModel[entityName] = val;
                $rootScope.$evalAsync()
                // $rootScope.$digest();
            }

            function newModel() {
                this.currentModel = {};
                return this.currentModel;
            }

            return {
                currentModel: this.currentModel,
                newModel: newModel,
                updateEntity: updateEntity
            };
        });
})();