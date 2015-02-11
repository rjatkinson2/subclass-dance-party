$(document).ready(function(){
  window.dancers = [];
  window.totalDancers = {};
  $(".addDancerButton").on("click", function(event){
    /* This function sets up the click handlers for the create-dancer
     * buttons on index.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */

    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");
    if ( !totalDancers[dancerMakerFunctionName] ) {
      totalDancers[dancerMakerFunctionName] = 1;
    } else {
      totalDancers[dancerMakerFunctionName] ++ ;
    }

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );

    if ( dancer.image ) {
      dancer.setPosition(
        ($('body').innerHeight() - dancer.imageHeight * 1.5 ) * Math.random(),
        ($('body').innerWidth() - dancer.imageWidth * 1.5 ) * Math.random(),
        Math.random() * 1000
      );
    }

    $('.dancefloor').append(dancer.$node);
    window.dancers.push(dancer);
    dancer.index = totalDancers[dancerMakerFunctionName];

  });

  $(".lineUpButton").on("click", function(event){
    var startTop = $(window).height() * 0.45;
    var startLeft = $(window).width() * 0.5;
    var endTop = $(window).height() * 0.8;
    var endLeft = $(window).width() * 0.5;
    for(var i = 0; i < window.dancers.length; i++){
      dancers[i].lineUp(startTop,startLeft,(endTop - dancers[i].imageWidth / 3 ),endLeft);
    }
  });
});

