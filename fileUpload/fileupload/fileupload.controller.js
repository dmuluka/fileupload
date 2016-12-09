angular.module('Assignment.Fileupload')
.controller('fileUploadController', fileUploadController)

fileUploadController.$inject =  ['$scope'];

function fileUploadController($scope) {
	$scope.status = "";
}
 
