/**
 * Uses Node-RSA Library from https://github.com/rzcoder/node-rsa
 */
const RSA = require('node-rsa');

module.exports =
{
    getKeyPair: function()
    {
        var key = new RSA();
        key.generateKeyPair(1024);
        var keyPair = {};
        keyPair.SK = key.exportKey("pkcs1-private");
        keyPair.PK = key.exportKey("pkcs1-public");
        return keyPair;
    },

    sign: function (privateKeyStr, data)
    {
        var key = new RSA();
        key.importKey(privateKeyStr, "pkcs1-private");
        var sign = key.sign(data, "base64");

        return sign;
    },

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
