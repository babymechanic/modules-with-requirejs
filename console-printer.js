define(['./counter'], function (counter) {
  counter.addListener(function (value) {
    if (value > 0) {
      console.log('we are in the green');
    }
    if (value < 0) {
      console.log('we are in the red');
    }
  });
});