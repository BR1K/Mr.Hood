class Api::TradesController < AppliationController

  def index
    @trades = Trade.all
    render 'api/trades/index'
  end


  def create
    @trade = Trade.new(trade_params)

    if @trade.verify_order == false
      render json: @trade.errors[:size], status 422
      return
    end

    if @trade.save
      change = @trade.size * @trade.price
      change *= -1 if @trade.trade_type == "buy"
      @trade.user.add_to_buying_power(amount)
      render json: @trade
    else
      render json: @trade.errors.full_messages, status: 422
    end
  end

  def trade_params
    params.require(:trade).permit(:stock_id, :portfolio_id, :price, :size, :trade_type)
  end

  
end
