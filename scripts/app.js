'use strict';

/** 
  * This is the main module for NGUI assessment
  * Author: Alicia
  * Description: This is the configuration of the whole app
  */

 angular.module('NGUI', [
        'ui.router',
        'ui.bootstrap'
 	])
 	.config(function($stateProvider, $urlRouterProvider) {
 		$urlRouterProvider.otherwise('/home');

	    $stateProvider
	      .state('home', {
	        url: '/home',
	        templateUrl: 'views/home.html',
	        controller: 'homeCtrl',
	      });
 	});