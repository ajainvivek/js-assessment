exports = (typeof window === 'undefined') ? global : window;

exports.recursionAnswers = {
  listFiles: function(data, dirName) {
    var isDir = _.compact(_.pluck(data.files, "dir")).length;
    this.listFiles.files = this.listFiles.files || [];
    if (isDir) {
      var files = _.compact(_.pluck(data.files, "files"))[0];
      var current = data.files.pop();
      this.listFiles.files.push(current);
      this.listFiles(files);
    } else {
      return this.listFiles.files;
    }
  },

  permute: function(arr) {
    var results = [];

    var permutedArray = function (arr, memo) {
      var cur, memo = memo || [];

      _.each(arr, function (val, index) {
        cur = arr.splice(index, 1);
        if (arr.length === 0) {
          results.push(memo.concat(cur));
        }
        permutedArray(arr.slice(), memo.concat(cur));
        arr.splice(index, 0, cur[0]);
      });

      return results;
    }

    return permutedArray(arr);
  },

  fibonacci: function(n) {
    var fib = [];

    fib[0] = 0;
    fib[1] = 1;

    for(var i = 2; i <= n; i++) {
        fib[i] = fib[i-2] + fib[i-1];
    }

    return fib[n];
  },

  validParentheses: function(n) {

  }
};
