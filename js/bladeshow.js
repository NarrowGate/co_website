$(window).load(function(){
    // init();

/*    var controller = new ScrollMagic({
    	globalSceneOptions: {
    		triggerHook: "onEnter"
    	}
    });*/

/*var controller = new ScrollMagic.Controller();

	    var introTl = new TimelineMax();

	    introTl
	    	.from($('.radImg'), 5, {opacity: .5, scale:5 ease:Power1.easeNone});

		var introScene = new ScrollMagic.Scene({
	        triggerElement: '#feature'
	    })
	    .setTween(introTl)
	    .addTo(controller);*/

    /*var attractionstween = TweenMax.staggerFromTo(
	'.radImg', 
	1, 
	{opacity :0, scale: 0}, 
	{delay:1, scale:10, ease: Back.easeOut});*/

var controller = new ScrollMagic.Controller();
var attractionstween = new TimelineMax().from('.radImg', 1, {opacity: .2, scale:1, y: -500, ease:Bounce.easeOut});
		var introScene = new ScrollMagic.Scene({
	        triggerElement: '#feature',
	        repeat:1
	        // ,reverse:false
	    })
	    .setTween(attractionstween)
	    .addTo(controller);

/*var scene = new ScrollScene({
	triggerElement: "#feature"
}).setTween(attractionstween).addTo(controller);*/


/*var pin = new ScrollScene({
	triggerElement: '.radImg',
}).setPin('.radImg').addTo(controller);*/


});


/*function init(){
    var toolTimeline = new TimelineMax();
    var duration = .5;
    toolTimeline.from('.radImg', duration, {opacity: 0, scale:25, ease:Linear.easeInOut});
}*/
    // toolTimeline.from('.title', duration, {opacity: 0, scale:25, ease:Linear.easeInOut},.2);

    // toolTimeline.to('.superman img', duration, {left: 0, ease:Back.easeOut});

    // toolTimeline.from('.superman img', duration, {skewX: "20deg", ease:Back.easeOut},.9);

    // toolTimeline.to('.mainTitle', duration, {right: -50, ease:Back.easeInOut},.7);

    // toolTimeline.staggerTo('.tool', duration, {top: 150, ease:Back.easeInOut},.2, .7);






/*

var controller = new ScrollMagic({
	globalSceneOptions: {
		triggerHook: "onLeave"
	}
});

var attractionstween = TweenMax.staggerFromTo(
	'#attractions article', 
	1, 
	{opacity :0, scale: 0}, 
	{delay:1, scale:1, ease: Back.easeOut});

var scene = new ScrollScene({
	triggerElement: "#attractions"
}).setTween(attractionstween).addTo(controller);

var pin = new ScrollScene({
	triggerElement: '#nav',
}).setPin('#nav').addTo(controller);

var roomOrigin = {
	bottom:-700,
	opacity:0,
	scale:0
}
var roomDest = {
	repeat:1,
	yoyo:true,
	bottom:0,
	opacity:1,
	scale:1,
	ease:Back.easeOut
}
var roomtween = TweenMax.staggerFromTo(
	"#westmimster .content",1, roomOrigin, roomDest);

	var pin = new ScrollScene({
		triggerElement: "westminster",
		offset: -topoffset,
		duration:500
	}).setPin("#westminster").setTween(roomtween).addTo(controller)

	*/