app.controller("my_account", function ($rootScope, $scope, $http) {
    $scope.students = [];
    $scope.isLoading = false;

    // $scope.index = -1;
    const url = "https://620e49a3585fbc3359dce84b.mockapi.io/Users";
    $scope.isLoading = true;

    $http.get(url).
        then(function (response) {
            // console.log(response);
            $scope.students = response.data;
            $scope.isLoading = false;
        });

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
                        title: 'Thêm thành công!',
                    });
                    $scope.students.push(response.data);

                })
        }
    };
    $scope.onSubmitformUpdate = function (event, id) {
        event.preventDefault();
        $scope.isLoading = true;

        const putApi = url + '/' + id;
        $http.put(putApi, $scope.item)
            .then(function (response) {
                $scope.isLoading = false;
                Swal.fire({
                    icon: 'success',
                    title: 'Cập nhật thành công!',
                });
            })
    };

    // $scope.update = function () {
    //     $scope.onUpdate = function (id) {
    //         $scope.isLoading = true;
    //         const putApi = url + "/" + id;
    //         $http.put(putApi, $scope.regis).then(function (response) {
    //             $scope.isLoading = false;
    //             Swal.fire({
    //                 icon: "success",
    //                 title: "Cập nhật thành công!",
    //             });
    //         });
    //     };
    // }


    $scope.onDelete = function (id, index) {
        const deleteApi = url + '/' + id;
        $scope.isLoading = true;
        $http.delete(deleteApi)
            .then(function (response) {
                $scope.isLoading = false;
                Swal.fire({
                    icon: 'success',
                    title: 'Xóa thành công!',
                });
                $scope.students.splice(index, 1);
                $("#modal_delete_" + id).modal('hide');
            })
    }

    // $scope.edit = function (id) {
    //     $scope.isLoading = true;
    //     const getApi = url + '/' + id;
    //     $http.get(getApi).then(function (response) {
    //         $scope.regis = response.data;
    //         $scope.isLoading = false;
    //     });
    // }
});