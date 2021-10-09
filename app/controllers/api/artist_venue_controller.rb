class Api::ArtistVenueController < ApplicationController

  def artistAndVenue
    render json: ArtistVenue.artistAndVenue
  end

end
