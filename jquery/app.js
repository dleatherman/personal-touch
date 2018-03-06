// jQuery version
$('#touch').hammer().bind("panleft panright tap press", function(ev) {
  $('#touch').text(ev.type +" gesture detected.");
});
