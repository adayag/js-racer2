get '/' do# Look in app/views/index.erb
  erb :index
end

post '/' do 
  start_game(params[:player1],params[:player2])
  # @player1 = Player.find_or_create_by_name(params[:player1])
  # @player2 = Player.find_or_create_by_name(params[:player2])
  # game = Game.new
  # game.players << @player1
  # game.players << @player2
  # @player1.games << game
  # @player2.games << game
  # game.save
  # erb :_game #locals: { player1: player1, player2: player2, game: game}
end

post '/restart/:player_1/:player_2' do
  start_game(params[:player1],params[:player2])
end


post '/save' do 
  Game.last.update_attribute(:time, params['time'].to_f.round(3))
  Game.last.update_attribute(:winner, params['winner'])
end

