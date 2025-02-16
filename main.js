//import { createVerify, createSign } from 'crypto-js';
//import createVerify, createSign from 'crypto-js';
const CryptoJS = require("crypto");
var request = require('request');
const createVerify = CryptoJS.createVerify;
const createSign = CryptoJS.createSign;
const privateKey = `-----BEGIN PRIVATE KEY-----
MIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQDEWqEAR5ANnR8B
HV7J+IhuaNvl91E66UXivg3jXbi57fp3+Uv+IllWnc9sonN0A7hqRWk5fUEraYEb
m8NmxFl39aic42EPF5qRcsji5c273Xn6OHs3Za3LiNLAaXgp/y9sZDhYVZpxa4aI
DV+hObVa39UVovhQDjLj5jXo0H2we3Rmp6R10cB7mdrSNGoSoqeRFRNhuXX3QNuA
quslt9NGzYwVFIgwzvXbzbx48QrElPRqiJw8QjEOLboKTcN56iYdB+xCSB7ZAVms
w0JZ8RG0N60ooma5dHZoW+2vGIyp8JKzwr6Oq56iumFg4wjfjWCufhA4FrMWwCNX
CiUQbIQJAgMBAAECggEAMQ6akIUQoNIbY64ol0n0ni8tF4LHpPIQr5J/yklJZIyo
Sg67NYJz8x/I6dGZikf+rHBslnwsitHYe6MaOgP+/WlfJ9loT7q8N7AnsAattMzk
E4fGgyPwfLxRuVhweP+kY86TRECY7lLowPekZ5XRMWPga0A1DV1KyiUjXWgvquZw
55CPfvIecOASEulv8fPbtzrcN/Ps/BhJ+CYpjzADdOaZS0sNjw+mhDWFmCtwdDIZ
hGiAlEFbzIHvt/xp0stNxhvUENbtVz355NizYqimbHNSyCliCbzoHc5WKC0Ffi+5
FqwOroetgk6qNUjkS2EAc9lDm/VCNuGhCv/jYm+dLQKBgQDx2EiMU9fsIo8Th9sM
xazlZ2dyFrqsuC+AiqKovm/Z0nvbDXSjOtUsq1RWV4Zb4d4eCCK1dN97vOkXe97q
KG9jh1t7ZKChotByvPqWpwCdB6NiuZvFg2JG2OW2KMR05zPGNbDW6DtdKPwUiaZY
ckTmKEnf2OaWMLECMZd+FFY3VQKBgQDP2LokeO1LyzIDxxtM7sd2EyO3aUkPZDg1
7VlXjkTtY7rQFgfQMjGX0SD5wUsnV3dSXDjVnJsbIhwkKoBQ4Mw0Wz6slowhG8Nm
2vr101+CIVUAXjlHhjk+ZfzDOKbwWphBijxFBQr4GQ0eZwBQcNPchX81jiEo0GhJ
um7J1F7x5QKBgEHvwffgdCJBWdjtVV+qFXWGN8H3SHYG0YyuP6LaKQyuQm56wK4w
QCapn5jazBsI/dIaTbxDXRsTakmo0CHvXE86fEqsKM9o4IQn2fpxFc26Y2VrTXkQ
VR8Ty61aeBWXY5pK0SgGsQi5P+EpllzO6tIFcf7B2DxikiAS/Ua2rLrxAoGAIqKh
+jvwhyXYMsr2IK7VrDZqSEESPK9dspbXwYBiuhBZbB2PtcD3hK4DybrNNEQeDSpz
Ch2rtyzK9bfjZBbh0IO4APihZ08CE9y/30EW9E9ro8EP2Hxkg6JpKXsCTqE6KAnK
G1JIzqkWB4/wfHcgxum0Fg+WNP/tsQORPK7YF4UCgYBCaE/veKKtqOpKWdjnPEE8
IvMXjypkB7uvClovbqRhvxpAGF27/eR17TDV7wDjHIAEyFhCNCfwNm7w7UZokKBd
bCUwaV0LVrmoJ4eYZz2cp7aCT723r67DavW8LaFdtNjKm+T0t5+JHHDrVjIcwReu
TKQj5gyJbxYL8WMDgssrcQ==
-----END PRIVATE KEY-----
`;
const publicKey = `-----BEGIN CERTIFICATE-----
MIIC/TCCAeWgAwIBAgIJAM2LsCus5wRxMA0GCSqGSIb3DQEBBQUAMCAxHjAcBgNV
BAMMFTExMTM5MzQwMjkyMjAxMzE5NzIzNjAgFw0yNTAyMTYxMzM4MzFaGA85OTk5
MTIzMTIzNTk1OVowIDEeMBwGA1UEAwwVMTExMzkzNDAyOTIyMDEzMTk3MjM2MIIB
IjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAxFqhAEeQDZ0fAR1eyfiIbmjb
5fdROulF4r4N4124ue36d/lL/iJZVp3PbKJzdAO4akVpOX1BK2mBG5vDZsRZd/Wo
nONhDxeakXLI4uXNu915+jh7N2Wty4jSwGl4Kf8vbGQ4WFWacWuGiA1foTm1Wt/V
FaL4UA4y4+Y16NB9sHt0ZqekddHAe5na0jRqEqKnkRUTYbl190DbgKrrJbfTRs2M
FRSIMM712828ePEKxJT0aoicPEIxDi26Ck3DeeomHQfsQkge2QFZrMNCWfERtDet
KKJmuXR2aFvtrxiMqfCSs8K+jqueorphYOMI341grn4QOBazFsAjVwolEGyECQID
AQABozgwNjAMBgNVHRMBAf8EAjAAMA4GA1UdDwEB/wQEAwIHgDAWBgNVHSUBAf8E
DDAKBggrBgEFBQcDAjANBgkqhkiG9w0BAQUFAAOCAQEAszn3E0H2uYcijv9g0quW
H3oBKzSEgbRoSIbva7+2EXyVd3pzbUIvPUXzi9DGbNJ8/GPmpRriIEBS1jMNxRBL
wJzNfLp6Mdk9R6Wh/JEuBeIq+aEMxXSyl9YvheHOD1+OQ1erObH8HJEkDVIRGjhI
ULO/f9WNscHI0YhXqmI9ZSgbrA4yPVNL6DaLia1ZAKbf7Ce0g+yMLpPfYW8phjac
2ttFyibSdK4/gKVdN8MacoEaCJ9AYoTLtEDsD/7J6aDxmzVMnY9K0a3rgrrtRb4V
8pmkZvjqvRHpp0frCCqCBHR32mYLrKT4mgx2goP8y1HCkVy8ocVuDimV/82VMYoq
8w==
-----END CERTIFICATE-----

`; // only if signature verification is required

