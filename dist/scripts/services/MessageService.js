(function() {
    function MessageService($firebaseArray, RoomService, $cookies) {
        var MessageService = {};
        var ref = firebase.database().ref().child("messages");
        var username = $cookies.get('blocChatCurrentUser');
        var time = firebase.database.ServerValue.TIMESTAMP;
        
        MessageService.messages = [];
        
        MessageService.getByRoomId = function(roomId) {
            console.log(roomId);
            var roomMessages = ref.orderByChild("roomId").equalTo(roomId);
            MessageService.messages = $firebaseArray(roomMessages);
        };
        
        MessageService.sendMessage = function(messageContent, roomId) {
            if (messageContent) {
                console.log(messageContent);
            $firebaseArray(ref).$add({ username : username, content: messageContent, sentAt: time, roomId: roomId })
            }
        };
        
        return MessageService;
    }

  angular
    .module('blocChat')
    .factory('MessageService', ['$firebaseArray', 'RoomService', '$cookies', MessageService]);
})();