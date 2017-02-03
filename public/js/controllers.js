app = angular.module('cars',
    ['ngRoute'
    ]);

app.controller("CarsController", ["$scope","$http","$location", function($scope,$http,$location){
    $http.get("cars.json")
        .success(function(response){
            $scope.cars = response;
        })
        .error(function(response){
        });
    $scope.delete = function(car){
        $http({
            method: 'DELETE',
            url: "cars/" + car + ".json",
            crossDomain:true
        })
            .success(function(response){
                location.reload();
            })
            .error(function(response){
                window.alert("Something was wrong!");
            });
    }
}]);
app.controller("EditCarsController", ["$scope","$http","$routeParams","$location", function($scope,$http,$routeParams,$location){
    $http.get("cars/"+ $routeParams.id +".json")
        .success(function(response){
            $scope.car = response;
        })
        .error(function(response){
        });

    $scope.updateCar = function(car){
        $http({
            method: 'PATCH',
            url: "cars/" + $routeParams.id + ".json",
            crossDomain:true,
            data: car
        })
            .success(function(response){
                $scope.cars = response;
                window.alert("Car Successfully Updated!");
                $location.path("/cars" );
            })
            .error(function(response){
                window.alert("Something was wrong!");
            });
    }

}])
app.controller("NewCarsController", ["$scope","$http","$location", function($scope,$http,$location){
    $scope.createCar = function(car){
        $http({
            method: 'POST',
            url:"cars.json",
            data: car
        })
            .success(function(response){
                $scope.car = response;
                window.alert("New Car Successfully Created!");
                $location.path( "/cars" );
            })
            .error(function(response){
                window.alert("Something was wrong!");
            });
    }
}]);
app.controller("ViewCarsController", ["$scope","$http","$routeParams", function($scope,$http, $routeParams){
    $http.get("cars/"+ $routeParams.id +".json")
        .success(function(response){
            $scope.car = response;
        })
        .error(function(response){
        });
}]);