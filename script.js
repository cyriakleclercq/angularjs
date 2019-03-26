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

        var film = 'film';

        $http({
            method:"POST",
            url:"test.php",
            data: "new="+$scope.ajoutFilm+"&type="+film,

            headers: {'Content-Type': 'application/x-www-form-urlencoded'}

        }).then(function Success(response) { alert(response.data); },

            function Error(response) { alert(response.statusText);

        })

    }

});

app.controller('livresControlleur', function ($scope,$http) {

    $scope.livres = ["Harry Potter","ADW","PUG","Le Hobbit"];

    $scope.ajouterLivre = function () {

        $scope.livres.push($scope.ajoutLivre);

        var livre = 'livre';

        $http({
            method:"POST",
            url:"test.php",
            data: "new="+$scope.ajoutLivre+"&type="+livre,

            headers: {'Content-Type': 'application/x-www-form-urlencoded'}

        }).then(function Success(response) { alert(response.data); },

            function Error(response) { alert(response.statusText);

            })

    }

});

app.controller('jeuxvideosControlleur', function ($scope,$http) {

    $scope.jeuxVideo = ["mass effect","adibou","fortnite","LOL"];

    $scope.ajouterJeu = function () {

        $scope.jeuxVideo.push($scope.ajoutJeu);

        var jeux = 'jeux';

        $http({
            method:"POST",
            url:"test.php",
            data:  "new="+$scope.ajoutJeu+"&type="+jeux,

            headers: {'Content-Type': 'application/x-www-form-urlencoded'}

        }).then(function Success(response) {

            alert(response.data)
            console.log(response.data);

            $scope.recup = response.data },

            function Error(response) { alert(response.statusText);

            })

    }

});
