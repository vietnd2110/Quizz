const app = angular.module("app_Registransion", []);

function myRegistransion($scope, $http) {

    $scope.registransion = [];
    $scope.isSuccess = true;
    $scope.message = "";
    // $scope.regis = {};
    $scope.isLoading = false;

    const url = 'https://620e49a3585fbc3359dce84b.mockapi.io/registransion';

    $http.get(url)
        .then(function (response) {
            $scope.registransion = response.data;
        });

    $scope.onSubmitForm = function (event) {
        event.preventDefault();

        $http.post(url, $scope.regis)
            .then(function (response) {

                $scope.message = "Thêm Mới Thành Công";
                $scope.isSuccess = true;
                $scope.registransion.push(response.data);
            })
            .catch(function (error) {
                console.log(error);
                $scope.message = "Thêm Mới Thất Bại";
                $scope.isSuccess = false;
            });
    }

}

app.controller("control_Registransion", myRegistransion);

