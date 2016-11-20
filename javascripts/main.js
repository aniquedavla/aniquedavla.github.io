//$().onready avoided because it would override onload
//when loaded
window.onload = function(){
        setDivSize();
}
//when window is resized.
window.onresize = function(){
        setDivSize();
}
setDivSize = function(){
    var element = document.getElementById("main-header");
    var headerHeight = window.getComputedStyle(element,null).getPropertyValue("height");
    console.log(headerHeight);
    heightString = headerHeight.replace(/\D/g,"");
    heightInt = parseInt(heightString);
    console.log(heightInt);
    var heightAvailable = (window.innerHeight) - heightInt;
    console.log(heightAvailable);
    var contentDiv = document.getElementById("page-content");
    $("#page-content").css({
        "height": heightAvailable
    });
}


// // function adjustStyle() {
// //      Height = viewport(height - element.offset.top - desired bottom message)

// //     var width = 0;
// //     // get the width.. more cross-browser issues
// //     if (window.innerHeight) {
// //         width = window.innerWidth;
// //     } else if (document.documentElement && document.documentElement.clientHeight) {
// //         width = document.documentElement.clientWidth;
// //     } else if (document.body) {
// //         width = document.body.clientWidth;
// //     }
// //     // now we should have it
// //     if (width < 600) {
// //         document.getElementById("myCSS").setAttribute("href", "_css/narrow.css");
// //     } else {
// //         document.getElementById("myCSS").setAttribute("href", "_css/main.css");
// //     }
// // }
//
