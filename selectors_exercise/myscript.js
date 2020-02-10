/*
 * My jQuery selectors
 *
 * Apply a style such as a yellow background to the following elements.
 * Test your selectors one at a time.
 */

// all elements
// $("*").css("background-color", "yellow");

// all p elements
// $("p").css("background-color", "yellow");
// the p element with an ID of "intro"
// $("#intro").css("background-color", "yellow");

// all elements with a class of "note"
// $(".note").css("background-color", "yellow");


// all DIV elements with a class of note
// $("article p").css("background-color", "yellow");

// all p elements in the article element
//$("p:last").css("background-color", "yellow");

// the last element in any section which is a p tag
//$("p:first").css("background-color", "yellow");

// the first paragraph on the page
$("p>a").css("background-color", "yellow");

// all p elements which have a link

// $("li:nth-child(2)").css("background-color", "yellow");

// the second li within nested ul element

// $("p:odd").css("background-color", "yellow");
// $('p:odd').css("background-color", "yellow");
// $("p:nth-child(2), p:nth-child(2n)").css("background-color", "yellow");


// every second and third p element
