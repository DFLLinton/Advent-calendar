function openDoor(x){
  if (mm >= 11 && dd >= x){
document.getElementById("item"+x).style.backgroundImage=findCorrectImage(x);  
document.getElementById("item"+x).style.color="red";
    localStorage.setItem('item'+x, 'open');
}else{};
}



//get date
var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

today = mm + '/' + dd + '/' + yyyy;
document.write(today);

