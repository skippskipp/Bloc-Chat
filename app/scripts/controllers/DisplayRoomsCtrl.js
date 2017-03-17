(function() {
    function DisplayRoomsCtrl(RoomService) {
        this.roomService = RoomService;
    }
 
    angular
        .module('blocChat')
        .controller('DisplayRoomsCtrl', ['RoomService', DisplayRoomsCtrl]);
})();