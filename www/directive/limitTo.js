angular
    .module('starter')
    .directive("limitTo", [function() {
        return {
            restrict: "A",
            link: function(scope, elem, attrs) {
                var limit = parseInt(attrs.limitTo);
                scope.lengthError = "";
                angular.element(elem).on("keypress", function(e) {
                    if (this.value.length == limit) {
                        e.preventDefault();
                    }

                });
            }
        }
    }]);
    angular
    .module('starter')
    .directive('awLimitLength', function() {
        return {
            restrict: "A",
            require: 'ngModel',
            link: function(scope, element, attrs, ngModel) {
                attrs.$set("ngTrim", "false");
                var limitLength = parseInt(attrs.awLimitLength, 10); // console.log(attrs);
                scope.$watch(attrs.ngModel, function(newValue) {
                    //debugger;
                    if (ngModel.$viewValue != undefined) {
                        if (ngModel.$viewValue.length > limitLength) {
                            ngModel.$setViewValue(ngModel.$viewValue.substring(0, limitLength));
                            ngModel.$render();
                        }
                    }

                });
            }
        };
    });

    angular
        .module('starter')
        .filter('unique', function() {
       return function(collection, keyname) {
          var output = [], 
              keys = [];

          angular.forEach(collection, function(item) {
              var key = item[keyname];
              if(keys.indexOf(key) === -1) {
                  keys.push(key);
                  output.push(item);
              }
          });
          return output;
       };
    });