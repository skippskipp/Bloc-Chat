(function() {
    function ModalCtrl(RoomService, $uibModalInstance) {
        this.roomName = null;
        this.closeModalSuccess = function() {
            if(this.roomName) {
                RoomService.add(this.roomName);
            }
            $uibModalInstance.close();
        }
        
        this.closeModalCancel = function() {
            $uibModalInstance.close()
        }
    }
 
    angular
        .module('blocChat')
        .controller('ModalCtrl', ['RoomService', '$uibModalInstance', ModalCtrl]);
})();
