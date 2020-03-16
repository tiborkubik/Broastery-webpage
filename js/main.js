function onLoadFunction(){
  document.getElementById("showMe1").style.display = "none";
  document.getElementById("showMe2").style.display = "none";
  document.getElementById("showMe3").style.display = "none";

  var cookVal = getCookie("cook");
  if(cookVal == 1){
    myFunction1();
  }
  if(cookVal == 2){
    myFunction2();
  }
  if(cookVal == 3){
    myFunction3();
  }
}

function myFunction1() {
  var x = document.getElementById("showMe1");

      if (x.style.display === "none") {
        x.style.display = "block";
        document.getElementById("showMe2").style.display = "none";
        document.getElementById("showMe3").style.display = "none";
      } else {
        x.style.display = "none";
      }
      setCookie("cook", 1, 1);
}

function myFunction2() {
  var x = document.getElementById("showMe2");

      if (x.style.display === "none") {
        x.style.display = "block";
        document.getElementById("showMe1").style.display = "none";
        document.getElementById("showMe3").style.display = "none";
      } else {
        x.style.display = "none";
      }
      setCookie("cook", 2, 1);
}

function myFunction3() {
  var x = document.getElementById("showMe3");

      if (x.style.display === "none") {
        x.style.display = "block";
        document.getElementById("showMe2").style.display = "none";
        document.getElementById("showMe1").style.display = "none";
      } else {
        x.style.display = "none";
      }
      setCookie("cook", 3, 1);
}
//https://www.w3schools.com/js/js_cookies.asp
function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  var expires = "expires="+d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  var name = cname + "=";
  var ca = document.cookie.split(';');
  for(var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}
