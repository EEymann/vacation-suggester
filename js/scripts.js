$(document).ready(function () {
  $("form#match").submit(function (event) {
    
    var userName = $("input#userName").val();
    $(".userName").text(userName);
  });

  $("form#match").submit(function (event) {
    event.preventDefault();
    var userName = $("input#userName").val();
    var age = $("select#age").val();
    var gender = $("select#gender").val();
    var environment = $("select#environment").val();
    var location = $("select#location").val();
    var energy = $("select#energy").val();
    
    console.log(userName);
    $(".name").text(userName);




      if ((age >= '18-25') && (gender === 'female' || 'male' || 'non-binary') && environment === 'tropical' && location === 'america') {
        $("#hawaii").fadeIn();
        $("#arizona").hide();
        $("#ibiza").hide();
        $("#switzerland").hide();
      } else if ((age >= '18-25') && (gender === 'female' || 'male' || 'non-binary') && (environment === 'tropical') && location === 'anywhere') {
        $("#hawaii").hide();
        $("#arizona").hide();
        $("#ibiza").fadeIn();
        $("#switzerland").hide();
      } else if ((age >= '18-25') && (gender === 'female' || 'male' || 'non-binary') && (environment === 'dry') && location === 'america') {
        $("#hawaii").hide();
        $("#arizona").fadeIn();
        $("#ibiza").hide();
        $("#switzerland").hide();
      } else if ((age >= '18-25') && (gender === 'female' || 'male' || 'non-binary') && (environment === 'dry') && location === 'anywhere') {
        $("#hawaii").hide();
        $("#arizona").hide();
        $("#ibiza").hide();
        $("#switzerland").fadeIn();
      }
  

  });
});
