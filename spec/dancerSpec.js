describe("dancer", function() {

  var dancer;
  var timeBetweenSteps = 100;
  var clock;


  beforeEach(function() {
    clock = sinon.useFakeTimers();
    dancer = new Dancer(10, 20, timeBetweenSteps);
  });

  it("should have a jQuery $node object", function(){
    expect(dancer.$node).to.be.an.instanceof(jQuery);
  });

  it("should have the method step", function() {
    expect(dancer.step).to.be.a('function');
  });

  it("should have the method setPosition", function() {
    expect(dancer.setPosition).to.be.a('function');
  });

  it("should have the correct instantiation properties", function() {
    expect(dancer.top).to.equal(10);
    expect(dancer.left).to.equal(20);
    expect(dancer.timeBetweenSteps).to.equal(timeBetweenSteps);
  });

  it("should set the correct css position on the object's node", function(){
    expect(dancer.$node.css('top')).to.equal('10px');
    expect(dancer.$node.css('left')).to.equal('20px');
  });



});
