exports = (typeof window === 'undefined') ? global : window;

exports.stringsAnswers = {
  reduceString: function(str, amount) {
    var split = str.split("");
    var result = [];
    var occurenceTracker = {};
    _.each(split, function (alpha) {
      occurenceTracker[alpha] = occurenceTracker[alpha] || [];
      if (occurenceTracker[alpha].length === amount && result[result.length - 1] !== alpha) { //if last char doesnt follow sequentially then rest the map
        occurenceTracker[alpha] = [];
      }
      if (occurenceTracker[alpha].length < amount) { // push to result if the seq strs is less than amt
        result.push(alpha);
        occurenceTracker[alpha].push(alpha);
      }
    });
    return result.join("");
  },
  wordWrap: function(str, cols) {

  },
  reverseString: function(str) {
    return str.split("").reverse().join("");
  }
};
