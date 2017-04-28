angular.module('CardsAgainstAssembly')
  .controller('CardsController', CardsController);

CardsController.$inject = ['$http'];
function CardsController($http){
  var vm = this;
  vm.questionsList = [];
  vm.getCards

  getCards();
  function getCards() {
    $http
      .get('https://shielded-forest-41789.herokuapp.com/api/flashcards')
      .then(function(response) {
        console.log('In getCards.');
        console.log(response);
        vm.questionsList = response.data;
      });
  }
}
