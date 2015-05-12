angular.module('destroytomservo', ['ui.router', 'ui.bootstrap'])
    .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    	'use strict';

        $urlRouterProvider.otherwise('/');
        
        $stateProvider
            .state('create', {
                url: '/',
                templateUrl: 'views/create.html',
                controller: 'CreateCtrl'
            });
    }]);