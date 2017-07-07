(function() { //opens iife
  'use strict';

  angular.module("app")

    .component('post',{
      controller: controller,
      templateUrl: './post/post.template.html'
    });

    controller.$inject = ['$http'];

      function controller ($http) {
        const vm = this;
        vm.posts = [];

        vm.$onInit = function () {
          vm.show = false;
          vm.propertyName = 'Votes';
          $http.get('/api/posts')
            .then(function (response) {
              vm.posts = response.data;
              // console.log(response.data);
          });
        };

        vm.newPost = function () {
          if(vm.show === true) {
            vm.show = false;
          } else {
            vm.show = true;
          }
        };

        vm.createPost = function () {
          // console.log('SOL');
          $http.post('/api/posts', vm.post).then(function (response) {
            response.data.comments = [];
            vm.posts.push(response.data);
            vm.show = false;
            console.log(response.data);
          });
          delete vm.post;
        };

        vm.showComments = function (post) {
          if(post.show === true) {
            post.show = false;
          } else {
            post.show = true;
          }
        };

        vm.createComment = function (post, message) {
          let id = post.id;
          let postBox = vm.posts.indexOf(post);
          let input = {content: message};
          $http.post('/api/posts/'+id+'/comments', input).then(function (response) {
            vm.posts[postBox].comments.unshift(response.data);
          });
          post.comments.push(post.message);
          delete post.message;
        };

        vm.upVote = function (post) {
          post.votes += 1;
        };

        vm.downVote = function (post) {
          if(post.votes > 0) {
            post.votes -= 1;
          }
        };

      }

})(); //closes iife
