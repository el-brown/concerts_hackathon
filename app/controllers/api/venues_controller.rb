class Api::VenuesController < ApplicationController
  before_action :set_venue, only: [:show, :destroy, :update]

  def index
    venue = Venue.all
    render json: venue
  end

  def show
    render json: @venue
  end


  def create
    @venue = Venue.new(venue_params)

    if @venue.save
      render json: @venue
    else
      render json: {error: @venue.errors}, status: 422
    end
  end

  def update 
    @venue.update(venue_params)
  end

  def destroy
    @venue.destroy
    render json: @venue
  end


  private

  def set_venue
    @venue = Venue.find(params[:id])
  end

  def venue_params
    params.require(:venue).permit(:name, :street, :city, :state, :ticket_capacity)
  end

end
