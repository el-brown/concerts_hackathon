class Api::UsersController < ApplicationController
  before_action :authenticate_user!, only:[:update,:destroy]
  before_action :set_user, only: [:update,:destroy]

  def index
    render json: User.safe_all_data
  end

  def show
    render json: @user
  end

  def update
    if@user.update(user_params)
      render json: @user
    else
      render json: {errors: @user.errors}
    end
  end

  def destroy
    @user.destroy
    render json: User.all
  end

  private 
  def set_User
    @user = User.find(prams[:user_id])
  end
  def user_params
    params.require(:user).permit(:name,:genre)
  end
end
