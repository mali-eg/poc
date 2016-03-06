(function() {
    "use strict";

    angular
        .module('myApp')
        .factory('mappingService', [mappingService]);

    function mappingService() {

        return {
            getData:getData
        }

        function getData(){

            var tariffSelection = {
                categories:{
                    postpaid: {
                        label: '',
                        value: '',
                        visible: true,
                        enabled: true
                    },
                    prepaid: {
                        label: '',
                        value: '',
                        visible: true,
                        enabled: true
                    },
                    fixednet: {
                        label: '',
                        value: '',
                        visible: true,
                        enabled: true
                    }
                },
                selectedTariffGroup:{
                    id: 'RED4G'
                },
                tarrifGroups:[{
                    id: 'RED4G',
                    label: 'Red 4GB',
                    visible: true,
                    enabled: true
                },{
                    id: 'RED8G',
                    label: 'Red 8GB',
                    visible: true,
                    enabled: true
                }],
                promotions:[{
                    id: 'promo1',
                    label: '4GB Promotion',
                    value: '',
                    visible: true,
                    enabled: true,
                    onChange: ''
                },{
                    id: 'promo2',
                    label: '8GB Promotion',
                    value: '',
                    visible: true,
                    enabled: true,
                    onChange: ''
                }],
                discounts:[{
                    id: 'disc1',
                    label: '4GB Discount',
                    value: '',
                    visible: true,
                    enabled: true,
                    onChange: ''
                },{
                    id: 'promo2',
                    label: '8GB Promotion',
                    value: '',
                    visible: true,
                    enabled: true,
                    onChange: ''
                }]
            }


            return model;
            //TODO create model
            //TODO get entity list and bind it to model
            //TODO get rule set and bind it to model
            //TODO get specification API and bind it to model
            //TODO return model
        }
    }
})();
