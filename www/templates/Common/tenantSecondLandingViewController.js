angular.module('starter.controllers')
    .controller('tenantsecondlandingviewCtrl', function($scope, $state,$cordovaGeolocation) {

        //alert('testSliderCtrl');
        initialize();
 function initialize() {



          var options = {timeout: 10000, enableHighAccuracy: true};
 
    $cordovaGeolocation.getCurrentPosition(options).then(function(position){
 
        var latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
 
        var mapOptions = {
            center: latLng,
            zoom: 15,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
 
        $scope.map = new google.maps.Map(document.getElementById("map"), mapOptions);
 
        google.maps.event.addListenerOnce($scope.map, 'idle', function(){
 
            var marker = new google.maps.Marker({
                 map: $scope.map,
                 animation: google.maps.Animation.DROP,
                 position: latLng,
                 icon:'http://i.imgur.com/fDUI8bZ.png'
            });
 
            var infoWindow = new google.maps.InfoWindow({
                content: "Here You Are.!"
            });
 
            google.maps.event.addListener(marker, 'click', function () {
                infoWindow.open($scope.map, marker);
            });
       });
    }, function(error){
         console.log("Could not get location");
  });
}
// {maximumAge:60000,timeout:3000,enableHighAccuracy:true}
        $scope.onSwipeLeft = function() {
            
            $state.go('landing.buslistView');
        }
       
    });