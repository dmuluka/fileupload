angular.module('Assignment.Fileupload')
.service('fileUploadService', fileUploadService)

fileUploadService.$inject =  ['$http', 'CONSTANT'];

function fileUploadService($http, CONSTANT) {
  this.uploadFile = function(file){
     var fd = new FormData();
     var url = "http://"+CONSTANT.host+":"+CONSTANT.port+"/upload";
     fd.append('file', file);

     return $http.post(url, fd, {
        //headers: {'Content-Type': 'multipart/form-data'},
        //transformRequest: angular.identity,
        headers: {'Content-Type': undefined}
     })
  }
}
 
