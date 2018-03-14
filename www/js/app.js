// Ionic Starter App
// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic', 'starter.controllers', 'ngCordova', 'toastr', 'ngStorage'])

.run(function($ionicPlatform, $state) {
        $ionicPlatform.ready(function() {   
            // window.addEventListener("deviceready", function()
            //                                {
            //                                 if(window.localstorage.getItem("username")!== null && window.localstorage.getItem("password")!== null){
            //                                 $state.go('landlordapp.landLordHomeLanding');
            //                                 }
            //                                 else
            //                                     $state.go('landing.landingView');

            //                                 }, false);         
            if (window.cordova && window.cordova.plugins.Keyboard) {
                // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
                // for form inputs)
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

                // Don't remove this line unless you know what you are doing. It stops the viewport
                // from snapping when text inputs are focused. Ionic handles this internally for
                // a much nicer keyboard experience.
                cordova.plugins.Keyboard.disableScroll(true);
            }
            if (window.StatusBar) {
                StatusBar.styleDefault();
            }
        });
        $ionicPlatform.ready(function() {

            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
                //alert('testtteees');
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
                cordova.plugins.Keyboard.disableScroll(true);
                // cordova.plugins.Keyboard.close();           
            }
            // debugger;
            window.addEventListener('native.keyboardshow', function() {
                //alert('add');
                document.body.classList.add('keyboard-open');
            });
            window.addEventListener('native.keyboardhide', function() {
                //alert('remove');
                document.body.classList.remove('keyboard-open');
            });
            if (window.StatusBar) {
                // org.apache.cordova.statusbar required
                StatusBar.styleDefault();
            }

        });
    })
    .config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {
        $ionicConfigProvider.views.swipeBackEnabled(false);


        $stateProvider
            .state('landing', {
                url: '/landing',
                abstract: true,
                templateUrl: 'templates/Common/LandingViewMenu.html',
                controller: 'testSliderCtrl'
            })

        .state('landing.landingView', {

                url: '/landingView',
                views: {
                    'landingMenu': {
                        templateUrl: 'templates/Common/LandingView.html',
                        controller: 'landingViewCtrl'
                    }
                }
            })
            .state('landing.tenantSecondLandingView', {
                cache: false,
                url: '/tenantSecondLandingView',
                views: {
                    'landingMenu': {
                        templateUrl: 'templates/Common/tenantSecondLandingView.html',
                        controller: 'tenantsecondlandingviewCtrl'
                    }
                }
            })

        .state('landing.buslistView', {
            cache: false,
            url: '/buslist',
            views: {
                'landingMenu': {
                    templateUrl: 'templates/Common/buslist.html',
                    controller: 'buslistctrl'
                }
            }
        })

       
        $urlRouterProvider.otherwise('/landing/landingView');
    });