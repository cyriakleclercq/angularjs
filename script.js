var app = angular.module("monAppli", ["ngRoute"]);

app.config(function($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "index2.html"
        })

        .when("/films", {
            templateUrl: "films.html",
            controller: "filmsControlleur"
        })

        .when("/livres", {
            templateUrl: "livres.html",
            controller: "livresControlleur"
        })

        .when("/jeuxvideos", {
            templateUrl: "jeuxvideos.html",
            controller: "jeuxvideosControlleur"
        })

        .otherwise({
            redirectTo: '/index.html'
        })
});


app.controller('filmsControlleur', function ($scope,$http) {

    $scope.films = ["The big Lebowsky","Fargo","O'Brother","The Barber"];

    $scope.ajouterFilm = function () {

        $scope.films.push($scope.ajoutFilm);

        $http({
            method:"POST",
            url:"test.php",
            data: {nouveauFilm : $scope.ajouterFilm}
        }).then(function Success(response) { alert(response.data); },

            function Error(response) { alert(response.statusText);

        })

    }

});

app.controller('livresControlleur', function ($scope,$http) {

    $scope.livres = ["Harry Potter","ADW","PUG","Le Hobbit"];

    $scope.ajouterLivre = function () {

        $scope.livres.push($scope.ajoutLivre);

        $http({
            method:"POST",
            url:"test.php",
            data: {nouveauLivre : $scope.ajouterLivre}
        }).then(function Success(response) { alert(response.data); },

            function Error(response) { alert(response.statusText);

            })

    }

});

app.controller('jeuxvideosControlleur', function ($scope,$http) {

    $scope.jeuxVideo = ["mass effect","adibou","fortnite","LOL"];

    $scope.ajouterJeu = function () {

        $scope.jeuxvideo.push($scope.ajoutJeu);

        $http({
            method:"POST",
            url:"test.php",
            data: {nouveauJeu : $scope.ajouterJeu}
        }).then(function Success(response) { alert(response.data); },

            function Error(response) { alert(response.statusText);

            })

    }

});
