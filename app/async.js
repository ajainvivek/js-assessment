exports = (typeof window === 'undefined') ? global : window;

exports.asyncAnswers = {
  async : function(value) {
    return new Promise(function (resolve, reject) {
      resolve(value);
    });
  },

  manipulateRemoteData : function(url) {
    return new Promise(function (resolve, reject) {
      $.ajax({
        url : url,
        method: "GET",
        dataType: "json",
        success : function (data) {
          var names = _.pluck(data.people, "name").sort();
          resolve(names);
        },
        fail : function () {
          reject("Request failed!!");
        }
      });
    });
  }
};
