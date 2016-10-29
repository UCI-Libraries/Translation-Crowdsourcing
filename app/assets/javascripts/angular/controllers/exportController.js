titlesApp
  .controller('exportController', ['$scope', '$http', function($scope, $http){

  $scope.getTranslationsArray =
    $http.get('admin/translations_export.json').then(function(response) {
      return response.data;
    });

  $scope.getTitlesArray =
    $http.get('admin/titles_export.json').then(function(response) {
      return response.data;
    });

}]);
