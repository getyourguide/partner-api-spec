# GetYourGuide Partner API OpenAPI Specifications
This GetYourGuide Partner API provides access to GetYourGuide’s marketplace for tours and activities. 
It has a RESTful interface and uses the JSON media format. Access is secured via SSL and an API access token.

## Connecting to the API

The base URL for accessing version 1 of the API is: https://api.getyourguide.com/1/. Configuration information, such as compatibility with the current client, can be accessed at: https://api.getyourguide.com/configuration/1.


#### Two headers are required to be passed with each request:

| Headers        | Description |
| -------------- |:-----------:|
| X-ACCESS-TOKEN | An API access token used for authentication, provided by GetYourGuide. |
| Accept | The media type which are acceptable for the response. Set to `application/json` |



#### Because the API is stateless, each API GET request should include the following two parameters:

| Headers        | Description |
| -------------- |:-----------:|
| cnt_language | Definition of the content language as a two letter language code (ISO 639-1 specification). Available are: da, de, en, es, fr, it, nl, no, pl, pt, fi, sv, tr, zh. |
| currency | Definition of the currency used for pricing as a three letter currency code (ISO 4217 specification). Available are: USD, EUR, AUD, GBP, CAD, DKK, NZD, NOK, PLN, SGD, SEK, CHF, AED. |

### Using curl, a valid GET request is:

`curl -H "Accept: application/json" -H "X-ACCESS-TOKEN: [YOUR TOKEN]" -X GET "https://api.getyourguide.com/1/tours/62484?cnt_language=en&currency=USD"`

## Openapi generater / Specs
Preview: https://code.getyourguide.com/partner-api-spec/

Generated clients ...

## Test System
Please use the following test system during development: https://api.testing1.gygtest.com.

- Test data can be sent to the system (e.g. bookings). The system database gets reset periodically.
- Emails are blocked from being sent, but can be forwarded upon request.

## Request Limitation
The default rate limit is 60 calls per minute. Once the rate limit is reached, all subsequent calls will be blocked for the remaining time of the minute. GetYourGuide also monitors API traffic and warns about excessive usage in relation to bookings being made. It is strongly encouraged to access the API in real-time; please do not scrape the API in an attempt to cache its output.