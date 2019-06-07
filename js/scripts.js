$(document).ready(function() {
  $("form#match").submit(function(event) {
    var quote = '';
    var name = parseInt($("input#name").val());
    var age = $("select#age").val();
    var gender = $("select#gender").val();
    var climate = $("select#climate").val();
    var location = $("select#location").val();
    var energy = $("select#energy").val();
    

    if (age >= 18) {
      if (gender === 'female' || 'male' || 'non-binary' && climate === 'tropical' && 'America') {
          quote = "Hawaii";
      }

      if (gender === 'female' || 'male' || 'non-binary' && climate === 'dry' && 'America') {
        quote = "Arizona";
    }
    
      console.log(quote);
      $("#vacation-match").empty().append(quote);
      $("#quote").show();
    } else {
      alert('Sorry, you are too young to choose your vacation. Please ask a parent or guardian to help.');
    }

    event.preventDefault();
  });
});

