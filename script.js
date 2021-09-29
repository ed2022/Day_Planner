//First things first, adding the current time counter using moments
var curDay = moment().format("dddd, MMMM Do");
$("#currentDay").text(curDay);
console.log(curDay);//debugging


var times = ['9AM','10AM','11AM','12AM','1PM','2PM','3PM','4PM','5PM'];
console.log(times)


var containerEl = $("#container");
var descriptionInputEl = $('#description-input');
var timeBlocksEl = $('#form-group');
var inputDisplay = $('#inputDisplay');

var printData = function (description) {
    
};




var formSubmit = function(event){
    event.preventDefault();
    var descriptionInput = descriptionInput.val();
    console.log('good');
    descriptionInput.val('');
    
    printInput(descriptionInput);
}
containerEl.on('click', formSubmit);
