// function which reveals behind door
function openDoor(x){
  if (mm >= 11 && dd >= x){
document.getElementById("item"+x).style.backgroundImage=findCorrectImage(x);  
document.getElementById("item"+x).style.color="rgba(0, 0, 0, 0.0)";
    localStorage.setItem('item'+x, 'open');
}else{};
}


//retrieves date
var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0');
var yyyy = today.getFullYear();
today = mm + '/' + dd + '/' + yyyy;

//Recalls previous opened doors
function loadProgress(x){
let status = localStorage.getItem('item'+x);
if (status == 'open'){    document.getElementById("item"+x).style.backgroundImage=findCorrectImage(x);  
document.getElementById("item"+x).style.color="rgba(0, 0, 0, 0.0)";
}else{}
}
// loops this function for all doors
for (let i = 1; i < 25; i++) {
loadProgress(i);
}

//clear local storage button
function clearLocalStorage(){
localStorage.clear();
}

