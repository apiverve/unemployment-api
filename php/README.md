# Unemployment Rate API - PHP Package

Unemployment Rate looks up labor statistics by two- or three-letter ISO country code. It returns the country name, reporting year, and record count, with paid plans adding historical annual rates.

## Installation

Install via Composer:

```bash
composer require apiverve/unemployment
```

## Getting Started

Get your API key at [APIVerve](https://apiverve.com)

### Basic Usage

```php
<?php

require_once 'vendor/autoload.php';

use APIVerve\Unemployment\Client;

// Initialize the client
$client = new Client('YOUR_API_KEY');

// Make a request
$response = $client->execute([
    'country' => 'USA',
    'year' => 2023
]);

// Print the response
print_r($response);
```


### Error Handling

```php
use APIVerve\Unemployment\Client;
use APIVerve\Unemployment\Exceptions\APIException;
use APIVerve\Unemployment\Exceptions\ValidationException;

try {
    $response = $client->execute(['country' => 'USA', 'year' => 2023]);
    print_r($response['data']);
} catch (ValidationException $e) {
    echo "Validation error: " . implode(', ', $e->getErrors());
} catch (APIException $e) {
    echo "API error: " . $e->getMessage();
    echo "Status code: " . $e->getStatusCode();
}
```

### Debug Mode

```php
// Enable debug logging
$client = new Client(
    apiKey: 'YOUR_API_KEY',
    debug: true
);
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

## Requirements

- PHP 7.4 or higher
- Guzzle HTTP client

## Documentation

For more information, visit the [API Documentation](https://docs.apiverve.com/ref/unemployment?utm_source=packagist&utm_medium=referral&utm_content=readme).

## Support

- Website: [https://apiverve.com/marketplace/unemployment?utm_source=php&utm_medium=referral&utm_content=readme](https://apiverve.com/marketplace/unemployment?utm_source=php&utm_medium=referral&utm_content=readme)
- Email: hello@apiverve.com

## License

This package is available under the [MIT License](LICENSE).
