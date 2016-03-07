(function() {
    "use strict";

    angular
        .module('myApp')
        .factory('ruleEngineService', ['flatedModel',ruleEngineService]);

    function ruleEngineService(flatedModel) {

        var entities = {
            "entities":[
                {
                    "name":"Progressbar.TariffSelection",
                    "path":null
                },
                {
                    "name":"Progressbar.AddOns",
                    "path":null
                },
                {
                    "name":"Progressbar.HardwareSelection",
                    "path":null
                },
                {
                    "name":"Progressbar.ShoppingCart",
                    "path":null
                },
                {
                    "name":"Progressbar.CustomerData",
                    "path":null
                },
                {
                    "name":"Progressbar.SubscriberData",
                    "path":null
                },
                {
                    "name":"Progressbar.SummaryData",
                    "path":null
                },
                {
                    "name":"Progressbar.CreateContracts",
                    "path":null
                },
                {
                    "name":"Matrix.Type.Prepaid",
                    "code":"pre-pay",
                    "path":"Category"
                },
                {
                    "name":"Matrix.Type.Postpaid",
                    "code":"post-pay",
                    "path":"Category"
                },
                {
                    "name":"Matrix.Type.Fixednet",
                    "code":"fixednet",
                    "path":"Category"
                },
                {
                    "name":"Filter.Red",
                    "path":null
                },
                {
                    "name":"Filter.Data",
                    "path":null
                },
                {
                    "name":"Filter.Smart",
                    "path":null
                },
                {
                    "name":"searchTariffNameInput",
                    "path":"productOffering.name"
                },
                {
                    "name":"simNumberInput",
                    "path":"simSerialNumber"
                },
                {
                    "name":"IMEIInput",
                    "path":"IMEI"
                },
                {
                    "name":"lastStepCTA",
                    "path":null
                },
                {
                    "name":"expressCheckoutCTA",
                    "path":null
                },
                {
                    "name":"nextStepCTA",
                    "code":"DSCT3",
                    "path":null
                },
                {
                    "name":"matrixTypeSelected",
                    "path":null
                }
            ],
            "containers":[
                {
                    "name":"tariff-group",
                    "type":"dynamic",
                    "entities":[
                        {
                            "name":"RED3GB",
                            "code":"REDS",
                            "path":"tariffGroup"
                        },
                        {
                            "name":"RED8GB",
                            "code":"REDM",
                            "path":"tariffGroup"
                        },
                        {
                            "name":"RED20GB",
                            "code":"REDL",
                            "path":"tariffGroup"
                        },
                        {
                            "name":"Smart",
                            "code":"SMAR",
                            "path":"tariffGroup"
                        },
                        {
                            "name":"CallYa",
                            "code":"CY",
                            "path":"tariffGroup"
                        }
                    ]
                },
                {
                    "name":"promotion",
                    "type":"dynamic",
                    "entities":[
                        {
                            "name":"Startguthaben",
                            "code":"STGH40",
                            "path":"promotion"
                        },
                        {
                            "name":"AnotherPromo",
                            "code":"asdf",
                            "path":"promotion"
                        },
                        {
                            "name":"OneMorePromo",
                            "code":"wqersdf",
                            "path":"promotion"
                        }
                    ]
                },
                {
                    "name":"discount",
                    "type":"dynamic",
                    "entities":[
                        {
                            "name":"Discount1",
                            "code":"DSCT1",
                            "path":"Discount"
                        },
                        {
                            "name":"Discount2",
                            "code":"DSCT2",
                            "path":"Discount"
                        },
                        {
                            "name":"Discount3",
                            "code":"DSCT3",
                            "path":"Discount"
                        }
                    ]
                },
                {
                    "name":"tariff-addon",
                    "type":"dynamic",
                    "entities":[
                        {
                            "name":"Addon1",
                            "code":"ADD1",
                            "path":"Addon"
                        },
                        {
                            "name":"Addon2",
                            "code":"ADD2",
                            "path":"Addon"
                        },
                        {
                            "name":"Addon3",
                            "code":"ADD3",
                            "path":"Addon"
                        }
                    ]
                },
                {
                    "name":"tariff-addon-internet",
                    "type":"dynamic",
                    "entities":[
                        {
                            "name":"Inet1",
                            "code":"IADD1",
                            "path":"Addon"
                        },
                        {
                            "name":"Inet2",
                            "code":"IADD2",
                            "path":"Addon"
                        },
                        {
                            "name":"Inet3",
                            "code":"IADD3",
                            "path":"Addon"
                        }
                    ]
                },
                {
                    "name":"tariff-addon-voice",
                    "type":"dynamic",
                    "entities":[
                        {
                            "name":"Voice1",
                            "code":"VADD1",
                            "path":"Addon"
                        },
                        {
                            "name":"Voice2",
                            "code":"VADD2",
                            "path":"Addon"
                        },
                        {
                            "name":"Voice3",
                            "code":"VADD3",
                            "path":"Addon"
                        }
                    ]
                },
                {
                    "name":"tariff-addon-tvoption",
                    "type":"dynamic",
                    "entities":[
                        {
                            "name":"TVOption1",
                            "code":"TVO1",
                            "path":"Addon"
                        },
                        {
                            "name":"TVOption2",
                            "code":"TVO2",
                            "path":"Addon"
                        },
                        {
                            "name":"TVOption3",
                            "code":"TVO3",
                            "path":"Addon"
                        }
                    ]
                }
            ]
        }

        var rules = {
                "items": [
                    {
                        "name": "IBAN",
                        "editable": {
                            "rules": [
                                {
                                    "type": "static",
                                    "defaultValue": "true"
                                }
                            ]
                        },
                        "enabled": {
                            "rules": [
                                {
                                    "type": "static",
                                    "defaultValue": "true"
                                }
                            ]
                        },
                        "mandatory": {
                            "rules": [
                                {
                                    "type": "rulebased",
                                    "condition": "OrderType==Activation",
                                    "returnedValue": "True"
                                }
                            ]
                        },
                        "visible": {
                            "rules": [
                                {
                                    "type": "static",
                                    "defaultValue": "true"
                                }
                            ]
                        },
                        "validate": {
                            "rules": [
                                {
                                    "type": "regex",
                                    "condition": "^[A-Z]{2,2}[0-9]{2,2}[a-zA-Z0-9]{1,30}$"
                                }
                            ]
                        }
                    }
                ]
            }

        return {
                getEntities:getEntities,
                getRules:getRules
            }

            function getEntities(){
                _.forEach(entities.entities, function(obj) {
                    flatedModel[obj.name]='';
                });

                _.forEach(entities.containers, function(obj, key) {
                    _.forEach(entities.containers[key].entities, function(obj) {
                        flatedModel[obj.name]='';
                    });
                });
                return entities;
            }

            function getRules(entityName){
                var index = _.findIndex(rules.items, function(o) { return o.name == entityName; });
                return rules.items[index];
            }
        }
})();
