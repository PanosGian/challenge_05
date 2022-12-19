

$(function () {
var curDate = $('#currentDay');
var today = dayjs();
$('#currentDay').text(today.format('dddd, MMMM D'));

//Get all callendar times in an array
var startDateTime = dayjs().set('hour', 9).set('minute', 00).set('second', 00);
var timeBlockEl = $('.hour');
var textBlockEl = $('textarea');
var timeSlot = [];

var itemKey = [];
for (i = 0; i < timeBlockEl.length; i++) {
  itemKey.push("item_" + i);
}

debugger;

//Read the values from the local storage and populate textarea elements
for(let i=0;i<itemKey.length;i++){
  var textContent=localStorage.getItem(itemKey[i]);
  debugger;
  textBlockEl[i].value=textContent;
}

//Set times in each input line
var i = 0;
for (let ts of timeBlockEl) {
  let blockDateTime = startDateTime.add(i, 'hour');
  ts.innerText = blockDateTime.format('h:mm A');
  timeSlot.push(blockDateTime);
  i += 1;

}


//set time trigger to cahnge the bacground color of each timeBlock

setInterval(myTimer, 1000);
function myTimer() {
  var now = dayjs();
  for (let t = 0; t < textBlockEl.length - 1; t++) {
    let timeDiff = Math.round(now.diff(timeSlot[t], 'second'), 0);

    
    //Remove previous class elements
    textBlockEl[t].classList.remove('past', 'present', 'future');
    //Update class elements
    if (timeDiff > 3600) {
      textBlockEl[t].classList.add('past');
    }
    else if (timeDiff < 0) {
      textBlockEl[t].classList.add('future');
    }
    else {
      textBlockEl[t].classList.add('present');
    }
  }
}




function on_click(clicked_id)
{
    var itemId="item_"+clicked_id;
    itemValue=textBlockEl[clicked_id].value;
    //update local storage of clicked row
    localStorage.setItem(itemId,itemValue);
}


});
