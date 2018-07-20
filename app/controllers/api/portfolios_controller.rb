class Api::PortfoliosController < ApplicationController
  def create
    portfolio = Portfolio.new(portfolio_params)
    portfolio.save!
  end

  def show
    @portfolio = Portfolio.find(params[:id])
    render 'api/portfolios/show'
  end

  private

  def portfolio_params
    params.require(:portfolio).require(:user_id)
  end
end
