# GetYourGuide Partner API OpenAPI Specifications
This GetYourGuide Partner API provides access to GetYourGuide’s marketplace for tours and activities. 
It has a RESTful interface and uses the JSON media format. Access is secured via SSL and an API access token.
### Table of contents

* [API Reference](https://code.getyourguide.com/partner-api-spec/)
* [Getting Started - Wiki](https://github.com/getyourguide/partner-api-spec/wiki/Getting-started)

## [Generating clients](https://openapi-generator.tech/docs/installation/)
You can use the openapi generator cli to automatically generate different language clients.
Some generators include (`go`, `typescript-node`, `ruby`)

Clone the repository and then you can run this command to generate a `typescript-node` client
```
npx @openapitools/openapi-generator-cli generate -i api.yaml -g typescript-node -o /tmp/ts/
```
## Security

For sensitive security matters please contact [security@getyourguide.com](mailto:security@getyourguide.com).

## Legal

Copyright 2025 GetYourGuide GmbH.

**partner-api-spec** is licensed under the Apache License, Version 2.0. See [LICENSE](LICENSE) for the full text.
