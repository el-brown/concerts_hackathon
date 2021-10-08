class Venue < ApplicationRecord
  has_many :tickets, dependent: :destroy
  has_many :artist_venues
  has_many :users, through: :artist_venues
end
