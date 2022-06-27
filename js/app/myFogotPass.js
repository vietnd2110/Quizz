app.controller("fogot_pass", function($rootScope,$scope){
    $scope.getPass = function(){
        var check = true;
        $rootScope.students.forEach(item => {
            if(item.email == $scope.email &&
               item.username == $scope.username){
                Swal.fire({
                    icon: 'success',
                    title: 'Lấy lại tài khoản thành công!',
                    text: 'Mật khẩu: ' + item.password,
                });
                check = false;
                return;
            }
        });
        if(check){
            Swal.fire({
                icon: 'error',
                title: 'Lấy lại tài khoản thất bại!',
                text: 'Vui lòng nhập lại thông tin',
            });
        }
    }
})