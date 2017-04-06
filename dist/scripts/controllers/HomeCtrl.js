(function() {
    function HomeCtrl(RoomService, MessageService, $uibModal) {
        this.roomService = RoomService;
        this.roomData = RoomService.all;
        this.activeRoom = null;
        this.messageService = MessageService;
        this.messages = MessageService.messages;
        this.message = '';
        
        this.openModal = function() {
                $uibModal.open({
                    controller: 'ModalCtrl',
                    controllerAs: 'modal',
                    templateUrl: '/templates/modal.html'
                });
            };
        
        this.select = function(room) {
            this.activeRoom = room;
            MessageService.getByRoomId(room.$id);
        }
        
        this.sendMessage = function() {
            if (this.activeRoom && this.message !== '') {
                MessageService.sendMessage(this.message, this.activeRoom.$id);
                this.message = '';
            }
        }
    }
 
    angular
        .module('blocChat')
        .controller('HomeCtrl', ['RoomService', 'MessageService', '$uibModal', HomeCtrl]);
})();