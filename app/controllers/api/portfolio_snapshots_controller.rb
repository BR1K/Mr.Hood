class Api::PortfolioSnapshotsController < ApplicationController

  def index
    # @snapshots = PortfolioSnapshot.all
    @portfolio_snapshots = PortfolioSnapshot.where(portfolio_id: current_user.portfolio.id )
    render 'api/portfolio_snapshots/index'
  end

  def create
    @portfolio_snapshot = PortfolioSnapshot.new(snapshot_params)
    @portfolio_snapshot.save
  end

  private
  def snapshot_params
    params.require(:snapshot).permit(:portfolio_id, :date, :value)
  end

end
