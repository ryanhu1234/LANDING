//put in the first day of school here
var firstDay = "August 24 2018";

/*
Put all dates that you have off school on non-weekends here 
inside the brackets. Make sure every date is surrounded by quotes
and separate dates with a comma.
MAKE SURE ALL THE DATES ARE RIGHT. CHECK TO MAKE SURE YOU DIDN'T 
PUT WRONG YEAR OR FORGOT A COMMA OR QUOTE.
*/
var daysNotToCount = ["August 31 2018", "September 3 2018", "September 7 2018", "October 8 2018", "November 12 2018", "November 15 2018", "November 16 2018", "November 22 2018", "November 23 2018", "November 26 2018", "December 24 2018", "December 25 2018", "December 26 2018", "December 27 2018", "December 28 2018", "December 31 2018", "January 1 2019", "January 30 2019", "January 31 2019", "February 15 2019", "February 18 2019", "March 8 2019", "April 18 2019", "April 19 2019", "April 22 2019", "May 10 2019", "May 24 2019", "May 27 2019"];

/*
Constrains number between 1 and 180. That way no negative 
numbers or too high numbers are displayed on screen. Will use
later in program
*/
function isAcceptableDay(number) {
	if (number >= 1 && number <=180) {
		return number;
	}else {
		return "";
	}
}


//This variable is the number equivalent of one day in milliseconds
var mathDays = 1000*60*60*24;

/*
This variable converts the 'firstDay' variable above to a
easier to use date/number that you can use to calculate things
*/
var firstDate = new Date(firstDay);

//This gets today's current date and time
var today = new Date ();

/*
The code below makes sure that the hour doesn't matter.
It effectively says that it's always 12 AM of today's date.
*/
today = Math.floor(today.getTime()/mathDays) * mathDays;
today = new Date(today + mathDays/6);

//This calculates the days since the first day, not counting weekends
var days = Math.floor((today - firstDate)/mathDays);
days -= Math.floor((days + new Date(firstDay).getDay())/7)
	*2;

/*
This subtracts the 'daysNotToCount' above only if today's date 
is past the dayNotToCount
*/
for (var i = 0; i < daysNotToCount.length; i++) {
	var tempDate = new Date(daysNotToCount[i]);
	if (today - tempDate >= 0) {
		if (today - tempDate
				<= mathDays*(today.getDay())) {
			document.getElementById("date_" + 
				tempDate.getDay()).innerHTML = 
				"don't count";
		}
		days--;
	}else if(tempDate - today <= mathDays*
			(5 - today.getDay())) {
		document.getElementById("date_" + 
			tempDate.getDay()).innerHTML = 
			"don't count";
	}
}

//This updates all text on-screen to acceptable numbers.
document.getElementById("day_count").innerHTML = "Day " + 
	isAcceptableDay(days +1);
document.getElementById("week_number").innerHTML = 
	isAcceptableDay(Math.floor(((days - 1)/ 5) % 9));
document.getElementById("week").innerHTML = 
	((days - (days + 4) % 5)) + "-" + (days + 
	4 - (days + 4) % 5);
document.getElementById("date").innerHTML = (today.getMonth() + 
	2) + "-" + (today.getDate()+1) + "-" + (today.getFullYear() - 
	2000);

/*
This makes it so that a day off of school does not show up as 
a day counted on the calendar, even in the middle of a week.
*/
var emptySpaces = 0;
for (var i = 1; i < 6; i++) {

	if (document.getElementById("date_" + i).innerHTML != 
			"don't count") {
		document.getElementById("date_" + i).innerHTML = 
			isAcceptableDay((i - today.getDay()) + days - 
			emptySpaces);
	}else {
		document.getElementById("date_" + i).innerHTML = "";
		if (today.getDay() <= i) {
			emptySpaces++;
		}
	}
}
