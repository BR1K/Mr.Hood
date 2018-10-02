class Api::WatchlistItemsController < ApplicationController

  def create
    @watchlist_item = WatchlistItem.new(user_id: current_user.id, stock_id: params[:id])
    # @watchlist_item = WatchlistItem.new(watchlist_item_params)

    if @watchlist_item.save
      @stock = Stock.find(@watchlist_item.stock_id)
      render 'api/stocks/show'
    else
      render json: @watchlist_item.errors.full_messages, status: 422
    end
  end

  def index
    @watchlist_items = WatchlistItem.where(user_id: current_user.id)
    @stocks = @watchlist_items.map { |watch| watch.stock }

    render 'api/stocks/index'
  end


  def destroy
    @watchlist_item = WatchlistItem.find_by(user_id: current_user.id, stock_id: params[:id])
    @stock = Stock.find(@watchlist_item.stock_id)
    @watchlist_item.destroy
    render 'api/stocks/show'
  end

  def watchlist_item_params
    params.require(:watchlist_item).permit(:user_id, :stock_id)
  end



end
