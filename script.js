//Jumpotron Timer and Date - use moment ;
var currentTimeEL = $('#currentDay');
//Added this to make the seconds tick
setInterval(() => {
    currentTimeEL.text(moment().format('MMMM Do YYYY, h:mm:ss a'));
}, 1000);


//creating the time loop with this each function to help go through each of the time blocks and checking and chaning colors accordingly. Tried using the ".each" method but started to highlight everything. This works best for me in my case. 
//changing the color of the timer - use moment and jQuery 
var timeBlockEL = $('.time-block'); //Calling on the block
var currentHour = moment().hour(); //Calling on the current time in hour
var textareaEL = $(this).children().eq(1); // Calling on the text area
//console.log(currentHour); //variable Check 
function colorChange(hour){ 
   for (let i = 0; i < timeBlockEL.length; i++) {
      var blocks = parseInt($('.container').children().eq(i).attr('id'));
      // console.log("Blocks: " + blocks); // console.log("Hour Now: " + hour); 
      if(blocks == hour){
        $("textarea").eq(i).removeClass("past");
        $("textarea").eq(i).removeClass("future");
        $("textarea").eq(i).addClass("present");
      } //this ensures that only the textarea colors change! 
      else if(blocks < hour){
        $("textarea").eq(i).removeClass("present");
        $("textarea").eq(i).removeClass("future");
        $("textarea").eq(i).addClass("past");
      }
      else{
        $("textarea").eq(i).removeClass("present");
        $("textarea").eq(i).removeClass("past");
        $("textarea").eq(i).addClass("future");
      }
   }
console.log("works");
}
colorChange(currentHour);//calling the funcation 

//Here is where we can intake the notes and store it as localStorage(); 
var saveBTNEl= $('.saveBtn');

function saved (){
  saveBTNEl.on("click",function(event){
    event.preventDefault();
    for (let i = 0; i < timeBlockEL.length; i++){
      var descrip = $(this).siblings().eq(1); //textarea/descrption space
      console.log(descrip);
      var ID = $(this).parent().attr('id'); //actual id where the text space is located
      console.log(ID)
      var mainText = descrip.val();
      localStorage.setItem(ID, mainText);
    }
  })
  console.log(savedArray);
}
saved();

//Here is the funcation that can get the data from local storage and display it on to the screen
function show(){
  var display = JSON.parse(localStorage.getItem(ID, mainText));
  for (let i = 0; i < timeBlockEL.length; i++) {
    
  }
}
show();

