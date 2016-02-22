exports = (typeof window === 'undefined') ? global : window;

exports.functionsAnswers = {
  argsAsArray : function(fn, arr) {
    return fn.apply(this, arr);
  },

  speak : function(fn, obj) {
    return fn.call(obj);
  },

  functionFunction : function(str) {
    return function (newStr) {
      return str + ", " + newStr;
    }
  },

  makeClosures : function(arr, fn) {
    var fns = [];
    _.each(arr, function (item) {
      fns.push(function () {
        return item;
      });
    });
    return fns;
  },

  partial : function(fn, str1, str2) {
    return function (str3) {
      return fn(str1, str2, str3);
    }
  },

  useArguments : function() {
    return _.reduce(arguments, function (memo, num) {
      return memo + num;
    }, 0);
  },

  callIt : function(fn) {
    var args = [];
    _.each(arguments, function (arg, index) {
      if (index !== 0) {
        args.push(arg);
      }
    });
    fn.apply(this, args);
  },

  partialUsingArguments : function(fn) {
    var args = [];
    _.each(arguments, function (item, index) {
      if (index !== 0) {
        args.push(item);
      }
    });
    return function () {
      _.each(arguments, function (item, index) {
        args.push(item);
      });
      return fn.apply(this, args);
    };
  },

  curryIt : function(fn) {
    return function (a) {
      return function (b) {
        return function (c) {
          return fn(a, b, c);
        };
      };
    };
  }
};
