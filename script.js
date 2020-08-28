$(document).ready(function(){

//global vars
var nowDate = moment().format("lll");
var save = $(".saveBtn");
// var hourArray = ["9am", "10am", "11am", "12pm", "1pm","2pm","3pm","4pm","5pm"];



$("#currentDay").text(nowDate);


$(save).on("click", function(){
    var desc = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");

    localStorage.setItem(time, desc);
})

//checking var
$("#currentDay").html(nowDate);



$("#9am .description").val(localStorage.getItem("9am"));
$("#10am .description").val(localStorage.getItem("10am"));
$("#11am .description").val(localStorage.getItem("11am"));
$("#12pm .description").val(localStorage.getItem("12pm"));
$("#1pm .description").val(localStorage.getItem("1pm"));
$("#2pm .description").val(localStorage.getItem("2pm"));
$("#3pm .description").val(localStorage.getItem("3pm"));
$("#4pm .description").val(localStorage.getItem("4pm"));
$("#5pm .description").val(localStorage.getItem("5pm"));

});


