//Jumpotron Timer and Date - use moment ;
var currentTimeEL = $('#currentDay');
//Added this to make the seconds tick
setInterval(() => {
    currentTimeEL.text(moment().format('MMMM Do YYYY, h:mm:ss a'));
}, 1000);


//changing the color of the timer - use moment and jQuery 
var timeBlockEL = $('.time-block'); //Calling on the block
var currentHour = moment().hour(); //Calling on the current time in hour
var textareaEL = $(this).children().eq(1); // Calling on the text area
console.log(currentHour); //variable Check 
//creating the time loop with this each function to help go through "EACH" of the time blocks and checking and chaning colors accordingly 
function colorChanges(hour){ 
    timeBlockEL.each(function(){
      var blocks = parseInt($('.container').children().attr('id')); //this is going to target and place in an array the objects in the container which is 9am-6pm = 10 total values
      console.log(blocks); //variable check
      if(blocks == hour){
        console.log(blocks == hours)
        $(this).removeClass("past")
        $(this).removeClass("future")
        $(this).addClass("present");
      }
      else if(blocks < hour){
        console.log(blocks)
        $(this).removeClass("present")
        $(this).removeClass("future")
        $(this).addClass("past");
      }
      else{
        console.log(blocks)
        $(this).removeClass("present")
        $(this).removeClass("past")
        $(this).addClass("future");
      }
    });
  console.log("works");
}
colorChanges(currentHour);

//intake all the input and store them in local storage while keeping the input still on screen - use jQuery 
//Here is where we can intake the notes and store it as localStorage(); 
var descriptionEL = $('.description');
var saveBTNEl= $('.saveBtn');

saveBTNEl.on('click', function() {
  var ID = $('.container').children().attr('id');
  var notes = descriptionEL.val();
  localStorage.setItem(ID, notes);
})


