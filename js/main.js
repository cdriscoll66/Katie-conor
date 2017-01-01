// JavaScript Document



$(function() {
    // Init Controller
	
    var scrollMagicController = new ScrollMagic();

	  var tween = TweenMax.to('body', 6, {backgroundColor:"#000"});

	// Create the Scene and trigger when visible with ScrollMagic
var scene = new ScrollScene({
    triggerElement: '#scene',
duration: 300
})
	

 
.setTween(tween)
.addTo(scrollMagicController)
   
	
scene.addIndicators();
	
	
	

});
/*

// When the DOM is ready
$(function() {
  
  // Init ScrollMagic Controller
  var scrollMagicController = new ScrollMagic();
  
  // Create Animation for 0.5s
  var tween = TweenMax.to('body', 5, {
    backgroundColor: 'rgb(255, 39, 46)'
  });
  

  
  // Create the Scene and trigger when visible
  var scene = new ScrollScene({
    triggerElement: '#scene',
    offset: 150 
  })
  .setTween(tween)
  .addTo(scrollMagicController);
  
  // Add debug indicators fixed on right side
   scene.addIndicators();
  
});
*/