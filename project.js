var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {
    $scope.firstName = "John";
    $scope.lastName = "Doe";
});
$(document).ready(function(){
   $("#startDateText").focusout(function(){
       //callFunction();
   });
   $("#toDateText").focusout(function(){
       callFunction();
   });
});
function callFunction(){
if($("#startDateText").val()!=0 && $("#startDateText").val()!=undefined &&
		 $("#toDateText").val()!=0 && $("#toDateText").val()!=undefined){
var startDate = $("#startDateText").val();
var endDate = $("#toDateText").val();
var selectedStartMonth = parseInt(startDate.substring(5,7));
var selectedEndMonth = parseInt(endDate.substring(5,7));
var selectedStartYear = parseInt(startDate.substring(0,4));
var addedMonthValue;
var calculatedMonthValue;
var calculatedDateValue;
var calculatedYearValue=endDate.substring(0,4)-startDate.substring(0,4);
var addedDays=0;
var addedDateValue=0;
var incrementer;
if(calculatedYearValue!=0){
addedMonthValue=(calculatedYearValue*12);
calculatedMonthValue=(selectedEndMonth+addedMonthValue)-parseInt(startDate.substring(5,7));
} else{
 	 calculatedMonthValue=parseInt(endDate.substring(5,7))-parseInt(startDate.substring(5,7));
	}
for(incrementer=0;incrementer<calculatedMonthValue;incrementer++){
if(calculatedMonthValue!=0){
	if(selectedStartMonth<=6){
		if((selectedStartMonth%2==0)&&!(selectedStartMonth==2)){
		addedDays=addedDays+30;
		} else if(selectedStartMonth==2){
			if(selectedStartYear%4==0&&selectedStartYear%100==0&&selectedStartYear%400==0){
				addedDays=addedDays+29;
			} else {
				addedDays=addedDays+28;
			}
			} else {
			addedDays=addedDays+31;
		}
   } else {
			if(selectedStartMonth%2==0||selectedStartMonth==7){
			addedDays=addedDays+31;
			} else {
			addedDays=addedDays+30;
			}
		}
} else {
	 calculatedDateValue=parseInt(endDate.substring(8,10))-parseInt(startDate.substring(8,10));	
	}
	addedDateValue=addedDays;
	if(selectedStartMonth==12){
		selectedStartMonth=1;
	} else {
		selectedStartMonth++;
		}
	}
	calculatedDateValue=(parseInt(endDate.substring(8,10))+addedDateValue)-parseInt(startDate.substring(8,10));
	$('#leaveDaysText').val(calculatedDateValue+1);
 }
}