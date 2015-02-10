describe("popLockDancer", function() {

  var popLockDancer;
  var timeBetweenSteps = 100;
  var clock;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    popLockDancer = new PopLockDancer(10, 20, timeBetweenSteps);
  });

  it("should have a jQuery $node object", function(){
    expect(popLockDancer.$node).to.be.an.instanceof(jQuery);
  });

  it("should have a step function that makes its node blink", function() {
    sinon.spy(popLockDancer.$node, 'toggle');
    popLockDancer.step();
    expect(popLockDancer.$node.toggle.called).to.be.true;
  });

  describe("dance", function(){
    it("should call step at least once per second", function(){
      sinon.spy(popLockDancer, "step");
      expect(popLockDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(popLockDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(popLockDancer.step.callCount).to.be.equal(2);
    });
  });
});

