var ndarray = require('ndarray')
var dtype = require('dtype')
var cwise = require('cwise')

module.exports = {
    stringify: stringify
  , parse: parse
}

var encode = cwise({
    args: ['array', 'index']
  , pre: function(shape) {
    this.encoded = ''
  }
  , body: function(array) {
    this.encoded += array
    this.encoded += ','
  }
  , post: function() {
    return this.encoded
  }
  , funcName: 'cwiseEncoder'
})

function stringify(array) {
  var type = array.dtype || 'float32'
  var dims = array.shape.length - 1
  var string = '{'

  string += '"dtype":"' + type + '",'

  string += '"shape":['
  for (var i = 0; i < array.shape.length; i += 1) {
    string += array.shape[i]
    if (i !== dims) string += ','
  }
  string += '],'

  string += '"stride":['
  for (var i = 0; i < array.stride.length; i += 1) {
    string += array.stride[i]
    if (i !== dims) string += ','
  }
  string += '],'
  string += '"data":[' + encode(array).slice(0, -1) + ']}'

  return string
}

function parse(input) {
  var json = JSON.parse(input)

  if (!json.stride) throw new Error('Missing "stride" value from JSON input')
  if (!json.shape) throw new Error('Missing "shape" value from JSON input')
  if (!json.dtype) throw new Error('Missing "dtype" value from JSON input')
  if (!json.data) throw new Error('Missing "data" value from JSON input')

  var size = 1
  var d = json.shape.length
  while (d--) size *= json.shape[d]

  var data = new (dtype(json.dtype))(size)

  var l = json.data.length
  for (var i = 0; i < l; i += 1) {
    data[i] = json.data[i]
  }

  return ndarray(data, json.shape, json.stride, 0)
}
