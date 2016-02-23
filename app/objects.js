exports = (typeof window === 'undefined') ? global : window;

exports.objectsAnswers =  {
  alterContext : function(fn, obj) {
    return fn.call(obj);
  },

  alterObjects : function(constructor, greeting) {
    constructor.prototype.greeting = greeting;
    return new constructor ();;
  },

  iterate : function(obj) {
    var keys = Object.keys(obj);
    var result = [];
    _.each(keys, function (key) {
      result.push(key + ": " + obj[key]);
    });
    return result;
  }
};
