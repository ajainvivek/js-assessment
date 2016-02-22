exports = (typeof window === 'undefined') ? global : window;

exports.countAnswers =  {
  count : function (start, end) {
    var count = start;
    var timer = window.setInterval(function () {
      if (count !== end) {
        console.log(count++);
      } else {
        window.clearInterval(timer);
      }
    }, 100);
    return {
      cancel : function () {
        window.clearInterval(timer);
      }
    }
  }
};
