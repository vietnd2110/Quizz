
// app.controller("quizzCtrl", function ($scope, $http, $routeParams, quizzFactory) {
//     $http.get('../db/Quizs/' + $routeParams.id + '.js').then(function (response) {
//         quizzFactory.questions = response.data;
//     });

// });
app.controller("quizzCtrl", function ($scope, $http, $routeParams, quizzFactory) {
    $http.get('https://620e49a3585fbc3359dce84b.mockapi.io/' + $routeParams.id)
         .then(function (response) {
        quizzFactory.questions = response.data;
    });
});

app.directive('quizzFploy', function (quizzFactory,$routeParams) {
    return {
        restrict: "AE",
        scope: {},
        templateUrl: 'html/template-quizz.html',
        link: function (scope, elem, attrs) {
            scope.start = function () {
                quizzFactory.getQuestions().then(function(){
                    scope.subjectName = $routeParams.name;
                    scope.id = 1;
    
                    // chưa hoàn thành câu hỏi
                    scope.quizOver = false;

                    scope.inProgess = true;
                    scope.getQuestion();
                });
            };
            scope.reset = function () {
                scope.inProgess = false;
                // Điểm bằng 0
                scope.score = 0;
            };
            scope.reset();
            scope.getQuestion = function () {
                var quiz = quizzFactory.getQuestion(scope.id);
                if (quiz) {
                    scope.question = quiz.Text;
                    scope.options = quiz.Answers
                    scope.answer = quiz.AnswerId;

                    // ẩn và hieenh nút next
                    scope.answerMode = true;
                } else {
                    // đã hoàn thành hết câu hỏi
                    Swal.fire({
                        icon: 'success',
                        title: 'Đã Hoàn Thành Bài Thi!',
                        text: 'Điểm Của Bạn Là: ' + scope.score,
                    });
                    scope.quizOver = true;
                }
            };

            scope.endNow = function(){
                scope.question == null;
            }

            scope.checkAnswer = function () {
                // alert('answer');
                // phủ định của nó k có đáp án nào check thì mình return
                if (!$('input[name = answer]:checked').length) return;
                var ans = $('input[name = answer]:checked').val();
                if (ans == scope.answer) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Đáp Án Đúng!',
                    });
                    // nếu đúng điểm sẽ tăng lên
                    scope.score++;

                    // scope.correctAns = true;
                } else {
                    // alert('sai');
                    Swal.fire({
                        icon: 'error',
                        title: 'Đáp Án Sai!',
                    });
                    // scope.correctAns = false;
                }

                // ẩn và hieenh nút next
                scope.answerMode = false;
            };
            scope.nextQuestion = function(){
                scope.id++;
                scope.getQuestion();
            }
        }
    }
});

app.factory('quizzFactory', function($http,$routeParams){
    return {
        getQuestions:function(){
        //    return $http.get('../db/Quizs/' + $routeParams.id + '.js').then(function (response) {
        //         questions = response.data;
        //     });
        return $http.get('https://620e49a3585fbc3359dce84b.mockapi.io/' + $routeParams.id)
                    .then(function (response) {
            questions = response.data;
        });
        },
        getQuestion : function(id){
            // load 10 câu hỏi
            var random = questions[Math.floor(Math.random() * questions.length)];
            var count = questions.length;
            if (count > 10) {
                count = 10;
            }
            if (id < count) {
                return random;
            } else{
                return false;
            }
        }
    }
});




// app.controller("quizzCtrl", function ($scope, $http, $routeParams, quizzFac) {
//     // $scope.quizzs = [];
//     const url = 'https://620e49a3585fbc3359dce84b.mockapi.io/' + $routeParams.id;

//     $http.get(url)
//         .then(function (response) {
//             quizzFac.question = response.data;
//         });
// });

// app.directive('quizzFploy', function ($routeParams) {
//     return {
//         restrict: "AE",
//         scope: {},
//         templateUrl: '../html/template-quizz.html',
//         link: function (scope, elem, attrs) {
//             scope.start = function () {
//                 scope.subjectName = $routeParams.name;
//                 scope.id = 1;

//                 scope.inProgess = true;
//                 scope.getQuestion();
//             }

//             scope.reset = function () {
//                 scope.inProgess = false;

//                 scope.score = 0;
//             };

//             scope.getQuestion = function () {
//                 var quizz = quizzFac.getQuestion(scope.id);
//                 if (quizz) {
//                     scope.question = quizz.Text;
//                     scope.options = quizz.Answers;
//                     scope.anser = quizz.AnswerId;
//                 }
//             }
//         }
//     };
// });