//DOM pointers

//moment.js to set current day in jumbotron

var today = moment().format('dddd, MMMM Do')
console.log(today);
    //also set current hour
var currentHour = moment().format('h a');
console.log(currentHour);
var current24Hour = moment().format('H');
console.log(current24Hour);
var todayKey = moment().format('YYYYMMDD');
console.log(todayKey);

//access session storage to build out current day object

var fetchDayObj = function(key) {
    var todayDataObj = sessionStorage.getItem(key);
    return todayDataObj;
}

var buildTodayObj = function() {
    var todayDataObj = fetchDayObj(todayKey);
    if (todayDataObj === null) {
        console.log("todayDataObj was null");
        todayDataObj = {};
        newBlankObj = JSON.stringify(todayDataObj);
        sessionStorage.setItem(todayKey, newBlankObj);
    } else {
        console.log("todayDataObj was " + todayDataObj);
    }
};

// var templateTester = function() {
//     var testDiv = $("<p>");
//     testDiv.html(`Today's date is ${today}.`);
//     $('.container').append(testDiv);

// }

// templateTester();


//template literal to build out page using current day object and momen
var timeBlockRender = function() {
    for (i = 9; i < 18; i++)
        if (i < current24Hour) {
            var colorClass = (".past")
        } else if (i = current24Hour) {
            var colorClass = (".present")
        } else {
            var colorClass = (".future")
        }
        var timeBlockEl = $("<div>");
        timeBlockEl.html(`
        <div class="input-group mb-3 time-block">
            <div class="input-group-prepend textarea">
                <span class="input-group-text hour description">9AM</span>
            </div>
            <input type="text" class="form-control row" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2" value="potatoes">
            <div class="input-group-append">
                <button class="btn btn-outline-secondary saveBtn" type="button" id="button-addon2">Button</button>
            </div>
        </div>
        `)
        $('.container').append(timeBlockEl);
        console.log(`loop ${i} complete`)

        //  set colorclass variable to "past" class, etc
        // fill out values with info from current day object?
        // template
}
    


//fill out values with info from current day object?

//save button function

// var printSkills = function (name, date) {
//     var listEl = $('<li>');
//     var listDetail = name.concat(' on ', date);
//     listEl.addClass('list-group-item').text(listDetail);
//     listEl.appendTo(skillsListEl);
// };

// var handleFormSubmit = function (event) {
//     event.preventDefault();
  
//     var nameInput = nameInputEl.val();
//     var dateInput = dateInputEl.val();
  
//     if (!nameInput || !dateInput) {
//       console.log('You need to fill out the form!');
//       return;
//     }
  
//     printSkills(nameInput, dateInput);
  
//     // resets form
//     nameInputEl.val('');
//     dateInputEl.val('');
// };
  
// formEl.on('submit', handleFormSubmit);

//write current day object to session storage function



//the good stuff
$(document).ready(() => {
    buildTodayObj();
    // timeBlockRender();
})
