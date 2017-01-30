var app=angular.module('myApp', []);
app.controller('namesCtrl', function($scope) {
	$scope.myFunction=function(endDate){
		if(endDate!=undefined){
			alert(JSON.stringify(endDate));
		}
	}
	$scope.employeeFocusOutFunction = function(){
		//to do a call to java to fetch datas from db
		alert();
	}
	$scope.submitFunction = function(){
		//to send a mail to ll
		alert();
	}
	/**
	 * to calculate leave days
	 * to do minus the leave days.
	 */
	$scope.leaveDayCalculationFunction = function(){
		if($scope.startDate !== undefined && $scope.startDate !== null
				&& $scope.endDate !== undefined && $scope.endDate !== null){
			var startDateValues = (JSON.stringify($scope.startDate)).split('-');
			var endDateValues = (JSON.stringify($scope.endDate)).split('-');
			var selectedEndYear = parseInt((!endDateValues[0])?'':endDateValues[0].replace('"',''));
			var selectedEndMonth = parseInt(endDateValues[1]);
			var selectedEndDate = parseInt(endDateValues[2]);
			var selectedStartYear = parseInt((!startDateValues[0])?'':startDateValues[0].replace('"',''));
			var selectedStartMonth = parseInt(startDateValues[1]);
			var selectedStartDate = parseInt(startDateValues[2]);
			var calculatedYearValue = selectedEndYear - selectedStartYear;
			var incrementer;
			var calculatedDateValue;
			var calculatedMonthValue;
			var addedDays = 0;
			var addedDateValue = 0;
			if(calculatedYearValue != 0 && !isNaN(calculatedYearValue)){
				addedMonthValue = (calculatedYearValue*12);
				calculatedMonthValue = (selectedEndMonth+addedMonthValue)-selectedStartMonth;
			} else{
				calculatedMonthValue = selectedEndMonth - selectedStartMonth;
			}
			for(incrementer = 0; incrementer < calculatedMonthValue; incrementer++){
				if(calculatedMonthValue != 0){
					if(selectedStartMonth <= 6){
						if((selectedStartMonth % 2 == 0)&&!(selectedStartMonth == 2)){
						addedDays = addedDays + 30;
						} else if(selectedStartMonth == 2){
							if(selectedStartYear % 4 == 0 && selectedStartYear % 100 == 0 && selectedStartYear % 400 == 0){
								addedDays = addedDays + 29;
							} else {
								addedDays = addedDays + 28;
							}
							} else {
							addedDays = addedDays + 31;
						}
				   } else {
							if(selectedStartMonth % 2 == 0 || selectedStartMonth == 7){
							addedDays = addedDays + 31;
							} else {
							addedDays = addedDays + 30;
							}
						}
				} else {
					 calculatedDateValue = selectedEndDate - selectedStartDate;	
					}
					addedDateValue = addedDays;
					if(selectedStartMonth == 12){
						selectedStartMonth = 1;
					} else {
						selectedStartMonth++;
						}
					}
			$scope.calculatedDateValue=(selectedEndDate+addedDateValue) - selectedStartDate;
		}
	}
});