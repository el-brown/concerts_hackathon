class ArtistVenue < ApplicationRecord
  belongs_to :user
  belongs_to :venue

  def self.artistAndVenue
  select(' av.id as id, a.name as artist_name, v.name as venues_name, a.id as artist_id, v.id as venues_id')
  .from('artist_venues as av')
  .joins('LEFT JOIN users as a ON av.id = a.id
  LEFT JOIN venues as v ON av.id = v.id')
  end

end
