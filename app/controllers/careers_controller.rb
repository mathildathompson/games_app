class CareersController < ApplicationController
  def index
    @careers = Career.all
  end

  def create
    @career = Career.create params[:career]
    redirect_to career
  end

  def new
    @career = Career.new
  end

  def edit
    @career = Career.find params[:id]
  end

  def show
    @career = Career.find params[:id]
  end

  def update
    career = Career.find params[:id]
    career.update_attributes(params[:career])
    redirect_to career
  end

  def destroy
    career = Career.find params[:id]
    career.destroy
    redirect_to careers_path
  end
end
