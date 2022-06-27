app.controller("my_register", function ($scope, $rootScope, $http) {
    $scope.students = [];
    $scope.isLoading = false;
    // $scope.message = "";
    // $scope.isSuccess = true;
    // $scope.rigis = {};

    const url = "https://620e49a3585fbc3359dce84b.mockapi.io/Users";
    // $scope.isLoading = true;

    // $http.get(url).then(function (response) {
    //     console.log(response);
    //     $scope.students = response.data;
    //     $scope.isLoading = false;
    // });


    $scope.onSubmitform = function (event) {
        event.preventDefault();
        $scope.isLoading = true;
        var check = true;
        $rootScope.students.forEach(st => {
            if (st.username == $scope.regis.username) {
                $scope.isLoading = false;
                Swal.fire({
                    icon: 'error',
                    title: 'Tài khoản đã tồn tại',
                    text: 'Vui lòng nhập tên tài khoản khác',
                });
                check = false;
                return;
            };
        });
        if (check == true) {
            $http.post(url, $scope.regis)
                .then(function (response) {
                    $scope.isLoading = false;
                    // $scope.message = "Thêm Mới Thành Công";
                    Swal.fire({
                        icon: 'success',
                        title: 'Đăng Ký thành công!',
                        text: 'Quay lại trang đăng nhập!',
                    });
                    // $rootScope.students.push(response.data);
                    window.location.href = "#login";
                })
        }
    };

});
