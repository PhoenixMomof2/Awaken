class GroupsController < ApplicationController
  def index
    render json: Group.all
  end

  def show
  end

  def create
  end

  def update
  end

  def destroy
  end

  private
  def group_params
    params.require(:group).permit(:group_name, :comments, :user_id, :book_id)
  end
end
