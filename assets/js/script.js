var today = $("#currentDay");
var hours = [7,8,9,10,11,12,13,14,15,16]
var localStorageHappening = localStorage.getItem('happening-today');
var happeningToday;

if (!localStorageHappening) {
    happeningToday ={};
}
else {
    happeningToday = JSON.parse(localStorageHappening);
}

//Displays the current date on the page
today = moment().format('dddd,MMM Do');
$("#currentDay").text(today);



