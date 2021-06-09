// (function () {
//     function scrollHorizontally(e) {
//         e = window.event || e;
//         var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
//         // document.getElementById('shrt-wrapper').scrollLeft -= (delta * 40); // Multiplied by 40
//         document.getElementById('shrt-wrapper').scrollLeft -= (delta * 80); // Multiplied by 40
//         e.preventDefault();
//     }
//     if (document.getElementById('shrt-wrapper').addEventListener) {
//         // IE9, Chrome, Safari, Opera
//         document.getElementById('shrt-wrapper').addEventListener('mousewheel', scrollHorizontally, false);
//         // Firefox
//         document.getElementById('shrt-wrapper').addEventListener('DOMMouseScroll', scrollHorizontally, false);
//     } else {
//         // IE 6/7/8
//         document.getElementById('shrt-wrapper').attachEvent('onmousewheel', scrollHorizontally);
//     }
// })();
/*
  creates a closure that does not pollute global space
*/

