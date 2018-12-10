class ArticulesController < ApplicationController

  #GET /articules
  def index
    @articules = Articule.all
  end

  #GET /articules/:id
  def show
    @articules = Articule.find(params[:id])
  end

  #GET /articules/new
  def new
    @articules = Articule.new
  end

  #POST /articules/
  def create
    @articules = Articule.new(title:params[:articule][:title],
                              body:params[:articule][:body],
                              thumdnail:params[:articule][:thumdnail],
                              price:params[:articule][:price])
    @articules.save
    redirect_to @articules
  end

  def update

  end

end