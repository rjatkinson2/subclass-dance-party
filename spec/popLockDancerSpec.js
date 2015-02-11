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

  it("should load the correct image file", function() {
    expect('url(file:///Users/student/repo/2015-02-subclass-dance-party/'+ popLockDancer.image + ')').to.be.equal(popLockDancer.$node.css('background-image'));
  });

  it('should add dancers within the proper window boundaries', function() {
    var top = parseInt(popLockDancer.$node.css('top').replace('px', '') ) + popLockDancer.$node.outerHeight();
    var left = parseInt(popLockDancer.$node.css('left').replace('px', '') ) + popLockDancer.$node.outerWidth();
    expect(top).to.be.lessThan( $(window).height() );
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

