# ndarray-json [![experimental](https://rawgithub.com/hughsk/stability-badges/master/dist/experimental.svg)](http://github.com/hughsk/stability-badges) #

Serialize/deserialize [ndarrays](http://github.com/mikolalysenko/ndarray) to
and from JSON. The array data itself is stored in base64 format, with some
additional metadata for shape/stride/etc.

## Installation ##

``` bash
npm install ndarray-json
```

## Usage ##

### `require('ndarray-json').stringify(ndarray)` ###

Stringifies an ndarray into JSON.

### `require('ndarray-json').parse(ndarray)` ###

Takes a stringified ndarray and returns a new copy.
