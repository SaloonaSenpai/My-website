
// this function is to add into the document some repitive sections to make the codes less crowded, and confusing i found it helpful

$( document ).ready(function() {
    $("header").html('<h1>Welcome to Atom Esport</h1><p class = "header_annoying">Kings of the middle east esports</p>')
    
    $(".Spons").html('<h1 class="spons-title" >premium sponsors</h1><div class="logos" ><img src="images/spon/1200px-Mountain_Dew_logo.svg.png" alt="Mountain_dew"><img src="images/spon/amazon.png" alt="Amazon"><img src="images/spon/monster-energy-logo.gif" alt="Monster"><img src="images/spon/red.png" alt="Red_Bull"></div>')

    $(".footer").html('<div class="social"><a href="https://www.twitch.tv/saloonasenpai" target="_blank"><img src="images/github.png" alt="Github"></a><a href="https://github.com/SaloonaSenpai" target="_blank"><img src="images/twitch.png" alt="Twitch"></a></div><div class="terms" > <ul> <li> <a href="index.htm">Home-</a></li> <li> <a href="about.htm">About-</a></li> <li> <a href="terms.htm">Terms-</a></li> <li> <a href="help.htm">Contact</a></li> </ul> <p>&copy;2020 College Assignment; ALL RIGHT RESERVED </p></div>')

});

// for the search bar 


function search() {
    var search_text=$("#search_box").val().toLowerCase();
    var search_result=[];
    for(var index in articles){
        var article =articles[index];
        var title = article.title.toLowerCase();
        if(title.search(search_text)!=-1)
            search_result.push(article);
            console.log(search_result);
    }
    var html = create_html("article_page",search_result);
    $("#articles").html(html);

}

// for the validate form 
function validate(){
    $("form").addClass("was-validated");
    var username = $("#uname").val()
    var useremail = $("#uemail").val()
    var usermessage = $("#umessage").val()
    var userage = $("#uage").val()
    var username_feedback = "";
    var userage_feedback = "";


    if (username.length<10){
        username_feedback = "Name must be at least 10 characters long.";
        $("#uname")[0].setCustomValidity(username_feedback);
        $("#uname-feedback").text(username_feedback);
    } else{
        $("#uname")[0].setCustomValidity("");
        localStorage.setItem("username", username)
        localStorage.setItem("useremail", useremail)
        localStorage.setItem("usermessage", usermessage)

    }

    if (userage < 18 ){
        userage_feedback = "You Must be 18 to send a message, please inform your parents";
        $("#uage")[0].setCustomValidity(userage_feedback);
        $("#uage-feedback").text(userage_feedback);
    } else{
        $("#uage")[0].setCustomValidity("");
        localStorage.setItem("userage", userage)

    }
   
}



function local_storage_information(){
    var name = localStorage.getItem("username")
    var theme = localStorage.getItem("theme")
    var email = localStorage.getItem("useremail")
    var age = localStorage.getItem("userage")
    var message = localStorage.getItem("usermessage")

    $(".displayusername").html('<p class="displayusername my-2 my-lg-0">username:  '+ name + '</p>')
    $(".displayage").html('<p class="displayage my-2 my-lg-0">Age:  '+ age + '</p>')
    $(".displaytheme").html('<p class="displaytheme my-2 my-lg-0">Theme:  '+ theme + '</p>')
    $(".displayemail").html('<p class="displayemailk my-2 my-lg-0">Email:  '+ email + '</p>')
    $(".displaymessage").html('<p class="displaymessage my-2 my-lg-0">Message:<br>' + message + '</span>' + '</p>')


}

