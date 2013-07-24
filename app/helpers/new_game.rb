def start_game(player1,player2)
  puts "we are in the helper method!"
  @player1 = Player.find_or_create_by_name(params[:player1])
  @player2 = Player.find_or_create_by_name(params[:player2])
  game = Game.new
  game.players << @player1
  game.players << @player2
  @player1.games << game
  @player2.games << game
  game.save
  erb :_game
end
