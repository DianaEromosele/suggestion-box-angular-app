app.controller('HomeController', ['$scope', 'suggestions',  function($scope, suggestions) {
  $scope.posts = suggestions.posts;
  // $scope.comments = $scope.posts.forEach(function(post, index){
  //   post.comments
  // });
  $scope.addSuggestion = function() {
    if (!$scope.title || $scope.title == "") {
      return;
    } else {
      $scope.posts.push({
        title: $scope.title,
        upvotes: 0,
        comments: []
      });
    };
    $scope.title = "";
  };
  $scope.upVote = function(post) {
    post.upvotes++;
  };
  $scope.downVote = function(post) {
    post.upvotes--;
  };
}]);
