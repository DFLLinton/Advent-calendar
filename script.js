function openDoor(x){
    console.log(dd);
    console.log(mm);
    if (mm >= 11 && dd >= x){
   document.getElementById("door"+x).style.opacity="0"
    }else{};
  }
  
  
  
  //get date
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = today.getFullYear();
  
  today = mm + '/' + dd + '/' + yyyy;
  document.write(today);