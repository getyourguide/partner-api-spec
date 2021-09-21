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
    // Generate Signature
    async function digestMessage(message) {
        const msgUint8 = new TextEncoder().encode(message);                           // encode as (utf-8) Uint8Array
        const hashBuffer = await crypto.subtle.digest('SHA-256', msgUint8);           // hash the message
        const hashArray = Array.from(new Uint8Array(hashBuffer));                     // convert buffer to byte array
        const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join(''); // convert bytes to hex string
        return hashHex;
    }

    // We need to generate a signature for each request
    const timestamp = Date.now() + 60 * 7;

    const path = new URL(req.url).search;
    const token = req.headers['X-ACCESS-TOKEN'];
    const data = `${path}\n${token}\n${timestamp}`;
    const digestHex = await digestMessage(data);

    // We need to remove the x-access-token header
    delete req.headers['X-ACCESS-TOKEN'];

    // Add the signature to the request
    req.headers['x-gyg-signature'] = `123456.${timestamp}.${digestHex}`;
    return req;
}