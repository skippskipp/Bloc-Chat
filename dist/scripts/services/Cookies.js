(function() {
  function BlocChatCookies($cookies, $uibModal) {
    var currentUser = $cookies.get('blocChatCurrentUser');
    if (!currentUser || currentUser === '') {
        $uibModal.open({
            controller: 'PromptCtrl',
            controllerAs: 'prompt',
            templateUrl: '/templates/prompt.html',
            backdrop: 'static'
        });
    }
  }

  angular
    .module('blocChat')
    .run(['$cookies', '$uibModal', BlocChatCookies]);
})();