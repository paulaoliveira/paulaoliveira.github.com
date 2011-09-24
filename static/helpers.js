$(document).ready(function() {
  ko.app.helpers = {};
  ko.app.helpers.except_last = function(current,collection) {
    return !(current === collection[collection.length-1]);
  };
});