class PortfoliosController < ApplicationController
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
end
