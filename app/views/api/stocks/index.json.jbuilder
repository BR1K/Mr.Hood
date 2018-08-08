@stocks.each do |stock|
  json.set! stock.symbol do
    json.extract! stock, :id, :symbol
  end
end
