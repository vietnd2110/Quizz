const app = angular.module("my_app", ['ngRoute']);

app.run(function ($rootScope, $http) {
    // 
    $rootScope.$on('$routeChangeStart', function () {
        $rootScope.isLoading = true;
    });
    $rootScope.$on('$routeChangeSuccess', function () {
        $rootScope.isLoading = false;
    });
    $rootScope.$on('$routeChangeError', function () {
        $rootScope.isLoading = false;
        alert("Lỗi");
    });
    // 
    $rootScope.students = [];
    // const url = "https://620e49a3585fbc3359dce84b.mockapi.io/Users";

    $http.get("https://620e49a3585fbc3359dce84b.mockapi.io/Users")
        .then(function (response) {
            $rootScope.students = response.data;
        });
    $rootScope.student = null;

    // subject
    // $http.get("https://620e49a3585fbc3359dce84b.mockapi.io/subject").then(function(response){
    //     $rootScope.subjects = response.data;
    // })

    $rootScope.logoff = function () {
        $rootScope.student = null;
        // $rootScope.index = -1;
        Swal.fire({
            icon: 'warning',
            title: 'Đã đăng xuất!',
            text: 'Quay lại trang chủ!',
        });
        window.location.href = "#home";
    }
});

app.config(function ($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix('');
    $routeProvider
        .when("/home",
            { templateUrl: "html/home.html" })
        .when("/about",
            { templateUrl: "html/about.html" })
        .when("/contact",
            { templateUrl: "html/contact.html" })
        .when("/feedback",
            { templateUrl: "html/feedback.html" })
        .when("/account",
            {
                templateUrl: "html/accountManagement.html",
                controller: "my_account"
            })
        .when("/login",
            {
                templateUrl: "html/login.html",
                controller: "loginCtrl"
            })
        .when("/subject",
            {
                templateUrl: "html/subject.html",
                controller: "my_Subject"
            })
        .when("/register",
            {
                templateUrl: "html/registransion.html",
                controller: "my_register"
            })
        .when("/fogotPassword",
            {
                templateUrl: "html/fogot-pasword.html",
                controller: "fogot_pass"
            })
        .when("/changePassword",
            {
                templateUrl: "html/change-password.html",
                controller: "change_pass"
            })
        .when("/updateAccout",
            {
                templateUrl: "html/update-information.html",
                controller: "update_account"
            })
        .when("/subjectManagement",
            {
                templateUrl: "html/subjectManagement.html",
                controller: "subject_management"
            })
        .when("/quizz/:id/:name", {
            templateUrl: "html/quizz-app.html",
            controller: "quizzCtrl"
        })
        .otherwise({ redirectTo: "/home" });
});







