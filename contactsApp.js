var app = angular.module("contactsApp", []);

app.controller("mainController", 
	function ($scope) {	
	// contacts list array
	$scope.contacts = [];

	// add contact to list
	$scope.addContact = function(isValid) {
		if (isValid) {
			var date = new Date();
			$scope.contacts.push({
				dateCreated: date.toDateString(),
				name: $scope.contactName,
				email: $scope.contactEmail
			});
			
			// clears input fields after push
			document.forms["contactForm"].reset();
		}
	};
});