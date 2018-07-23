
var list = document.querySelector("li");
var arr = [];

function enterEmail() {
//  var theirEmail = prompt("Please enter your email to join our mailing list!");
  arr.push(prompt("Please enter your email to join our mailing list!"));
//  document.getElementById("mailList").innerHTML = arr;
  mailList.innerHTML = "<li>" + arr.join("</li><li>");
  //list.innerHTML = theirEmail;
}

// function UpdateListOnScreen(NewListItem){
//
//   var grabList = document.getElementById('requestList');
//
//   var text = ""+ GetCalendarName(NewListItem.calChoice) +" For "+ GetLessonSlot(NewListItem.lessonChoice) + " On " + GetDateInTextForm(NewListItem.date) + "";   var entry = document.createElement('li');   entry.id = list.length-1;   entry.className = "ItemNotChecked";   entry.appendChild(document.createTextNode(text));
//
//   /*Add a button to each LI */
// var button = document.createElement('button');
// button.innerText = 'Click me!';
// entry.appendChild(button);
//
//   grabList.appendChild(entry); }
