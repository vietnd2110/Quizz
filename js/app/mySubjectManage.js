app.controller("subject_management", function ($scope, $http) {
    $scope.subjects = [];
    $scope.isLoading = false;
    // $scope.index == -1;

    const url = "https://620e49a3585fbc3359dce84b.mockapi.io/subject";
    $scope.isLoading = true;

    $http.get(url).
    then(function (response) {
        $scope.subjects = response.data;
        $scope.isLoading = false;
    })

    $scope.onSubmitForm = function (event) {
        event.preventDefault();
        $scope.isLoading = true;
        $http.post(url, $scope.sub)
            .then(function (response) {
                $scope.isLoading = false;
                Swal.fire({
                    icon: 'success',
                    title: 'Thêm mới thành công!',
                });
                $scope.subjects.push(response.data);
            })
    }

    $scope.onSubmitFormUpdtae = function (event, id) {
        event.preventDefault();
        $scope.isLoading = true;
        const updateApi = url + '/' + id;
        $http.put(updateApi, $scope.item)
            .then(function (response) {
                $scope.isLoading = false;
                Swal.fire({
                    icon: 'success',
                    title: 'Cập nhật thành công!',
                });
            })
    }



    $scope.onDelete = function (id, index) {
        const deleteApi = url + '/' + id;
        $http.delete(deleteApi)
            .then(function (response) {
                Swal.fire({
                    icon: 'success',
                    title: 'Xóa thành công!',
                    text: 'Quay lại trang chủ!',
                });
                $scope.subjects.splice(index, 1);
                $("#modal_delete_" + id).modal('hide');
            })

    }

    // $scope.edit = function (id) {
    //     const getApi = url + '/' + id;
    //     $http.get(getApi)
    //         .then(function (response) {
    //             $scope.sub = response.data;
    //         })
    // }

});