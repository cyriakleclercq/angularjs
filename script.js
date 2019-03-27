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

    $scope.films = [];

    $http({
        method:"POST",
        url:"affichage.php",
        data:  "new="+$scope.ajoutJeu,

        headers: {'Content-Type': 'application/x-www-form-urlencoded'}

    }).then(function Success(response) {



        let Objet = response.data;

        console.log(Objet);

        var table = response.data;
        var table2 = [];

        console.log(table);

        for (let i = 0; i < table.length; i++) {

            if (table[i].type == 'film') {

                table2.push(table[i]);

            }
        }
        console.log(table2);

        $scope.films = table2;

    });

    $scope.ajouterFilm = function () {

        var film = 'film';

        $http({
            method:"POST",
            url:"test.php",
            data: "new="+$scope.ajoutFilm+"&type="+film,

            headers: {'Content-Type': 'application/x-www-form-urlencoded'}

        }).then(function Success(response) {

                var add = {nom:$scope.ajoutFilm};

                $scope.films.push(add);

                console.log(add);

            },

            function Error(response) { alert(response.statusText);

        })

    }

});


app.controller('livresControlleur', function ($scope,$http) {

    $scope.livres = [];

    $http({
        method:"POST",
        url:"affichage.php",
        data:  "new="+$scope.ajoutJeu,

        headers: {'Content-Type': 'application/x-www-form-urlencoded'}

    }).then(function Success(response) {

        let Objet = response.data;

        console.log(Objet);

        var table = response.data;
        var table2 = [];

        console.log(table);

        for (let i = 0; i<table.length; i++) {

            if (table[i].type == 'livre') {

                table2.push(table[i]);

            }
        }
        console.log(table2);

        $scope.livres = table2;


    });

    $scope.ajouterLivre = function () {

        var livre = 'livre';

        $http({
            method:"POST",
            url:"test.php",
            data: "new="+$scope.ajoutLivre+"&type="+livre,

            headers: {'Content-Type': 'application/x-www-form-urlencoded'}

        }).then(function Success(response) {

                var add = {nom:$scope.ajoutLivre};

                $scope.livres.push(add);

                console.log(add);

            },

            function Error(response) { alert(response.statusText);

            })

    }

});

app.controller('jeuxvideosControlleur', function ($scope,$http) {

    $scope.jeuxVideo = [];


    $http({
        method:"POST",
        url:"affichage.php",
        data:  "new="+$scope.ajoutJeu,

        headers: {'Content-Type': 'application/x-www-form-urlencoded'}

    }).then(function Success(response) {

        let Objet = response.data;

        console.log(Objet);

        var table = response.data;
        var table2 = [];

        console.log(table);

        for (let i = 0; i<table.length; i++) {

            if (table[i].type == 'jeux') {

                table2.push(table[i]);

            }
        }
        $scope.jeuxVideo = table2;


    });


    $scope.ajouterJeu = function () {

        var jeux = 'jeux';

        $http({
            method:"POST",
            url:"test.php",
            data:  "new="+$scope.ajoutJeu+"&type="+jeux,

            headers: {'Content-Type': 'application/x-www-form-urlencoded'}

        }).then(function Success(response) {

                var add = {nom:$scope.ajoutJeu};

                $scope.jeuxVideo.push(add);

                console.log(add);

            },

            function Error(response) { alert(response.statusText);

            })

    }

});
