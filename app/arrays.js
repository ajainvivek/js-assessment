exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {

  indexOf : function(arr, item) {
    return _.indexOf(arr, item);
  },

  sum : function(arr) {
    return _.reduce(arr, function (memo, num) {
      return memo + num;
    }, 0);
  },

  remove : function(arr, item) {
    return _.reject(arr, function (num) {
      return num === item;
    });
  },

  removeWithoutCopy : function(arr, item) {
    var clonedArr = _.clone(arr);
    var counter = 0;
    _.each(clonedArr, function (val, index) {
      if (val === item) {
        arr.splice(index - counter, 1);
        counter++; //increment the counter as you remove a value
      }
    });
    return arr;
  },

  append : function(arr, item) {
    arr.push(item);
    return arr;
  },

  truncate : function(arr) {
    arr.pop();
    return arr;
  },

  prepend : function(arr, item) {
    var newArr = [];
    newArr.push(item);
    return newArr.concat(arr);
  },

  curtail : function(arr) {
    arr.splice(0, 1);
    return arr;
  },

  concat : function(arr1, arr2) {
    return arr1.concat(arr2);
  },

  insert : function(arr, item, index) {
    var partition1 = arr.slice(0, index);
    var partition2 = arr.slice(index, arr.length);
    partition1.push(item);
    var result = partition1.concat(partition2);
    return result;
  },

  count : function(arr, item) {
    var occurences = 0;
    _.each(arr, function (val) {
      if (val === item) {
        occurences++;
      }
    });
    return occurences;
  },

  duplicates : function(arr) {
    var uniqs = _.uniq(arr);
    var duplicates = [];
    _.each(uniqs, function (item) {
      if (_.indexOf(arr, item) !== _.lastIndexOf(arr, item)) {
        duplicates.push(item);
      }
    });
    return duplicates;
  },

  square : function(arr) {
    var result = _.map(arr, function (num) {
      return num * num;
    });
    return result;
  },

  findAllOccurrences : function(arr, target) {
    var occurences = [];
    _.each(arr, function (item, index) {
      if (item === target) {
        occurences.push(index);
      }
    });
    return occurences;
  }
};
