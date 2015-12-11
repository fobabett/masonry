'use strict';

module.exports =
  angular.module('masonry.common', [
    require('./directives').name,
    require('./filters').name,
    require('./services').name
  ]);
