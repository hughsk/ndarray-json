# ndarray-json [![experimental](https://rawgithub.com/hughsk/stability-badges/master/dist/experimental.svg)](http://github.com/hughsk/stability-badges) #

Serialize/deserialize [ndarrays](http://github.com/mikolalysenko/ndarray) to
and from JSON. Right now there's a good chance it's not going to be the most
appropriate means of encoding, but
[`base64DecToArray`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Base64_encoding_and_decoding#Appendix.3A_Decode_a_Base64_string_to_Uint8Array_or_ArrayBuffer)
might make it reasonable.

## Installation ##

``` bash
npm install ndarray-json
```

## Usage ##

### `require('ndarray-json').stringify(ndarray)` ###

Stringifies an ndarray into JSON.

### `require('ndarray-json').exports(ndarray)` ###

Takes a stringified ndarray and returns a new copy.
