angular.module('CardsAgainstAssembly')
  .directive('wdiCard', wdiCard);

function wdiCard() {
	let directive = {
		restrict: 'E',
		replace: true,
		templateUrl: 'templates/cardDirective.html',
		scope: {
			question: '@',
		},
	};
	return directive;
}