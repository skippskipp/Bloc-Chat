(function() {
    function RoomService($firebaseArray) {
        var RoomService = {};
        
        var ref = firebase.database().ref().child("rooms");
        
        RoomService.all = $firebaseArray(ref);
        
        return RoomService
    }

  angular
    .module('blocChat')
    .factory('RoomService', ['$firebaseArray', RoomService]);
})();