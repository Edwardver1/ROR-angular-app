angular.module('cars')

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.


        when('/cars', {
            templateUrl: '/partials/cars.html',
            controller: 'CarsController'
        }).

        when('/edit_cars/:id', {
            templateUrl: '/partials/edit_cars.html',
            controller: 'EditCarsController'
        }).
        when('/view_cars/:id', {
            templateUrl: '/partials/view_cars.html',
            controller: 'ViewCarsController'
        }).
        when('/new_cars', {
            templateUrl: '/partials/new_cars.html',
            controller: 'NewCarsController'
        }).

        otherwise({
            redirectTo: '/cars'
        });
    }]);