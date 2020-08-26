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
    elementSlideIn("#watermark");
    // elementSlideIn("#menu_button");
    
    elementAppear("#side_text");
    textAppear("#my_name");
    
    elementsSlideUp("#links .box")
});

function textAppear(id /*Must be string*/, callback){ 
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
            duration: 500,
            delay: (el, i) => 50 * (i+1)
        });

    animation.finished.then(callback)
}

function elementAppear(id /*Must be string*/, callback){
    el = document.querySelector(id);
    let animation = anime.timeline({loop: false})
        .add({
            targets: id,
            opacity: [0,1],
            rotateX: [-90,0],
            rotateY: [10, 0],
            easing: "easeInOutQuad",
            duration: 800
        });
    
    animation.finished.then(callback)
}

function elementSlideIn(id, callback){
    el = document.querySelector(id);

    let animation = anime.timeline({loop: false})
        .add({
            targets: el,
            opacity: [0,1],
            translateX: [-50, 0],
            easing: "easeInOutQuad",
            duration: 500
        });

    animation.finished.then(callback)
}

function elementsSlideUp(elements, callback){

    let animation = anime.timeline({loop: false})
        .add({
            targets: elements,
            opacity: [0,1],
            translateY: [-50, 0],
            easing: "easeInOutQuad",
            duration: 200,
            delay: (elements, i) => 50 * (i+1)
        });

    animation.finished.then(callback)
}
