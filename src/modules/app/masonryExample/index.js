'use strict';

module.exports =
  angular.module('masonry.masonryExample', [
  ])
  .config(function ($stateProvider) {
    $stateProvider
    .state('masonry', {
      url: '/',
      templateUrl: 'app/masonryExample/layout.html',
      controller: 'masonryController'
    });
  })
  .controller('masonryController', require('./masonryController'));
