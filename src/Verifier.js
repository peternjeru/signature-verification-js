/**
 * Uses Node-RSA Library from https://github.com/rzcoder/node-rsa
 */
const RSA = require('node-rsa');

module.exports =
{
    verify: function (publicKeyStr, data, signature)
    {
        try
        {
            var key = new RSA();
            key.importKey(publicKeyStr, "pkcs1-public");
            key.setOptions({
                environment: "node",
                encryptionScheme: "pkcs1",
                signingScheme: "pkcs1-sha1"
            });

            var result = key.verify(
                data,       //buffer
                signature,  //signature
                "utf-8",    //source encoding
                "base64");     //signature encoding
            return result;
        }
        catch (e)
        {
            console.log(e);
        }

        return false;
    }
};
