(function() {
    function HomeCtrl(RoomService, $uibModal) {
        this.roomService = RoomService;
        
        this.openModal = function() {
                $uibModal.open({
                    controller: 'ModalCtrl',
                    controllerAs: 'modal',
                    templateUrl: '/templates/modal.html'
                });
            };
    }
 
    angular
        .module('blocChat')
        .controller('HomeCtrl', ['RoomService', '$uibModal', HomeCtrl]);
})();