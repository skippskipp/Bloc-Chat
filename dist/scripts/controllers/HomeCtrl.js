(function() {
    function HomeCtrl(RoomService, MessageService, $uibModal) {
        this.roomService = RoomService;
        this.roomData = RoomService.all;
        this.activeRoom = null;
        this.messageService = MessageService;
        
        this.openModal = function() {
                $uibModal.open({
                    controller: 'ModalCtrl',
                    controllerAs: 'modal',
                    templateUrl: '/templates/modal.html'
                });
            };
        
        this.select = function(room) {
            this.activeRoom = room;
            console.log("the active room is " + this.activeRoom);
            console.log("the active room's id is ");
            MessageService.getByRoomId(room.$id);
            console.log(this.messageService.messages);
        }
    }
 
    angular
        .module('blocChat')
        .controller('HomeCtrl', ['RoomService', 'MessageService', '$uibModal', HomeCtrl]);
})();