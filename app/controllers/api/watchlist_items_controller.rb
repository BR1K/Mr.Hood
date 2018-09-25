
class Api::WatchListItemsController < ApplicationController

  def create

    @watchlist_item = WatchListItem.new(user_id: current_user.id, stock_id: params[:id])

    if @watchlist_item.save
      @stock = Stock.find(@watchlist_item.stock_id)
      render 'api/stocks/show'
    else
      render json: @watchlist_item.errors.full_messages, status: 422
    end
  end

  def destroy
    @watchlist_item = WatchListItem.find_by(stock_id: params[:id])
    @stock = Stock.find(@watchlist_item.stock_id)
    @watch_list_item.destroy
    render 'api/stocks/show'
  end

  # def watchlist_item_params
  #   params.require(:watchlist_item).permit(:user_id, :stock_id)
  # end

end
