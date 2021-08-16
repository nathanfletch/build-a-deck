$(document).ready(function () {
  const cardNames = ['2', '3', '4', '5', '6', '7', '8', '9', 'Jack', 'Queen', 'King', 'Ace'];
  const suits = ['Clubs', 'Diamonds', 'Hearts', 'Spades'];

  suits.forEach(function(suit) {


    $('#list').append("<h3>" + suit + "</h3>");
    

    cardNames.forEach(function(cardName) {

      $('#list').append($('<li>').text(cardName + " of " + suit));
  
    });
    $('#list').append('<br>');
  })
  


});