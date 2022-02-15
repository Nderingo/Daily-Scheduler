var today = $("#currentDay");
var container = $('.container');

$('.saveBtn').on("click",function(){
    var value = $(this).siblings('.description').val();
    var key =  $(this).parent().attr('id')

    localStorage.setItem(key, value)
})

today = moment().format('dddd,MMM Do');
$("#currentDay").text(today);

for(var i=7; i<17; i++) {
    var TimeBlock = $("#hr-" + i);

    if (i<moment().hour()){
        TimeBlock.addClass("past")
    }
    if (i===moment().hour()){
        TimeBlock.addClass("present")
    }
    if (i>moment().hour()){
        TimeBlock.addClass("future")
    }
}








$("#hour-7 textarea").val(localStorage.getItem("hour-7"));
$("#hour-8 textarea").val(localStorage.getItem("happening-today"));
$("#hour-9 textarea").val(localStorage.getItem("happening-today"));
$("#hour-10 textarea").val(localStorage.getItem("happening-today"));
$("#hour-11 textarea").val(localStorage.getItem("happening-today"));
$("#hour-12 textarea").val(localStorage.getItem("happening-today"));
$("#hour-13 textarea").val(localStorage.getItem("happening-today"));
$("#hour-14 textarea").val(localStorage.getItem("happening-today"));
$("#hour-15 textarea").val(localStorage.getItem("happening-today"));
$("#hour-16 textarea").val(localStorage.getItem("happening-today"));






