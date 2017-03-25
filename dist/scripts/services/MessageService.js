(function() {
    function MessageService($firebaseArray, RoomService) {
        var MessageService = {};
        var ref = firebase.database().ref().child('messages');
        
        MessageService.all = $firebaseArray(ref);
        
        MessageService.add = function(messageContent) {
            $firebaseArray(ref).$add({ username : "JOHN", content: messageContent, sentAt: "TIME", roomId: "ROOM UID HERE" }).then(function(ref) {
                var id = ref.key;
                console.log("added record with id " + id);
            })
        };
        
        console.log(MessageService.all);
        
        return MessageService;
    }

  angular
    .module('blocChat')
    .factory('MessageService', ['$firebaseArray', 'RoomService', MessageService]);
})();