// moment.js added to include date.

let today = moment();
// Displays the currrent date formatted in the jumbotron header.
$('#currentDay').text(today.format('dddd, MMMM Do'));

// Sets time for color display columns.
let time = moment();
let hour = moment().hours();

function startSchedule() {
    $('.time-block').each(function () {
        // Obtains time from timeblock id in the HTML file.
        let id = $(this).attr('id');
        let journal = localStorage.getItem(id);

        if (journal !== 'null') {
            $(this).children('.journal').val(journal);
        }
    });
}

// This will save the users data in localStorage.
startSchedule();
let saveBtn = $('.saveBtn');
saveBtn.on('click', function() {
    let time = $(this).parent().attr('id');
    let journal = $(this).siblings('.journal').val();
    
    console.log(time);
    console.log(journal);
    localStorage.setItem(time, journal); // Sets items to localStorage when saveBtn is clicked.
});

// Colors of rows will change based on current time.
function colorBlock() {
    hour = time.hours();
    $('.time-block').each(function () {
        let thisHour = parseInt($(this).attr('id'));
        hour = parseInt(hour);

        if (thisHour > hour) {
            $(this).addClass('future')

        } else if (thisHour === hour) {
            $(this).addClass('present'); 

        } else {
            $(this).addClass('past');
        }
    })

// Allows you to clear the saved data from the page/localStorage. Otherwise, if you refresh or return to the page, the data is saved.
clear.addEventListener('click', function() {
        localStorage.clear();
        location.reload();
    });
}
colorBlock();
