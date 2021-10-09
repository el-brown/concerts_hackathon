class Api::TicketsController < ApplicationController
before_action :set_ticket, only: [:show, :destroy, :update]


  def index
    ticket = Ticket.all
    render json: ticket
  end

  def create
    @ticket = Ticket.new(ticket_params)

    if @ticket.save
      render json: @tickes
    else
      render json: {error: @ticket.errors}, status: 422
    end
  end

  def show
    render json: @ticket
  end

  def update 
    @pticket.update(ticket_params)
  end



  def destroy
    @ticket.destroy
    render json: @ticket
  end



  private

  def set_ticket
    @ticket = ticket.find(params[:id])
  end

  def ticket_params
    params.require(:ticket).permit(:price, :time, :concert, :venue_id)
  end
end