function mySubject($scope, $http, $rootScope) {
    $scope.subjects = [];
    $scope.isLoading = false;

    const url = "https://620e49a3585fbc3359dce84b.mockapi.io/subject";
    $scope.isLoading = true;
    $http.get(url).then(function (response) {
        $scope.isLoading = false;
        $scope.subjects = response.data;
    })

    $scope.test = function () {
        // if ($rootScope.student == null) {
            Swal.fire({
                icon: 'error',
                title: 'Bạn Chưa Đăng Nhập!',
                text: 'Bạn Phải Đăng Nhập Mới Làm Được Bài Thi!'
            });
            window.location.href = "#login";
        // }
        //  else {
        //     window.location.href = "#quizz/" + $scope.subjects.Id + '/' + $scope.subjects.Name;
        // }
    }



    $scope.begin = 0;
    $scope.pageCount = Math.ceil($scope.subjects.length / 8);
    $scope.first = function () {
        $scope.begin = 0;
    }

    $scope.prev = function () {
        if ($scope.begin > 0) {
            $scope.begin -= 8;
        }
    }

    $scope.next = function () {
        if ($scope.begin < ($scope.pageCount - 1) * 8) {
            $scope.begin += 8;
        }
    }

    $scope.last = function () {
        $scope.begin = ($scope.pageCount - 1) * 8;
    }
}
app.controller("my_Subject", mySubject);