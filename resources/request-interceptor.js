/**
 * requestInterceptor
 * 
 * This swagger request interceptor is used to generate a 
 * specific gyg signature header for each browser request.
 * 
 * Note: On works with https (crypto.subtle.digest)
 * 
 * @param {request} req 
 * @returns req
 */
export const requestInterceptor = async (req) => {

    if (req.url.endsWith('.yaml')) return req;

    // We need to generate a signature for each request
    const timestamp =  Math.floor(new Date().getTime() / 1000) + 60 * 7;

    const path = new URL(req.url).search;
    const token = req.headers['X-ACCESS-TOKEN'];
    const data = `${path}\n${token}\n${timestamp}`;
    
    // We import js-sha256 from npm since it computes the same way as php 
    // (crypto.subtle.digest) - url encodes the data before hashing which creates a different signature
    // https://www.npmjs.com/package/js-sha256
    const digestHex = sha256(data);

    // We need to remove the x-access-token header
    delete req.headers['X-ACCESS-TOKEN'];

    // Add the signature to the request
    req.headers['x-gyg-signature'] = `123456.${timestamp}.${digestHex}`;
    return req;
}