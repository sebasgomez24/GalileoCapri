$(document).ready(function() {
    
    $('body').toggleClass('loaded');
    
    setTimeout(function(){ 
        $('body').addClass('loaded');
    }, 1000);
    
    setTimeout(function(){
        $(".fade").fadeIn("slow");
    }, 2000);  
});