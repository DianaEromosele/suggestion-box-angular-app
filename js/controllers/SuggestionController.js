app.controller('SuggestionController', ['$scope', '$routeParams', 'suggestions', function($scope, $routeParams, suggestions) {

  // Put an individual post in a new "post" object
  $scope.post = suggestions.posts[$routeParams.id];

  // Push a new comment into a post
  $scope.addComment = function(){
    if (!$scope.body || $scope.body == "") {
      return;
    }
    $scope.post.comments.push({
      body: $scope.body,
      upvotes: 0
    });
    $scope.body = "";
  };

  $scope.upVote = function(comment){
    comment.upvotes++;
  }

}]);
