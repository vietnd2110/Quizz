app.controller("change_pass", function ($rootScope, $scope) {

    const url = "https://620e49a3585fbc3359dce84b.mockapi.io/Users";

    $scope.change = function () {
        if ($rootScope.student.password == $scope.oldPassword) {
            if ($rootScope.student.password == $scope.stu.newPassword) {
                Swal.fire({
                    icon: 'error',
                    title: 'Mật khẩu mới trùng với mật khẩu cũ!'
                });
            }
            // $rootScope.student.password == $scope.stu.newPassword
            // $scope.onSubmitForm = function (event, id) {
            //     event.preventDefault();
            //     $scope.isLoading = true;

            //     const updateApi = url + '/' + id;
            //     $http.put(updateApi, $rootScope.student)
            //         .then(function (response) {
            //             $scope.isLoading = false;
            //             Swal.fire({
            //                 icon: 'success',
            //                 title: 'Cập Nhật thành công!',
            //             });
            //         })
            // }
        }
        else if ($scope.stu.newPassword != $scope.reNewPassword) {
            Swal.fire({
                icon: 'error',
                title: 'Nhập Lại Mật Khẩu Mới Không trùng với mật khẩu mới!'
            });
        }
    }
})