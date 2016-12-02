var pairs = [
  ["Grandpa",""],
  ["Warren",""], 
  ["Carole",""], 
  ["Helen",""], 
  ["Brooke",""], 
  ["Jacob",""], 
  ["Brianna",""], 
  ["Preston",""]
  ];

var names = ["Grandpa", "Warren", "Carole", "Helen", "Brooke", "Jacob", "Brianna", "Preston"];

var randomArr = [];

var seed = 53;
var randomNum = "";
function random() {
    randomNum = Math.abs(Math.ceil(Math.sin(seed++) * 8));
    return randomNum;
}

while (randomArr.length < 8) {
	random();
  if (randomNum === 0) {continue;}
  if (randomArr.indexOf(randomNum) !== -1) {continue;}
  if (randomNum == randomArr.length + 1) {continue;}
  randomArr.push(randomNum);
}

//console.log(randomArr);


for (i=0; i<randomArr.length; i++) {
  for (j=0; j<names.length; j++) {
    if (randomArr[i] == j+1) {
      randomArr[i] = names[j];
    }
   }
}

for (i=0; i<randomArr.length; i++) {
  pairs[i][1] = randomArr[i];
}

//console.log(pairs);


function dropFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  document.getElementById("section1").classList.toggle("space");
}

window.onclick = function(event) {
  if (!event.target.matches('.dropdownBtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
    var spaceElements = document.getElementById("section1");
if (spaceElements.classList.contains('space')) {
        spaceElements.classList.remove('space');
}
  }
}



$(document).ready(function(){
  
  var youAre = " you are the Secret Santa for..."
  
 $("#GrandpaBtn").on("click touchstart", function() {
   $("#response").html("Grandpa," + youAre);
   $("#who").html(pairs[0][1]);
 });
  
  $("#WarrenBtn").on("click touchstart", function() {
     $("#response").html("Warren," + youAre);
   $("#who").html(pairs[1][1]);
 });
  
  $("#CaroleBtn").on("click touchstart", function() {
     $("#response").html("Carole," + youAre);
   $("#who").html(pairs[2][1]);
 });
  
  $("#HelenBtn").on("click touchstart", function() {
     $("#response").html("Helen," + youAre);
   $("#who").html(pairs[3][1]);
 });
  
  $("#BrookeBtn").on("click touchstart", function() {
     $("#response").html("Brooke," + youAre);
   $("#who").html(pairs[4][1]);
 });
  
  $("#JacobBtn").on("click touchstart", function() {
     $("#response").html("Jacob," + youAre);
   $("#who").html(pairs[5][1]);
 });
  
  $("#BriannaBtn").on("click touchstart", function() {
     $("#response").html("Brianna," + youAre);
   $("#who").html(pairs[6][1]);
 });
  
  $("#PrestonBtn").on("click touchstart", function() {
     $("#response").html("Preston," + youAre);
   $("#who").html(pairs[7][1]);
 });
  
});