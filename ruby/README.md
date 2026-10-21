# Unemployment Rate API - Ruby Gem

Unemployment Rate looks up labor statistics by two- or three-letter ISO country code. It returns the country name, reporting year, and record count, with paid plans adding historical annual rates.

## Installation

Add this line to your application's Gemfile:

```ruby
gem 'apiverve_unemployment'
```

And then execute:

```bash
$ bundle install
```

Or install it yourself as:

```bash
$ gem install apiverve_unemployment
```

## Getting Started

Get your API key at [APIVerve](https://apiverve.com)

### Basic Usage

```ruby
require 'apiverve_unemployment'

# Initialize the client
client = APIVerve::Unemployment::Client.new(api_key: "YOUR_API_KEY")

# Make a request
response = client.execute({
  country: "USA",
  year: 2023
})

# Print the response
puts response
```


### Error Handling

```ruby
begin
  response = client.execute({ country: "USA", year: 2023 })
  puts response["data"]
rescue APIVerve::Unemployment::ValidationError => e
  puts "Validation error: #{e.errors.join(', ')}"
rescue APIVerve::Unemployment::APIError => e
  puts "API error: #{e.message}"
  puts "Status code: #{e.status_code}"
end
```

### Debug Mode

```ruby
# Enable debug logging
client = APIVerve::Unemployment::Client.new(
  api_key: "YOUR_API_KEY",
  debug: true
)
```

## Example Response

```json
{
  "status": "ok",
  "error": null,
  "data": {
    "country": "USA",
    "countryName": "United States",
    "year": 2024,
    "count": 1,
    "historical": [
      {
        "year": 2024,
        "rate": 4.02
      }
    ]
  },
  "code": 200
}
```

## Documentation

For more information, visit the [API Documentation](https://docs.apiverve.com/ref/unemployment?utm_source=rubygems&utm_medium=referral&utm_content=readme).

## Support

- Website: [https://apiverve.com/marketplace/unemployment?utm_source=ruby&utm_medium=referral&utm_content=readme](https://apiverve.com/marketplace/unemployment?utm_source=ruby&utm_medium=referral&utm_content=readme)
- Email: hello@apiverve.com

## License

This gem is available under the [MIT License](LICENSE).
