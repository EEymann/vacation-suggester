$(document).ready(function () {
  $("form#match").submit(function (event) {
    event.preventDefault();
    var quote = '';
    var name = parseInt($("input#name").val());
    var age = $("select#age").val();
    var gender = $("select#gender").val();
    var climate = $("select#climate").val();
    var location = $("select#location").val();
    var energy = $("select#energy").val();

    if (age >= '18-25') {
      if (gender === 'female' || 'male' || 'non-binary') {
        if (climate === 'tropical' && location === 'America') {
          console.log('this happens, 1');
          quote = "Hawaii";
        }
        if (climate === 'dry' && location === 'America') {
          console.log('that happens, 2');
          quote = "Arizona";
        }
      }
      $("#vacation-match").empty().append(quote);
      $("#quote").show();
    } else {
      alert('Sorry, you are too young to choose your vacation. Please ask a parent or guardian to help.');
    }
  });
});
