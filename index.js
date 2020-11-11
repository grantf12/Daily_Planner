$(document).ready(function() {

    // var now = moment()
    // $("#currentDay").text(now.format("dddd, MMMM Do YYYY"))
    // console.log(now.format("dddd, MMMM Do YYYY"));
    // var currentTime = now.format("HH")
    // for (var i = 0; i < 8; i++) {
    //     // if (currentTime < "data-hour") {
    //     //     $("textarea").addClass("past")
    //     // }
    //     if (currentTime > "data-hour") {
    //         $("textarea").addClass("future")
    //     }
    //     // if (currentTime = "data-hour") {
    //     //     $("textarea").addClass("present")
    //     // }
    // }
    // // format is a function in moment that will let you format the info
    // // moment.com go to Docs, then Display on the right to see how you would want the date displayed 
    // //              console.log(parseIn(now.format("H")));
    // // Will display time in military time as a string (if you parseIn it becomes a number)
    
    
    // Add click listener that will:
        // description added to localStorage
        // 
    // localStorage.setItem()
$("#saveBtnNine").on("click", function() {
    var timeNine = document.getElementById("nineAM");
    var descriptionNine = document.getElementById("nine");
    localStorage.setItem(timeNine, descriptionNine)
})
$("#nineAM").val(localStorage.getItem(timeNine))

})