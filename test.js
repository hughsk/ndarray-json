var cwise = require('cwise')
var cave = require('cave-automata-2d')
var zero = require('zeros')
var test = require('tape')
var json = require('./')

test('ndarray-json', function(t) {
  var array = cave(zero([50, 50]))(10)
  var duplicate = json.parse(json.stringify(array))

  t.doesNotThrow(function() {
    cwise({
      args: ['array', 'array'],
      body: function(a, b) {
        if (a !== b) throw new Error('Not exactly equal')
      }
    })(array, duplicate)
  })

  t.end()
})
