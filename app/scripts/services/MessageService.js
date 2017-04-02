(function() {
    function MessageService($firebaseArray, RoomService) {
        var MessageService = {};
        var ref = firebase.database().ref().child("messages");
        
        MessageService.messages = [];
        
        MessageService.getByRoomId = function(roomId) {
            console.log(roomId);
            var roomMessages = ref.orderByChild("roomId").equalTo(roomId);
            MessageService.messages = $firebaseArray(roomMessages);
        };
        
        MessageService.add = function(messageContent) {
            $firebaseArray(ref).$add({ username : "JOHN", content: messageContent, sentAt: "TIME", roomId: "ROOM UID HERE" }).then(function(ref) {
            })
        };
        
        console.log(MessageService.all);
        
        return MessageService;
    }

  angular
    .module('blocChat')
    .factory('MessageService', ['$firebaseArray', 'RoomService', MessageService]);
})();