$("form").submit()(function(e) {

	e.preventDefault();
	
	
	

});

function appendText() {
  var txt1 = "<div>Text.</div>";        // Create text with HTML
  var txt2 = $("<div></div>").text("Text.");  // Create text with jQuery
  var txt3 = document.createElement("div");
  var txt4 = "<div>Text.</div>";        // Create text with HTML
  var txt5 = $("<div></div>").text("Text.");  // Create text with jQuery
  txt3.innerHTML = "Text.";         // Create text with DOM
  $("article").after(txt1, txt2, txt3, txt4, txt5);   // Append new elements
}