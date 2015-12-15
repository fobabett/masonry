'use strict';

module.exports = /*@ngInject*/
  function masonryController($scope, angularGridInstance) {

    $scope.pics = [
      {
        url: 'http://placehold.it/300x200',
        categories: [
          {value: 'cute'},
          {value: 'meh'}
        ] 
      },
      {
        url: 'http://placehold.it/300x200',
        categories: [
          {value: 'funny'}
        ] 
      },
      {
        url: 'http://placehold.it/300x200',
        categories: [
          {value: 'action'}
        ] 
      },
      {
        url: 'http://placehold.it/300x200',
        categories: [
          {value: 'cute'}
        ] 
      },
      {
        url: 'http://placehold.it/300x200',
        categories: [
          {value: 'meme'},
          {value: 'doge'}
        ] 
      },
      {
        url: 'http://placehold.it/300x200',
        categories: [
          {value: 'blah'}
        ] 
      },
      {
        url: 'http://placehold.it/300x200',
        categories: [
          {value: 'cute'}
        ] 
      },
      {
        url: 'http://placehold.it/300x200',
        categories: [
          {value: 'blah'}
        ] 
      },
      {
        url: 'http://placehold.it/300x200',
        categories: [
          {value: 'funny'}
        ] 
      },
      {
        url: 'http://placehold.it/300x200',
        categories: [
          {value: 'blah'}
        ] 
      },
      {
        url: 'http://placehold.it/300x200',
        categories: [
          {value: 'blah'}
        ] 
      },
      {
        url: 'http://placehold.it/300x200',
        categories: [
          {value: 'meh'}
        ] 
      }
    ];

    for(var i in $scope.pics) {
      $scope.categories = $scope.pics[i].categories
    }

    $scope.refresh = function(){
      angularGridInstance.gallery.refresh();
    }

  };
