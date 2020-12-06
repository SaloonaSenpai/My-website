function darktheme() {
    $("nav").removeClass(" navbar-light bg-light");
    $("nav").addClass(" navbar-dark bg-dark");
    $(".contact-us-bottom-one").removeClass("btn-primary");
    $(".contact-us-bottom-one").addClass("btn-info");
     $(".contact-us-bottom-two").removeClass("btn-danger");
    $(".contact-us-bottom-two").addClass("btn-warning");


    $("body").css("background-color","black");
    $("p").css("color","white");
    $("h3").css("color","white");
    $("h5").css("color","white");
    $("a").css("color","white");
    $("li").css("color","white");
    $("h4").css("color","white");
    $(".social").css("color","white");
    $(".social-tag").css("color","black");
    $(".card_annoying").css("color","black");
    
// table is here for the team page 
    $("table").css("color","white")

    $("")
    // for local storage to store the theme variable 
    localStorage.setItem('theme','dark')
}


function lighttheme(){
    $("nav").addClass(" navbar-light bg-light");
    $("nav").removeClass(" navbar-dark bg-dark");
    $(".contact-us-bottom-one").removeClass("btn-info");
    $(".contact-us-bottom-one").addClass("btn-primary");
     $(".contact-us-bottom-two").removeClass("btn-warning");
    $(".contact-us-bottom-two").addClass("btn-danger");
    $("body").css("background-color","white");
    $("p").css("color","black");
    $("h3").css("color","black");
    $("h5").css("color","black");
    $("h4").css("color","black");
    $("a").css("color","black");
    $("li").css("color","black");
    $(".article p").css("color","black");
    $(".social").css("color","black");
    $("#social-tag").css("color","black");
    $(".header_annoying").css("color","white");
    $(".card_annoying").css("color","black");
    $("table").css("color","black");
        // for local storage to store the theme variable 
    localStorage.setItem("theme","light");


}


// using the local storage we check for the theme 
function check_theme(){
    var theme2 = localStorage.getItem("theme")  
    if (theme2 == 'light'){
        lighttheme()
    }
    else{
        darktheme()
    }
  }

function small_size(){
    $("p").css("font-size","12px");
    $(".header_annoying").css("font-size","12px");
    $("h1").css("font-size","45px");
    $("a").css("font-size","12px");
    $("button").css("font-size","12px");
    $(".article-image").css("width","100%");
    $("video").css("width","100%");
    $("iframe").css("width","100%");
    $("h3").css("font-size","25px");
    $("h5").css("font-size","10px");
    $(".bread").css("font-size","12px");
    localStorage.setItem("size","small");
    
}

function big_size(){
    $("p").css("font-size","25px");
    $(".header_annoying").css("font-size","18px");
    $("h1").css("font-size","70px");
    $("a").css("font-size","25px");
    $("button").css("font-size","25px");
    $(".article-image").css("width","100%");
    $("video").css("width","100%");
    $("iframe").css("width","100%");
    $("h3").css("font-size","70px");
    $("h5").css("font-size","50px");
    $(".bread").css("font-size","25px");
    localStorage.setItem("size","big");
}


function normal_size(){
    $("p").css("font-size","18px");
    $(".header_annoying").css("font-size","18px");
    $("h1").css("font-size","70px");
    $("a").css("font-size","18px");
    $("button").css("font-size","18px");
    $(".article-image").css("width","100%");
    $("video").css("width","100%");
    $("iframe").css("width","100%");
    $("h3").css("font-size","50px");
    $("h5").css("font-size","12px");
    $(".bread").css("font-size","18px");
    localStorage.setItem("size","normal");
}

function check_size(){
    var size = localStorage.getItem("size")  
    if (size == 'small'){
        small_size()
    }

    else if (size == 'big'){
        big_size()
    }
    
    else{
        normal_size()
    }
  }
