@portfolio_snapshots.each do |snapshot|
  json.set! snapshot.id do
    json.extract! snapshot, :portfolio_id, :date, :value
  end
end
