exports = (typeof window === 'undefined') ? global : window;

exports.numbersAnswers = {
  valueAtBit: function(num, bit) {
    var binary = (num >>> 0).toString(2);
    return parseInt(binary[binary.length - bit]);
  },

  base10: function(str) {
    return parseInt(str, 2);
  },

  convertToBinary: function(num) {
    var binary = (num >>> 0).toString(2);
    return binary.length === 8 ? binary : "0" + binary;
  },

  multiply: function(a, b) {
    return (a / (1 / b));
  }
};
