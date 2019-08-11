requirejs([
  './counter',
  './console-printer'
], function(counter){

  counter.increase();
  counter.decrease();
  counter.decrease();

});