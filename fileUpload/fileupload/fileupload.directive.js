angular.module('Assignment.Fileupload')
.directive('upload', upload)

upload.$inject = ['$parse', 'fileUploadService'];				 

function upload($parse, fileUploadService) {
  return {
     restrict: 'A',
     link: function(scope, element, attrs) {		 
         element.bind('change', function(){
         		var file = element[0].files[0];
						if(!!file){
		          fileUploadService
		          .uploadFile(file)
		          .success(function(res){ 
		          	scope.status = res; 
		          })
		          .error(function(error){
			          scope.status = error;
		          });
            }
         });
      }
   };
}
 