// header and claim - basis of the input that is going to be signed by the private key
const header = {
  "alg": "RS256",
  "typ": "JWT",
  "kid":"2f2a285fbc29dccad3596141688196d641cc9ca7"
};
const iat = parseInt((new Date().getTime() / 1000).toString().split(".")[0]);
const exp = iat + 3600;

const claim = {
"iss": "horoscope@horoscope-447613.iam.gserviceaccount.com",
  "sub": "horoscope@horoscope-447613.iam.gserviceaccount.com",
"scope": "https://www.googleapis.com/auth/drive.file https://www.googleapis.com/auth/spreadsheets",
  "aud": "https://oauth2.googleapis.com/token",
  "iat": iat,
  "exp": exp
};

// create base64 of the header and claim
const base64Header = Buffer.from(JSON.stringify(header), 'utf8').toString(
  'base64'
);
const base64Claim = Buffer.from(JSON.stringify(claim), 'utf8').toString(
  'base64'
);

// create the input from the encoded header and claim; 
// this is the input that is going to be signed by the secret key
const inputForSignature = `${base64Header}.${base64Claim}`;

// create the signing object using 'RSA-SHA256' algo,
// and add the input to it
const sign = createSign('RSA-SHA256');
sign.update(inputForSignature, 'utf8');
sign.end();

// sign the input using your private key and get the signature in base64 format
const base64Signature = sign.sign(privateKey, 'base64');

// optionally, if you want to verify the signature using the public key
const verify = createVerify('RSA-SHA256');
verify.write(inputForSignature);
verify.end();
if(verify.verify(publicKey, base64Signature, 'base64')) {
  console.log('signature verified');
} else {
  console.log('signature could not be verified');
}

// form the JWT by concatenating the above encoded parameters separated by dot (".") 
const JWT = `${base64Header}.${base64Claim}.${base64Signature}`;
console.log(JWT); // you are looking for

var options = {
  'method': 'POST',
  'url': 'https://oauth2.googleapis.com/token',
  'headers': {
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  form: {
    'grant_type': 'urn:ietf:params:oauth:grant-type:jwt-bearer',
    'assertion': JWT
  }
};
var access_token = "";
request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
  access_token = JSON.parse(response.body).access_token;
  console.log("access_token: " + access_token);


var options = {
  'method': 'GET',
  'url': 'https://sheets.googleapis.com/v4/spreadsheets/19H_Qjs9aHJxDtZ1expcZTX687s5ry_0MZFgLN_waM9k/values/A2:B2',
  'headers': {
    'Authorization': 'Bearer ' + access_token
  }
};
request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
});
});