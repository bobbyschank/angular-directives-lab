angular.module('CardsAgainstAssembly')
  .controller('CardsController', CardsController);

CardsController.$inject = ['$http'];
function CardsController($http){
  var vm = this;
  vm.questionsList = [];
  vm.getCards = getCards;
  vm.newCard = {};
  vm.addCard = addCard;
  vm.deleteCard = deleteCard;
  vm.editCard = {};
  vm.updateCard = updateCard;

  getCards();
  function getCards() {
    console.log('In getCards 1:')
    $http
      .get('http://localhost:3000/cards/')
      .then(function(response) {
        console.log('In getCards.');
        console.log(response);
        console.log(response.data[0]._id);
        vm.questionsList = response.data;
      });
  }

  function addCard() {
    console.log('In addCard.');
    console.log(vm.newCard);
    $http
      .post('http://localhost:3000/cards/', vm.newCard)
      .then(function(response){
        getCards();
      });
    vm.newCard = {};
  }

  function updateCard(x, idNumber) {
    console.log('In updateCard');
    console.log(x);
    console.log(idNumber);
    let cardToUpdate = {};
    $http
      .get('http://localhost:3000/cards/' + idNumber)
      .then(function(response) {
        console.log('response: '+ JSON.stringify(response.data.question));
        cardToUpdate = response.data;
        cardToUpdate.question = x;
        console.log(cardToUpdate);
      });
      $http
        .put('http://localhost:3000/cards/' + idNumber, cardToUpdate);
  }

  function deleteCard(idNumber) {
    console.log('In deleteCard.');
    console.log((idNumber));
    $http
      .delete('http://localhost:3000/cards/' + idNumber)
      .then(function(response) {
        console.log(response);

        getCards();
      });
  }

}
