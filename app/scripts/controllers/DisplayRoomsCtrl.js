(function() {
    function DisplayRoomsCtrl(Room) {
        this.rooms = Room;
    }
 
    angular
        .module('blocChat')
        .controller('DisplayRoomsCtrl', ['Room', DisplayRoomsCtrl]);
})();