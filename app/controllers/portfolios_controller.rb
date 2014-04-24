class PortfoliosController < ApplicationController
  before_filter :check_if_admin
  #You need to add some security, currently anyone can add shit to your portfolio etc!
  def index
    @portfolios = Portfolio.all
  end

  def create
    portfolio = Portfolio.create params[:portfolio]
    redirect_to portfolio
  end

  def new
    @portfolio = Portfolio.new
  end

  def edit
    @portfolio = Portfolio.find params[:id]
  end

  def show
    @portfolio = Portfolio.find params[:id]
  end

  def update
    portfolio = Portfolio.find params[:id]
    portfolio.update_attributes(params[:portfolio])
    redirect_to portfolio
  end

  def destroy
    portfolio = Portfolio.find params[:id]
    portfolio.destroy
    redirect_to portfolios_path
  end

  private
  def check_if_admin
    redirect_to(root_path) if @current_user.nil? || @current_user.admin == false
  end
end
