$(document).ready(function() {

    // var now = moment()
    // $("#currentDay").text(now.format("dddd, MMMM Do YYYY"))
    // console.log(now.format("dddd, MMMM Do YYYY"));
    // var currentTime = now.format("HH")
    // function what
    
    
    // Add click listener that will:
        // description added to localStorage
        // 
    // localStorage.setItem()

$("#saveBtnNine").on("click", function() {
    var timeNine = document.getElementById("nineAM");
    var descriptionNine = document.getElementsByClassName("descriptionNine");
    localStorage.setItem("appointmentNine", descriptionNine)


$("#nineAM .description").val(localStorage.getItem("nineAM"))
})
// descriptionNine = localStorage.getItem("appointmentNine")

})