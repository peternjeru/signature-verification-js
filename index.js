var verifier = require("./src/Verifier");
var callbackRequestStr = "{\"TransactionType\":\"CustomerPayBillConfirmation\"," +
    "\"TransactionTime\":\"20191008083205\"," +
    "\"TransactionID\":\"NJ83HBNKED\"," +
    "\"TransactionAmount\":10," +
    "\"BusinessShortcode\":\"107050\"," +
    "\"AccountReference\":\"acc_ref\"," +
    "\"SenderMSISDN\":\"254796778039\"," +
    "\"SenderFirstName\":\"Peter\"," +
    "\"SenderMiddleName\":null," +
    "\"SenderLastName\":\"Test\"," +
    "\"RemainingCredits\":982," +
    "\"Signature\":\"I8iVcPXe5\\/KGyUUPwTj9AIymbSTp39hMaFJCW56ZuJK2QHNbh2zJVzynDZnB2sWI6pPb8GQR0s+FmhKow3gFwE2XaQ1JprX3jtVKEkW1UDwfw9XpXwlaBRLp6K+DLc7NPSxoeq5bj0Z9PjnLUTm0uklgA\\/HJS8HxI0O2gRIJZqY=\"," +
    "\"PublicKey\":\"-----BEGIN RSA PUBLIC KEY-----\\r\\nMIGJAoGBAJ6bBYcQrVNJH+dFvA1nkRXcuGrJLqKKuF7IscD6dvymi3xQht\\/bPC\\/z\\r\\nSXnu0RLQwvymyRsqgAs4+jDgZH5NRNIx8qg\\/8K\\/thNc+XJzssmt8gFddWR4V++Sf\\r\\nu8x8GPNtkJyGSywp4Y4yukt\\/CN7b2aop68bnhrZd8f\\/s8VJqR7EvAgMBAAE=\\r\\n-----END RSA PUBLIC KEY-----\"}";

var request = JSON.parse(callbackRequestStr);
var data = request.TransactionTime
    + request.TransactionID
    + request.TransactionAmount
    + request.AccountReference
    + request.SenderMSISDN
    + request.BusinessShortcode;

var verified = verifier.verify(request.PublicKey, data, request.Signature);

console.log("Verified: " + verified);
