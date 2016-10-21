/*$("inputArea").keydown(function(e){
  translation[e.keycode]
$("textArea").append(translation[e.keycode])
});*/

$("input[type='radio']").click(function(){
  $("input:checked").prop('checked', false);
  $(this).prop('checked', true);
});

var translation = {
64:"z",
65:"a",
66:"b",
67:"c",
68:"d",
69:"e",
70:"f",
71:"g",
72:"h",
73:"i",
74:"j",
75:"k",
76:"l",
77:"m",
78:"n",
79:"o",
80:"p",
81:"q",
82:"r",
83:"s",
84:"t",
85:"u",
86:"v",
87:"w",
88:"x",
89:"y",
90:"z",
91:"a"
};

$("#inputArea").keydown(function(e) {

  if ($("input:checked").val() == "echo") {
    $("#textArea").append(translation[e.keyCode]);
  }

  if($("input:checked").val() == "caesar cipher") {
    $("#textArea").append(translation[e.keyCode - 1]);
  }
});

$("#translationInputText").keydown(function(e) {
  if (e.keyCode == 13) {
    var message = $("#translationInputText").val();
    var messageArray = message.split("");

    for(var i = 0; i < messageArray.length; i++){
      var translateNumber = messageArray[i].charCodeAt(0) - 32 + 1;
      $("#translationArea").append(translation[translateNumber]);
    }
  }
});
