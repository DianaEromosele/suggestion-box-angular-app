app.factory('suggestions', [function() {
  var demoSuggestions = {
    posts: [
      {
      title: 'Finish building Angular suggestion-box app',
      upvotes: 15,
      comments: ["yaaay i'm excited"],
      },
      {
      title: 'Build Heroku rake for scheduling pings to Twitter API',
      upvotes: 25,
      comments: [],
      },
      {
      title: 'Go indoor rock-climbing this Saturday',
      upvotes: 7,
      comments: [],
      },
      {
      title: "Check out row-boating in Prospect Park",
      upvotes: 3,
      comments: [],
      },
    ]
  };
  return demoSuggestions;

}]);
