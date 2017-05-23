app.factory('suggestions', [function() {
  var demoSuggestions = {
    posts: [

      {
      title: 'Finish building Angular suggestion-box app',
      upvotes: 15,
      comments: [
        {
          body: "cool for building SPA!",
          upvotes: 0
        },
        {
          body: "great tool for front-end dev",
          upvotes: 0
        }
      ],
      id: 1
      },

      {
      title: 'Build Heroku rake for scheduling pings to Twitter API',
      upvotes: 25,
      comments: [
        {
          body: "yaay to cliff for suggesting this!",
          upvotes: 4
        },
        {
          body: "then you'll be able to scale your app w/o hitting the rate-limit!",
          upvotes: 8
        }
      ],
      id: 2
      },

      {
      title: 'Go indoor rock-climbing this Saturday',
      upvotes: 7,
      comments: [
        {
          body: "fun but strenuous!",
          upvotes: 0
        },
        {
          body: "great activity for a rainy day and to stay active!",
          upvotes: 0
        }
      ],
      id: 3
      },

      {
      title: "Check out row-boating in Prospect Park",
      upvotes: 3,
      comments: [
        {
          body: "the one in central park was amazing!",
          upvotes: 0
        },
        {
          body: "go w/ a fun friend!",
          upvotes: 0
        }
      ],
      id: 4
      },
    ]
  };
  return demoSuggestions;
}]);
