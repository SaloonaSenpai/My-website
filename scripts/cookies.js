// setting the cookies 
function setCookie(cname,cvalue,exdays){
    var d = new Date(); // i guess here it takes the current date 
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));    //uses the current date to make a time for ending session 
    var expires = 'expires = ' + d.toUTCString();   // changed the expired number to UTC  (covert it to an actual date)
    document.cookie = cname + '=' + cvalue + ';' + expires + ";path=/"; 
    // same as : username      =   Ruby Doe;       expires=Sat, 20 Nov 2020 00:00:00 UTC
    
}


// above we used a variable called Cname now we make a value that gets it 

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');  // split the letters / characters like a;s;d;f;g;g;h;h;j;
    for(var i = 0; i <ca.length; i++) { // this makes it loop using the character numbers like if its Sam it loops 3 times
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


// if there is a value for the username welcome back if not input it 
function checkCookie() {
    var user = getCookie("vistor_name");
    localStorage.setItem("vistor_name", user)
    if (user != "") {
      var name = localStorage.getItem("vistor_name")
      $(".displayme").html('<p class="displayme my-2 my-lg-0">Welcome '+ '<span id="vistorname">'+ name + '</span>' + '   </p>')
      
    } else {
      user = prompt("Please enter your name:", "");
      if (user != "" && user != null) {
        setCookie("vistor_name", user, 365);
      }
    }
  }

// displaying information 


function displaying_information(){
  var user = getCookie("vistor_name");
  localStorage.setItem("vistor_name", user)
  var vistor_name = localStorage.getItem("vistor_name")
  $(".displayme3").html('<p class="displayme my-2 my-lg-0">Name: '+ vistor_name +'   </p>')
  
}
  
  



