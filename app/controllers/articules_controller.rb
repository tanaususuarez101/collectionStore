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
    @articules = current_user.articules.new(title:params[:articule][:title],
                              body:params[:articule][:body],
                              thumdnail:params[:articule][:thumdnail],
                              price:params[:articule][:price])

    if @articules.save
      redirect_to @articules
    else
      render :new
    end

  end

  def edit
    @articules = Articule.find(params[:id])
  end

  def update
    @articules = Articule.find(params[:id])

    if @articules.update(title:params[:articule][:title],
                         body:params[:articule][:body],
                         thumdnail:params[:articule][:thumdnail],
                         price:params[:articule][:price])
      redirect_to @articules
    else
      render :edit
    end
  end

end