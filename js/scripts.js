$(document).ready(function(){
  $("#inPut").submit(function(event){
    var secret = $("#secretMessage").val();
    var result = codingMachine(secret);
    $("#output").text(result);
    event.preventDefault();
  });
});
