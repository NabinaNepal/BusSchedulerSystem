angular.module('starter.controllers')
    .controller('testSliderCtrl', function($scope, $state, $localStorage, $ionicHistory) {
        //ionicMaterialInk.displayEffect();

        $scope.$on('$ionicView.beforeEnter', function(event, viewData) {


            $scope.logout = function() {

                //$window.localStorage.clear();
                $ionicHistory.clearCache();
                $ionicHistory.clearHistory();
                $localStorage.$reset();

                $localStorage.email = null;
                $localStorage.password = null;
                $scope.loginUserName = null;
                $scope.loginUseremail = null;
                $state.go('landing.landingView');
            }


            $scope.home = function() {
                $state.go('app.tenanthome');

            }

            // $scope.selfcheck=function(){
            //     $state.go('app.tenantselfcheck');
            // }
        });
    });