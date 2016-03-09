(function () {
    "use strict";

    angular
        .module('myApp')
        .factory('modelFactory', [modelFactory]);

    function modelFactory() {
        return {
            getModel: getModel
        }

        function getModel(modelName) {
            var entities = ruleEngineService.getEntities();

            var model = {};
            if (modelName === 'AddOns') {
                model = {
                    addonTypes: {},
                    addons: {
                        promotions:[] ,
                        discounts: []
                    }
                }
            }
            return model;
        }

        function getAddonGroup(groupName, entities) {
            var group = [];
            var groupIndex = _.findIndex(entities.containers, function (o) {
                return o.name == groupName;
            });
            _.forEach(entities.containers[groupIndex].entities, function (obj) {
                //fetch CMS and vlux data
                var addon = {
                    name: obj.name,
                    label: obj.name, //to be replaced by CMS labels
                    value: ''
                }
                group.push(addon);
            });
            return group;
        }
    }

})();

