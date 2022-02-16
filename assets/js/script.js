var today = $("#currentDay");
var container = $('.container');

$('.saveBtn').on("click",function(){
    var value = $(this).siblings('.description').val();
    var key =  $(this).parent().attr('id');

    localStorage.setItem(key, value);
});

today = moment().format('dddd,MMM Do');
$("#currentDay").text(today);

for(var i=7; i<17; i++) {
    var TimeBlock = $("#hr-" + i);

    if (i<moment().hour()){
        TimeBlock.addClass("past");
    }
    if (i===moment().hour()){
        TimeBlock.addClass("present");
    }
    if (i>moment().hour()){
        TimeBlock.addClass("future");
    }
}








$("#hour-7 textarea").val(localStorage.getItem("hour-7"));
$("#hour-8 textarea").val(localStorage.getItem("hour-8"));
$("#hour-9 textarea").val(localStorage.getItem("hour-9"));
$("#hour-10 textarea").val(localStorage.getItem("hour-10"));
$("#hour-11 textarea").val(localStorage.getItem("hour-11"));
$("#hour-12 textarea").val(localStorage.getItem("hour-12"));
$("#hour-13 textarea").val(localStorage.getItem("hour-13"));
$("#hour-14 textarea").val(localStorage.getItem("hour-14"));
$("#hour-15 textarea").val(localStorage.getItem("hour-15"));
$("#hour-16 textarea").val(localStorage.getItem("hour-16"));






