class UsersController < ApplicationController
  wrap_parameters format: []
  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity

  def index
    render json: User.all 
  end

  def show
    user = User.find_by(id: session[:user_id])
    render json: user
  end

  #SignUp
  def create
    user = User.create!(user_params)
    session[:user_id] = user.id
    render json: user, status: :created
  end

  private
  #Error handling
  def render_unprocessable_entity(invalid)
    render json: { error: invalid.record.errors }, status: :unprocessable_entity
  end

  def user_params
    params.permit(:user_name, :password, :password_confirmation, :age)
  end
end
