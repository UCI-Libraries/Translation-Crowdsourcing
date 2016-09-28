titlesApp
  .controller('translationApprovalController', ['$scope', '$http', '$stateParams', 'titlesService', 'NgTableParams', '$state', function($scope, $http, $stateParams, titlesService, NgTableParams, $state){

      var init = function() {
        getTranslations();
      };

      var data = [];
      $scope.tableParams = new NgTableParams(
          {sorting: { id: "asc" }}, { dataset: data}
        );

      $scope.approvedFilter = [{title: 'approved', id: true},{title: 'unapproved', id: false}];

      function getTranslations() {
        $http.get('admin/translations/').then(function(response) {
          var data = setTitle(response.data);
          $scope.tableParams.settings({dataset: data});
        });
      }

      function setTitle(data) {
        data.forEach( function(title) {
          title.chinese_title = title.title.chinese_title;

        });
        return data;
      }

      $scope.approveTranslation = function(translation) {
        $http.put('admin/translations/'+ translation.id, {"approved": true}).then(function(response) {
          console.log("Approved!", response.data);
          getTranslations();
        });
      };

      $scope.revokeTranslation = function(translation) {
        $http.put('admin/translations/'+ translation.id, {"approved": false}).then(function(response) {
          console.log("Revoked!", response.data);
          getTranslations();
        });
      };

      $scope.seeTitle = function(id) {
        var url = $state.href('titles', {"id": id});
        window.open(url,'_blank');
      };

      $scope.setFlag = function(flag) {
        console.log("setting");
      };

      init();



}]);
