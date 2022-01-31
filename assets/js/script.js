var today = $("#currentDay");
var hours = [7,8,9,10,11,12,13,14,15,16]
var localStorageHappening = localStorage.getItem('happening-today');
var happeningToday;
var container = $('.container');


today = moment().format('dddd,MMM Do');
$("#currentDay").text(today);

for(var i=0; i<24; i++) {
    var TimeBlock = $("#hr-" + i);

    if (i<moment().hour()){
        TimeBlock.addClass("past")
    }
    if (i==moment().hour()){
        TimeBlock.addClass("present")
    }
    if (i>moment().hour()){
        TimeBlock.addClass("future")
    }
}

// if (!localStorageHappening) {
//     happeningToday ={};
// }
// else {
//     happeningToday = JSON.parse(localStorageHappening);
// }

//Displays the current date on the page
var savedAssignment
container.on("click", "button", function(event){
    event.preventDefault()
    var hour = $(event.target).parent().attr("id")
    var task = $(event.target).siblings().attr("textarea").val()

    localStorage.setItem(hour,task)
    console.log(task)

});



$("#hour-8 textarea").val(localStorage.getItem("happening-today"));




