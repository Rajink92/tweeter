$(document).ready(function() {
  $(".message-box").keyup(function() {
    const maxChar = 140;
    let character =  $(this).val().length;
    character = maxChar - character;
    $(".counter").text(character);

  if ($(this).val().character >= maxChar) {
    $(".counter").addClass("red"); {
    }
  }
  });
});