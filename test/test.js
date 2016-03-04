var rp = require('..');

var equal = require('assert').equal;

describe('re-percentage', function() {

  it('positive and negtive number with %', function() {
    equal(rp('1%'), 0.01);
    equal(rp('-1%'), -0.01);

    equal(rp('10%'), 0.1);
    equal(rp('-10%'), -0.1);
    
    equal(rp('120%'), 1.2);
    equal(rp('-120%'), -1.2);
    
    equal(rp('12.0%'), 0.12);
    equal(rp('-12.0%'), -0.12);
    
    equal(rp('12.5%'), 0.125);
    equal(rp('-12.5%'), -0.125);
    
    equal(rp('0.23%'), 0.0023);
    equal(rp('-0.23%'), -0.0023);

    equal(rp('∞%'), Infinity);
    equal(rp('-∞%'), -Infinity);
  });

  it('positive and negtive number without %', function() {
    equal(rp('1'), 0.01);
    equal(rp('-1'), -0.01);

    equal(rp('10'), 0.1);
    equal(rp('-10'), -0.1);
    
    equal(rp('120'), 1.2);
    equal(rp('-120'), -1.2);
    
    equal(rp('12.0'), 0.12);
    equal(rp('-12.0'), -0.12);
    
    equal(rp('12.5'), 0.125);
    equal(rp('-12.5'), -0.125);
    
    equal(rp('0.23'), 0.0023);
    equal(rp('-0.23'), -0.0023);

    equal(rp('∞'), Infinity);
    equal(rp('-∞'), -Infinity);
  });

});