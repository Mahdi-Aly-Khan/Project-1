// locomotive 
const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});

// gsap animations
gsap.from(".nav .nleft a,.nright",{
    // opacity:0,
    // duration:1,
    // y:-100,
    // // stagger:.3
    stagger: .2 , 
    y: 10, 
    duration: 1, 
    ease: Power2, 
    opacity: 0
})

Shery.textAnimate(".midtext h1", {
	style: 2,
	y: 10,
	delay: .3,
	duration: 2,
	ease: "cubic-bezier(0.23, 1, 0.320, 1)",
	multiplier: 0.1,
});

gsap.from(".sustainability, .mid, .rimg", {
	y: 50,
	opacity: 0,
	ease: Expo,
	duration: 1,
	stagger: .3,
})

Shery.imageEffect(".mid .midimg", {
	style: 3,
	config: { "uFrequencyX": { "value": 11.57, "range": [0, 100] }, "uFrequencyY": { "value": 4.96, "range": [0, 100] }, "uFrequencyZ": { "value": 45.45, "range": [0, 100] }, "geoVertex": { "range": [1, 64], "value": 18.7 }, "zindex": { "value": -9996999, "range": [-9999999, 9999999] }, "aspect": { "value": 0.75 }, "gooey": { "value": false }, "infiniteGooey": { "value": false }, "growSize": { "value": 4, "range": [1, 15] }, "durationOut": { "value": 1, "range": [0.1, 5] }, "durationIn": { "value": 1.5, "range": [0.1, 5] }, "displaceAmount": { "value": 0.5 }, "masker": { "value": true }, "maskVal": { "value": 1.5, "range": [1, 5] }, "scrollType": { "value": 0 }, "noEffectGooey": { "value": true }, "onMouse": { "value": 1 }, "noise_speed": { "value": 0.2, "range": [0, 10] }, "metaball": { "value": 0.2, "range": [0, 2] }, "discard_threshold": { "value": 0.5, "range": [0, 1] }, "antialias_threshold": { "value": 0.002, "range": [0, 0.1] }, "noise_height": { "value": 0.5, "range": [0, 2] }, "noise_scale": { "value": 10, "range": [0, 100] } },
})

Shery.imageEffect(".susimage img, .l-img img, .r-img img", {
	style: 5,
	config: { "a": { "value": 1.98, "range": [0, 30] }, "b": { "value": -0.69, "range": [-1, 1] }, "zindex": { "value": -9996999, "range": [-9999999, 9999999] }, "aspect": { "value": 0.6666666666666666 }, "gooey": { "value": false }, "infiniteGooey": { "value": false }, "growSize": { "value": 4, "range": [1, 15] }, "durationOut": { "value": 1, "range": [0.1, 5] }, "durationIn": { "value": 1.5, "range": [0.1, 5] }, "displaceAmount": { "value": 0.5 }, "masker": { "value": true }, "maskVal": { "value": 1.3, "range": [1, 5] }, "scrollType": { "value": 0 }, "geoVertex": { "range": [1, 64], "value": 1 }, "noEffectGooey": { "value": true }, "onMouse": { "value": 1 }, "noise_speed": { "value": 0.2, "range": [0, 10] }, "metaball": { "value": 0.2, "range": [0, 2] }, "discard_threshold": { "value": 0.5, "range": [0, 1] }, "antialias_threshold": { "value": 0.002, "range": [0, 0.1] }, "noise_height": { "value": 0.5, "range": [0, 2] }, "noise_scale": { "value": 10, "range": [0, 100] } },
})

gsap.from(".midimg img", {
	z: "7",
	opacity: 0,
	duration: 2,
	ease: Expo,
})

Shery.imageEffect(".packaging .packaging-img", {
	style: 4,
    config:{"uColor":{"value":false},"uSpeed":{"value":1,"range":[0.1,1],"rangep":[1,10]},"uAmplitude":{"value":1.37,"range":[0,5]},"uFrequency":{"value":0,"range":[0,10]},"geoVertex":{"range":[1,64],"value":41.88},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":1.1666666666666667},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":-0.032258064516129004}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":true},"growSize":{"value":2.39,"range":[1,15]},"durationOut":{"value":1.3,"range":[0.1,5]},"durationIn":{"value":1.75,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.12,"range":[1,5]},"scrollType":{"value":0},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2],"_gsap":{"id":29}},"discard_threshold":{"value":0.57,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":16.79,"range":[0,100]}},
    // debug:true,
	gooey: true,
})

document.querySelector(".btn button").addEventListener("mouseover", function(){
	gsap.to(".join video", {
		opacity: 1,
		duration: 1,
		ease: Power4,
	})
})

document.querySelector(".btn button").addEventListener("mouseleave", function(){
	gsap.to(".join video", {
		opacity: 0,
		duration: 1,
		ease: Power4,
	})
})