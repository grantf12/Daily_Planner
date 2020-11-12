$(document).ready(function () {
    // Using moment(), this function calls for the day, month, and year. 
    var now = moment()
    $("#currentDay").text(now.format("dddd, MMMM Do YYYY"))

    highlighter();

    // Highlights each time-block for Past, Present and Future by calling for the hour in military time and checks it against the id's
    function highlighter() {
        var hour = now.format("HH")
        $("textarea").each(function () {
            var current = parseInt($(this).attr("id"));
            if (current > hour) {
                $(this).addClass("future")
            }
            else if (current === hour) {
                $(this).addClass("present")
            }
            else {
                $(this).addClass("past")
            }
        })
    }

    // For loop that loops through the different appointments that are saved in the localStorage and makes a text in textarea[i]
    for (var i = 9; i < 18; i++) {
        var savedAppointment = localStorage.getItem("appointment" + (i));
        if (savedAppointment !== null) {
            $("#" + (i)).text(savedAppointment);
        }
    }

    // Takes the data-btn # from the attributes in the button that is "clicked". Then takes the value that in in the textarea using the $id by using the data-btn number then saves that in localStorage
    $(".saveBtn").on("click", function () {
        var saved = $(this).attr("data-btn");
        var text = $("#" + saved).val();
        localStorage.setItem("appointment" + saved, text)

    })
})
