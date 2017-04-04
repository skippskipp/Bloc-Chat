(function() {
    function RoomService($firebaseArray) {
        var RoomService = {};
        var ref = firebase.database().ref().child('rooms');
        
        RoomService.all = $firebaseArray(ref);
        
        RoomService.add = function(roomName) {
            $firebaseArray(ref).$add({ roomName : roomName }).then(function(ref) {
                var id = ref.key;
                console.log("added record with id " + id);
            })
        };
        
        return RoomService;
    }

  angular
    .module('blocChat')
    .factory('RoomService', ['$firebaseArray', RoomService]);
})();


