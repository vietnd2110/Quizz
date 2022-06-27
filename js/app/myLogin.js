app.controller('loginCtrl', function($scope, $rootScope) {
    $scope.login = function() {
        var check = true;
        $rootScope.students.forEach(st => {
            if (st.username == $scope.username) {
                if (st.password == $scope.password) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Đăng nhập thành công!',
                        text: 'Quay lại trang chủ!',
                    });
                    $rootScope.student = st;
                    window.location.href = "#home";
                    check = false;
                    return;
                };
            };
        });
        if (check == true) {
            Swal.fire({
                icon: 'error',
                title: 'Đăng nhập thất bại!',
                text: 'Nhập lại!'
            });
        }
    };
});