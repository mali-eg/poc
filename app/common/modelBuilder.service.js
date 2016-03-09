(function () {
    "use strict";

    angular
        .module('myApp')
        .factory('modelBuilder', ['ruleEngineService', modelBuilder]);

    function modelBuilder(ruleEngineService) {
        return {
            getAddOns: getAddOns
        }

        function getAddOns() {
            var model = {
                addonTypes: {},
                addons: {
                    promotions: getAddonGroup('promotion'),
                    discounts: getAddonGroup('discount')
                }
            }
            return model;
        }

        function getAddonGroup(groupName) {
            var entities = ruleEngineService.getEntities();
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

