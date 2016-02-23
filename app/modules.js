exports = (typeof window === 'undefined') ? global : window;

exports.modulesAnswers = {
  createModule : function(str1, str2) {
    var sayIt = function () {
      return this.greeting + ", " + this.name;
    }
    var module = {
      sayIt : function () {
        return sayIt.bind(module)();
      },
      greeting : str1,
      name : str2
    };
    return module;
  }
};
