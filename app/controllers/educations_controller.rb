class EducationsController < ApplicationController
  def index
    @educations = Education.all
  end

  def create
    @education = Education.create params[:education]
    redirect_to education
  end

  def new
    @education = Education.new
  end

  def edit
    @education = Education.find params[:id]
  end

  def show
    @education = Education.find params[:id]
  end

  def update
    education = Education.find params[:id]
    education.update_attributes(params[:education])
    redirect_to education
  end

  def destroy
    education = Education.find params[:id]
    education.destroy
    redirect_to educations_path
  end
end
