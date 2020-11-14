//DOM pointers

//moment.js to set current day in jumbotron

var today = moment().format('dddd, MMMM Do, YYYY')
console.log(today);
    //also set current hour
var currentHour = moment().format('h a');
console.log(currentHour);
var current24Hour = moment().format('H');
console.log(current24Hour);
var todayKey = moment().format('YYYYMMDD');
console.log(todayKey);

$('#currentDay').html(today);


//access session storage to build out current day object

// var fetchDayObj = function(key) {
//     var todayDataObj = (key));
//     console.log(todayDataObj);
// }

// fetchDayObj();

// var buildTodayObj = function() {
//     var storedTodayStr = sessionStorage.getItem(todayKey)
//     var todayDataObj = JSON.parse(storedTodayStr);
//     if (todayDataObj === null) {
//         console.log("todayDataObj was null.");
//         todayDataObj = {};
//         newBlankObj = JSON.stringify(todayDataObj);
//         sessionStorage.setItem(todayKey, newBlankObj);
//     } else {
//         console.log(todayDataObj);
//     }
// };

// todayDataObj = {"9AM": "test"};

// var templateTester = function() {
//     var testDiv = $("<p>");
//     testDiv.html(`Today's date is ${today}.`);
//     $('.container').append(testDiv);

// }

// templateTester();

sessionStorage.setItem('2020111310AM', 'tester');
console.log(sessionStorage.getItem('202011139AM'));


//template literal to build out page using current day object and momen
var timeBlockRender = function() {
    for (i = 9; i < 18; i++) {
        if (i < parseInt(current24Hour)) {
            var colorClass = ("past")
        } else if (i === parseInt(current24Hour)) {
            var colorClass = ("present")
        } else {
            var colorClass = ("future")
        }
        var timeBlockEl = $("<div>");
        var formattedHour = moment(i, "H").format("hA");
        var timeFromLead = $('#currentDay').html();
        timeFromLead = moment(timeFromLead, 'dddd, MMMM Do, YYYY').format('YYYYMMDD')
        var timeStamp = timeFromLead.concat(formattedHour);
        if (sessionStorage.getItem(timeStamp) === null) {
            var inputValue = "";
        } else {
            var inputValue = sessionStorage.getItem(timeStamp);
        }
        timeBlockEl.html(`
        <div class="input-group mb-3 time-block">
            <div class="input-group-prepend textarea">
                <span class="input-group-text hour description">${formattedHour}</span>
            </div>
            <input type="text" class="form-control row ${colorClass}" id="input${timeStamp}" placeholder="" aria-label="Time slot data" aria-describedby="button-addon2" value="${inputValue}">
            <div class="input-group-append">
                <button class="btn btn-outline-secondary saveBtn" type="button" id="btn${timeStamp}">Save</button>
            </div>
        </div>
        `)
        $('.container').append(timeBlockEl);
        // console.log(`loop ${i} complete`)

        //  set colorclass variable to "past" class, etc
        // fill out values with info from current day object?
        // template
    }    
}
    
//fill out values with info from current day object?
// var renderSavedContents = function () {
//     Object.keys(todayDataObj).forEach(function(key)  {
//         console.log(key, todayDataObj[key]);
//         $(`#input${key}`).val() = todayDataObj[key];
//     })
// }

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
    // buildTodayObj();
    timeBlockRender();
    // renderSavedContents();

    $(".saveBtn").click(function(e) {
        e.preventDefault();
        var clickedBtnId = e.target.id
        var targetTimeStamp = clickedBtnId.substr(3);
        var inputString = "input"
        var inputFieldToBeSaved = inputString.concat(targetTimeStamp);
        // alert(clickedBtnId + " was clicked and the input value was " + inputFieldToBeSaved);
        var inputValue = $('#' + inputFieldToBeSaved).val();
        sessionStorage.setItem(targetTimeStamp, inputValue);
    })
})
