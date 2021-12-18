var today = $("#currentDay");
var localStorageHappening = localStorage.getItem('happening-today');
var happeningToday;

if (!localStorageHappening) {
    happeningToday ={};
}
else {
    happeningToday = JSON.parse(localStorageHappening);
}

//Displays the current date on the page
today.text(moment().format('MMMM Do, YYYY'));