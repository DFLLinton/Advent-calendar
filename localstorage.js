function loadProgress(x){
    let status = localStorage.getItem('item'+x);
    if (status == 'open'){    document.getElementById("item"+x).style.backgroundImage=findCorrectImage(x);  
    document.getElementById("item"+x).style.color="red";
    }else{}
  }
  
  for (let i = 1; i < 25; i++) {
    loadProgress(i);
  }
  
  
  function clearLocalStorage(){
    localStorage.clear();
  }
  
  