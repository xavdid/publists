'use strict'

import angular = require('angular')
var app = angular.module('publists', [])

app.controller('ListsController', ['$scope', '$http', '$timeout', function($scope, $http, $timeout) {
  $scope.init = function () {
    $scope.model = {}
    $scope.loading = true
    $http.get('/api/lists').then(function(res: { data: { 
      lists: List[],
      public_lists: {[s:string]: boolean}
    }}) {
      $scope.loading = false
      $scope.model.lists = res.data.lists
      $scope.model.public_lists = res.data.public_lists || {}
    })
  }

  $scope.toggle = function (list:List) {
    $scope.model.public_lists[list.id] = !$scope.model.public_lists[list.id]
  }

  $scope.save = function () {
    $scope.model.message = null
    $http.post('/update', {
      public_lists: $scope.model.public_lists
    }).then(function (resp) {
      $scope.model.message = 'Saved!'
      $timeout(function () {
        $scope.model.message = null
      }, 2000)
    }).catch(function (err) {
      console.log(err)
      $scope.model.message = `Error (${err.status}): ${err.data.message}`
    })
  }

  $scope.init()
}])