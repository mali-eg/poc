(function() {
    "use strict";

    angular
        .module('myApp')
        .factory('breService', ['ruleEngineService', breService]);

    function breService(ruleEngineService) {

        //var result = JSONPath({json: model, path: '$.store.book[*].author', resultType: 'all'});

            return {
                getAddons:getAddons
            }

            function getAddons(){

                var entities = ruleEngineService.getEntities();

                //construct the model structure
                var model = {
                    addonTypes:{},
                        addons:{
                        promotions:getAddonGroup('promotion', entities),
                        discounts:getAddonGroup('discount', entities)
                    }
                }

               return model;
            }

            function getAddonGroup(groupName, entities){
                var group = [];
                var groupIndex = _.findIndex(entities.containers, function(o) { return o.name == groupName; });
                _.forEach(entities.containers[groupIndex].entities, function(obj) {
                    //fetch CMS and VLUX data
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
