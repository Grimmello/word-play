$(function() {
  $("form#wordPlay").submit(function(event){
    var userInput = $("input#sentence").val();
    var split = userInput.split(" ");
    var split2 = [];
    split.forEach(function(word){
      if (word.length >= 3){
        split2.push(word);
      };
    });
    split2.reverse();
    var joined = split2.join(" ");
    $("p#complete").append("Your word play sentence is: " + joined);
    $("#display").show();
    event.preventDefault();
  });
});
