define([], function () {
  return (function () {

    var value = 0;
    var listeners = [];

    var notify = function () {
      listeners.forEach(function (listener) {
        listener(value);
      });
    };

    var increase = function () {
      value = value + 1;
      notify();
    };

    var decrease = function () {
      value = value - 1;
      notify();
    };

    var currentValue = function () {
      return value;
    };

    var addListener = function (listener) {
      listeners.push(listener);
    };

    return {
      increase: increase,
      decrease: decrease,
      currentValue: currentValue,
      addListener: addListener
    };
  })();
});