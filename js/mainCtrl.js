angular.module("dogs")
    .controller("mainCtrl", function($scope, mainSvc) {

        const getDogs = function() {
            mainSvc.getDogs()
                .then(function(response) {
                    console.log(response);
                    $scope.dogs = response.data;
                })
        }

        getDogs();

});
