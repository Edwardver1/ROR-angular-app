json.extract! car, :id, :producer, :model, :color, :price, :created_at, :updated_at
json.url car_url(car, format: :json)