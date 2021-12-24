//Jumpotron Timer and Date - use moment ;
var currentTimeEl = $('#currentDay');

//Added this to make the seconds tick
setInterval(() => {
    currentTimeEl.text(moment().format('MMMM Do YYYY, h:mm:ss a'));
}, 1000);

//intake all the input and store them in local storage while keeping the input still on screen - use jQuery 
var timeBlock = $('.textarea');
var hours = timeBlock.children(); 
var currentHour = moment().format('HH');
var times = [9,10,11,12,13,14,15,16,17,18,19,20,21]

console.log(hours);
console.log(currentHour);

function colorChanges(hour){
    for (let i = 0; i < times.length; i++) {
        if(hour > times[i]){
          return hours.attr('class','past');
        }
        else if(hour = times[i]){
          return hours.attr('class','present');
        }
        else{
           return hours.attr('class','future');
        }
    }
    console.log("works");
}
colorChanges(currentHour);







// var saveBTNEl= $('.saveBtn');

// function intake(event){
//         event.preventDefault();
//         var notes = $('.textarea').val();
//         console.log(notes);
// }

// intake();




//changing the color of the timer - use moment and jQuery 
