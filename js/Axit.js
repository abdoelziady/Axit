$(document).ready(function(){
   $(".navbar .navbar-nav .nav-item .nav-link").click(function(){
    $(this).addClass("active").parent().siblings().find('a').removeClass("active");
   });
    
    
});