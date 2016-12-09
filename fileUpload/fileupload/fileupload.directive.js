angular.module('Assignment.Fileupload')
.directive('upload', upload)

upload.$inject = ['$parse', 'fileUploadService'];				 

function upload($parse, fileUploadService) {
  return {
     restrict: 'A',
     link: function(scope, element, attrs) {		 
         element.bind('change', function(){
            fileUploadService
            .uploadFile(element[0].files[0])
            .success(function(res){ 
            	scope.status = res; 
            })
            .error(function(error){
	            scope.status = error;
            });
         });
      }
   };
}
 
