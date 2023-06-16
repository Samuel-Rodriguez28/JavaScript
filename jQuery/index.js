$("h1").addClass("title");

$("button").addClass("button_1");

var toggled = false;

$(".toggle").click(function() {
    if(toggled === false){
        $(".change").animate({width: "300px", height : "300px", color: "#534E52"});
        
        //$(".change").removeClass("button_1");
        //$(".change").addClass("button_2");
        toggled = true;
    }
    else{
        $(".change").animate({width: "150px", height : "150px", color: "#534E52"});
        
        //$(".change").removeClass("button_2");
        //$(".change").addClass("button_1");
        toggled = false;
    }
});

var color = false;

$(".color").click(function(){
    if(color === false){
        $(".change").removeClass("color_2");
        $(".change").addClass("color_1");
        color = true;
    }else{
        $(".change").removeClass("color_1");
        $(".change").addClass("color_2");
        color = false;
    }
});

var margin = false;

$(".margin").click(function(){
    if(margin === false){
        $(".change").animate({margin: "40px"});
        
        //$(".change").removeClass("margin_2");
        //$(".change").addClass("margin_1");
        margin = true;
    }else{
        $(".change").animate({margin: "0px"});

        //$(".change").removeClass("margin_1");
        //$(".change").addClass("margin_2");
        margin = false;
    }
});

var title = false;

$(".text").click(function(){
    if(title === false){
        $("h1").html("Hallo everynyan! How are you? Fine sank you");
        title = true;
    }else{
        $("h1").html("Omaigaaaa :0")
        title = false;
    }
});

var notTouch = ["Please don´t touch me", "Get away from me", "Ewwwww"];

var pos = 0;

$(".change").click(function(){
    pos = Math.floor(Math.random() * 3);

    $(".change").html(notTouch[pos]);
});

$("body").keydown(function(e){
    if(e.key === "h"){
        $("button").slideToggle();
    }
});