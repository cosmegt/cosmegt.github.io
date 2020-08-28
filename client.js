function ready(callback){
	// in case the document is already rendered
	if (document.readyState!='loading') callback();
	// modern browsers
	else if (document.addEventListener) document.addEventListener('DOMContentLoaded', callback);
	// IE <= 8
	else document.attachEvent('onreadystatechange', function(){
		if (document.readyState=='complete') callback();
	});
}

// Start
ready(function(){
	document.getElementById("open").addEventListener("click", openMenu, false);
	openHome();

});

function openHome(){
	elementsSlideIn("#watermark");
	
	elementAppear("#side_text");
	textAppear("#my_name");
	
	elementsSlideUp("#links .box");
}

function openMenu(){
	openPage("menu_page");
	document.getElementById("open").removeEventListener("click", openMenu, false);
	let animation = anime.timeline({loop:false})
		.add({
			targets: "#menu_page",
			opacity: [0,1],
			duration: 100,
			easing: "linear",
			complete: () => {
				elementsSlideIn(".menu_item");
			}
		})
	document.getElementById("close").addEventListener("click", closeMenu, false)
}

function closeMenu(){
	document.getElementById("close").removeEventListener("click", closeMenu, false);
	elementsSlideOut(".menu_item", () => { 
			anime({
				targets: "#menu_page",
				opacity: [1,0],
				duration: 500,
				easing: "linear",
				complete: () => {
					closePage("menu_page")
				}
			})
		}
	)
	document.getElementById("open").addEventListener("click", openMenu, false)
}

/* 

Actions 

*/

function openPage(id){
	document.getElementById(id).style.display = "inherit";
}
function closePage(id){
	document.getElementById(id).style.display = "none";
}

function textAppear(id /*Must be string*/, callback){ 
	callback = (callback != undefined) ? callback : () => {return null};
	let wrapper = document.querySelector(id);
		wrapper.innerHTML = wrapper.textContent.replace(/\S/g, "<span class='char'>$&</span>");
	let el = id + " .char";

	let animation = anime.timeline({loop: false})
		.add({
			targets: el,
			opacity: [0,1],
			rotateY: [-90, 0],
			rotateX: [90,0],
			easing: "easeInOutQuad",
			duration: 1000,
			delay: (el, i) => 50 * (i+1),
			complete: function() {
				callback()
			}
		});
}

function elementAppear(id /*Must be string*/, callback){
	callback = (callback != undefined) ? callback : () => {return null};
	el = document.querySelector(id);
	let animation = anime.timeline({loop: false})
		.add({
			targets: id,
			opacity: [0,1],
			rotateX: [-90,0],
			rotateY: [10, 0],
			easing: "easeInOutQuad",
			duration: 900,
			complete: function() {
				callback()
			}
		});
}

function elementsSlideIn(id, callback){
	callback = (callback != undefined) ? callback : () => {return null};
	el = document.querySelectorAll(id);

	let animation = anime.timeline({loop: false})
		.add({
			targets: el,
			opacity: [0,1],
			translateX: [-50, 0],
			easing: "easeInOutQuad",
			duration: 800,
			delay: (elements, i) => 50 * (i+1),
			complete: function() {
				callback()
			}
		});
}

function elementsSlideOut(id, callback){
	callback = (callback != undefined) ? callback : () => {return null};
	el = document.querySelectorAll(id);

	let animation = anime.timeline({loop: false})
		.add({
			targets: el,
			opacity: [1,0],
			translateX: [0, -50],
			easing: "easeInOutQuad",
			duration: 800,
			delay: (elements, i) => 50 * (i+1),
			complete: function() {
				callback()
			}
		});
}

function elementsSlideUp(elements, callback){
	callback = (callback != undefined) ? callback : () => {return null};

	let animation = anime.timeline({loop: false})
		.add({
			targets: elements,
			opacity: [0,1],
			translateY: [-50, 0],
			easing: "easeInOutQuad",
			duration: 200,
			delay: (elements, i) => 50 * (i+1),
			complete: function() {
				callback()
			}
		});
}
