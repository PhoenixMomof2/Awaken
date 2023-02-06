class GroupsController < ApplicationController
  before_authorize :authorize

  def index
    render json: Group.all
  end

  def show
    group = find_group
    render json: group
  end

  def create
  end

  def update
  end

  def destroy
  end

  private
  def group_params
    params.permit(:name, :comments, :user_id, :book_id)
  end

  def find_group
    Group.find_by_id(id:params[id])
  end
end
