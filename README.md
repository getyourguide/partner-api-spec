# GetYourGuide Partner API OpenAPI Specifications
This GetYourGuide Partner API provides access to GetYourGuide’s marketplace for tours and activities. 
It has a RESTful interface and uses the JSON media format. Access is secured via SSL and an API access token.
### Table of contents

* [Getting Started - Wiki](https://github.com/getyourguide/partner-api-spec/wiki/Getting-started)
* [Additional Resources](https://github.com/getyourguide/partner-api-spec/tree/main/resources)

## [API Reference](https://code.getyourguide.com/partner-api-spec/)

## [Generating clients](https://openapi-generator.tech/docs/installation/)
You can use the openapi generator cli to automatically generate different language clients.
Some generators include (`go`, `typescript-node`, `ruby`)

Clone the repository and then you can run this command to generate a `typescript-node` client
```
npx @openapitools/openapi-generator-cli generate -i api.yaml -g typescript-node -o /tmp/ts/
```
