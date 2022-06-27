app.controller("update_account", function ($scope, $http) {
    $scope.isLoading = false;

    const url = "https://620e49a3585fbc3359dce84b.mockapi.io/Users";

    $scope.onSubmitForm = function (event, id) {
        event.preventDefault();
        $scope.isLoading = true;

        const updateApi = url + '/' + id;
        $http.put(updateApi, $scope.student)
            .then(function (response) {
                $scope.isLoading = false;
                Swal.fire({
                    icon: 'success',
                    title: 'Cập Nhật thành công!',
                });
            })
    }
})


