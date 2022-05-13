/* Nav Sidebar */

function w3_open() {
  document.getElementById("mySidebar").style.width = "100%";
  document.getElementById("mySidebar").style.display = "block";
  document.getElementById("mySidebar").className += " w3-animate-left";
  
}

function w3_close() {
  document.getElementById("mySidebar").style.display = "none";
}


function myAccFunc() {
  var x = document.getElementById("demoAcc");
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
    x.previousElementSibling.className += " w3-green";
  } else { 
    x.className = x.className.replace(" w3-show", "");
    x.previousElementSibling.className = 
    x.previousElementSibling.className.replace(" w3-green", "");
  }
}

function myAccFunc2() {
  var y = document.getElementById("demoAcc2");
  if (y.className.indexOf("w3-show") == -1) {
    y.className += " w3-show";
    y.previousElementSibling.className += " w3-green";
  } else { 
    y.className = y.className.replace(" w3-show", "");
    y.previousElementSibling.className = 
    y.previousElementSibling.className.replace(" w3-green", "");
  }
}
