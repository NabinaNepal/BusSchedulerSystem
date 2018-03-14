angular
    .module('starter.controllers', [])
    .controller('landingViewCtrl', function($scope, $state, $ionicSlideBoxDelegate, toastr, $ionicHistory, $localStorage) {
        //alert('landingViewCtrl');
        $ionicSlideBoxDelegate.enableSlide(true);
        $ionicHistory.clearCache();
        $ionicHistory.clearHistory();
        $localStorage.$reset();

        $localStorage.email = null;
        $localStorage.password = null;
        $scope.loginUserName = null;
        $scope.loginUseremail = null;
        $scope.onSwipeLeft = function() {
            //  alert('test');
            //   console.log(test);
            $state.go('landing.tenantSecondLandingView');
            //$state.go('landing.tenantlogin');

        }
        $scope.login = function(data) {
            
          
            
             console.log(data);
            // if(data.username=="nabinanepal123@gmail.com" && data.password="12345")
            // {
            //     // console.log(test);
            //     //$state.go('landing.tenantSecondLandingView');
            // //toastr.info("This part is under construction", 'info'); 
            // }
            // else
            // {
            //     alert("Invalid UserName and Password");
            // }
            if(data.username =="nabina" && data.password=="12345")
            {
                $state.go('landing.tenantSecondLandingView');
            }
           
        }

    });