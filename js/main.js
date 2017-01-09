// JavaScript Document

/*background colors*/

$(function() {
    // Init Controller

    var scrollMagicController = new ScrollMagic();

	  var tween1 = TweenMax.to('.container', 6, {backgroundColor:"rgba(253,165,0,.3)"});
	var scene1 = new ScrollScene({
    triggerElement: '#scene1',
duration: 10000
})
.setClassToggle('.container', 'scene-1-active')
.setTween(tween1)
.addTo(scrollMagicController)

	  var tween2 = TweenMax.to('.container', 6, {backgroundColor:"rgba(247,3,3,0.3)"});
var scene2 = new ScrollScene({
    triggerElement: '#scene2',
duration: 5000
})
.setClassToggle('.container', 'scene-2-active')
.setTween(tween2)
.addTo(scrollMagicController)

	  var tween3 = TweenMax.to('.container', 6, {backgroundColor:"rgba(28,3,42,0.94)"});
var scene3 = new ScrollScene({
    triggerElement: '#scene3',
duration: 5000
})
.setClassToggle('.container', 'scene-3-active')
.setTween(tween3)
.addTo(scrollMagicController)

	  var tween4 = TweenMax.to('.container', 6, {backgroundColor:"rgba(28,3,42,0.7)"});
var scene4 = new ScrollScene({
    triggerElement: '#scene4',
duration: 20000
})
.setClassToggle('.container', 'scene-3-active')
.setTween(tween4)
.addTo(scrollMagicController)

scene1.addIndicators();
scene2.addIndicators();
scene3.addIndicators();
scene4.addIndicators();

});

/*stars

TweenMax.to('#stars1', 10, {opacity:1});
TweenMax.to('#stars2', 25, {opacity:1});
TweenMax.to('#stars3', 41, {opacity:1});

*/

$(function() {
    // Init Controller
    var scrollMagicController = new ScrollMagic();

	var tween1 = TweenMax.to('#stars1', 26, {opacity:1});

	var scene1 = new ScrollScene({
    triggerElement: '#scene2',
    offset: 0 /* offset the trigger 150px below #scene's top */
})
.setTween(tween1)
.addTo(scrollMagicController);

	var tween2 = TweenMax.to('#stars2', 25, {opacity:1});

	var scene2 = new ScrollScene({
    triggerElement: '#scene3',
    offset: 0 /* offset the trigger 150px below #scene's top */
})
.setTween(tween2)
.addTo(scrollMagicController);

		var tween3 = TweenMax.to('#stars3', 26, {opacity:1});

	var scene3 = new ScrollScene({
    triggerElement: '#scene4',
    offset: 0 /* offset the trigger 150px below #scene's top */
})
.setTween(tween3)
.addTo(scrollMagicController);

});
