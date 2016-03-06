(function () {
    "use strict";

    angular
        .module("myApp")
        .config(["$stateProvider", "$urlRouterProvider",
            routeConfig]);

    function routeConfig($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/home');


        $stateProvider
            .state('home', {
                url: '/home',
                templateUrl: 'partials/home.html',
                controller: 'homeCtrl',
                controllerAs: 'vm',
                data : { title: 'Business Rule execution' }
            })
            .state('bre', {
                url: '/bre',
                templateUrl: 'partials/bre.html',
                controller: 'breCtrl',
                controllerAs: 'vm',
                data : { title: 'Business Rule execution' }
            })
    }
})();
