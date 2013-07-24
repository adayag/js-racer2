$(document).ready(function() {
    var recordGame = function(gameData) {
      $.post('/save', gameData);
    };
  $('#game-results').hide();
  $('#view-games').hide();
  $('#game-board').hide();
  $('#login-create-partial').on('submit', 'form', function(userJoin){
    userJoin.preventDefault();
    var url = $(this).attr('action');
    var data = $(this).serialize();
  $.post(url, data, function(response){
    $(response).appendTo('body');
  });
  $('#login-create-partial').hide();
  $('#game-board').show();
  });

    var tile = 0;
    $(document).on('keyup', function(event) {
      tile ++;
      if (tile === 1) {
        startTime = new Date();
      };

      if (event.which === 65) {
        var currentTile = $('#player1_strip .active');

        currentTile.removeClass('active');
        currentTile.next().addClass('active');
      console.log(tile);
      console.log(currentTile);
        if (currentTile.next().attr('id') === "Finish1") {
          alert('worked');
          $(document).unbind('keyup');
          var endTime = new Date();
          var finishTime = (endTime - startTime) /1000;
          $('#game-results h2').text(player1_id + " is victorious, with a final time of "+ finishTime + "seconds!");
          $('#game-results').show();
          var gameData = { 'time': finishTime, 'winner': player1_id };
          console.log('here');
          recordGame(gameData);
          console.log(gameData);
        }
      }

      if (event.which === 76) {
        var currentTile = $('#player2_strip .active');

        currentTile.removeClass('active');
        currentTile.next().addClass('active');

        if (currentTile.next().attr('id') === "Finish2") {
          $(document).unbind('keyup');
          var endTime = new Date();
          var finishTime = (endTime - startTime) /1000;
          $('#game-results h2').text(player2_id + " is victorious, with a final time of "+ finishTime + "seconds!");
          $('#game-results').show();
          var gameData = { 'time': finishTime, 'winner': player2_id };
          recordGame(gameData);
          console.log(finishTime)
          console.log(player2_id)
        }
      }
  });
});

