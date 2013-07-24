class Player < ActiveRecord::Base
  
  has_many :games, :through => :rounds# Remember to create a migration!
  has_many :rounds
  validates :name, :uniqueness => true

end
