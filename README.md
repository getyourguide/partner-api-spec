# GetYourGuide Partner API OpenAPI Specifications
This GetYourGuide Partner API provides access to GetYourGuide’s marketplace for tours and activities. 
It has a RESTful interface and uses the JSON media format. Access is secured via SSL and an API access token.
### Table of contents

* [General Information](https://github.com/getyourguide/partner-api-spec/wiki/General-Information)
* [Image Formats](https://github.com/getyourguide/partner-api-spec/wiki/Image-Formats)
* [Making a booking](https://github.com/getyourguide/partner-api-spec/wiki/Making-a-booking)

## [API Reference](https://code.getyourguide.com/partner-api-spec/)

## [Generating clients](https://openapi-generator.tech/docs/installation/)
You can use the openapi generator cli to automatically generate different language clients
```
docker run --rm \
  -v ${PWD}:/local openapitools/openapi-generator-cli generate \
  -i ~/work/partner-api-spec/spec/api.yaml \
  -g go \
  -o /local/out/go
```