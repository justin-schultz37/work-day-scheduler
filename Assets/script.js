
$(document).ready(function () {

    var currentDate = dayjs();

    $('#currentDay').text(currentDate.format('dddd, MMMM, DD'));
    console.log(currentDate);

    $('.saveBtn').on('click', function () {
        var text = $(this).siblings('.description').val();
        var time = $(this).parent().attr('id');
        console.log('Show this if saveBtn is working');

        // Confirmed this is storing the text and time locally
        localStorage.setItem(time, text);
    })

    // This functions checks for the current hour
    function currentTime() {
        var localTime = dayjs().hour();
        console.log('Is this displaying the current hour: ' + localTime);

        $('.time-block').each(function () {
            var timeBlock = parseInt($(this).attr('id').split('hr')[1]);

            if (timeBlock < localTime) {
                $(this).addClass('past');
            }
            else if (timeBlock === localTime) {
                $(this).addClass('present');
            }
            else {
                $(this).addClass('future');
            }
        })
    }

    $("#hr9 .description").val(localStorage.getItem("hr9"));
    $("#hr10 .description").val(localStorage.getItem("hr10"));
    $("#hr11 .description").val(localStorage.getItem("hr11"));
    $("#hr12 .description").val(localStorage.getItem("hr12"));
    $("#hr13 .description").val(localStorage.getItem("hr13"));
    $("#hr14 .description").val(localStorage.getItem("hr14"));
    $("#hr15 .description").val(localStorage.getItem("hr15"));
    $("#hr16 .description").val(localStorage.getItem("hr16"));
    $("#hr17 .description").val(localStorage.getItem("hr17"));

    currentTime();

});