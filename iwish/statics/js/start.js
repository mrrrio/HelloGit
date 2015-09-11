// Render HTML STYLE
var screensize=$( window ).width();
$("#rio .rightpanel").css('width',screensize-640);

$( window ).resize(function() {
  var screensize=$( window ).width();
  $("#rio .rightpanel").css('width',screensize-640);
});