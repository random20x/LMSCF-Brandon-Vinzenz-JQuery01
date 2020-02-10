$("img").attr("src","https://www.codefactory.wien/wp-content/uploads/2018/03/codefactory-vienna-footer-h.jpg");

$("textarea").attr("placeholder","Express your opinion");

$("blockquote").css(
   {
       "background-color":"orange",
       "font-style":  "italic"
   }
);

$("#logo").css("color","black");

$("h1 > span").css("color","white");

$(".date").remove();

$(".sidemenu").append("<li><a href=\"#NewTemplates\"><span>New Templates</span></a></li>");

$(".sidemenu").append("<li><a href=\"#Order Template\"><span>Order Template</span></a></li>");

$(".sidemenu").append("<li><a href=\"#Contact Us\"><span>Contact Us</span></a></li>");

$("#sidebar p:first").text("When someone says: 'I want a programming language in which I need only to say what I wish, and done', give him a lollipop.");


// $(function(){
//     $('a').attr('href', (n, old) => 'https://codefactory.wien' + old);
// });

// $(function(){
// $(code).css('color', 'blue');
// });

// $(function(){
// $("ol li").css("background-color", "yellow");
// });

// $("img").attr("src","https://www.codefactory.wien/wp-content/uploads/2018/03/codefactory-vienna-footer-h.jpg");

// // $(document).ready(function(){ 
// //   $('form').find("input[type=textarea], input[type=password], textarea").each(function(ev)
// //   {
// //       if(!$(this).val()) { 
// //      $(this).attr("placeholder", "Express your opinion");
// //   }


// //   });
// // });

