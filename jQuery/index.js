$("h1").addClass("title");

$("button").addClass("button_1");

var toggled = false;

$(".toggle").click(function() {
    if(toggled === false){
        $("button").removeClass("button_1");
        $("button").addClass("button_2");
        toggled = true;
    }
    else{
        $("button").removeClass("button_2");
        $("button").addClass("button_1");
        toggled = false;
    }
});