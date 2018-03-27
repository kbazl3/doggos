angular.module("dogs")
    .service("mainSvc", function($http) {

        this.getDogs = function() {
            return $http({
              method: 'GET',
              url: 'https://dog.ceo/api/breeds/list/all'
            }).then(function(response) {
                console.log(response);
                return response;
            });
        };

});
