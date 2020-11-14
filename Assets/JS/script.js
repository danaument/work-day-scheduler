var today = moment().format('dddd, MMMM Do, YYYY')
console.log(today);
var currentHour = moment().format('h a');
console.log(currentHour);
var current24Hour = moment().format('H');
console.log(current24Hour);
var todayKey = moment().format('YYYYMMDD');
console.log(todayKey);

$('#currentDay').html(today);

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
        <div class="input-group time-block row">
            <div class="input-group-prepend ">
                <span class="hour description prepend-span-width">${formattedHour}</span>
            </div>
            <textarea type="text" class="form-control ${colorClass} row" id="input${timeStamp}" placeholder="" aria-label="Time slot data" aria-describedby="button-addon2" value="${inputValue}">${inputValue}</textarea>
            <div class="input-group-append">
                <button class="btn btn-outline-secondary saveBtn" type="button" id="btn${timeStamp}">Save</button>
            </div>
        </div>
        `)
        $('.container').append(timeBlockEl);
    }    
}

//the good stuff
$(document).ready(() => {
    
    timeBlockRender();

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
