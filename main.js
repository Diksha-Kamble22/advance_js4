
function windowResize() {
  console.log ("windowResize...");
}


function doubleClick(){
console.log("double click ...");
}
function rightClick() {
console.log("right click ...");
}
function mouseHover() {
console.log("mouse hover ...");
}
function mouseOut() {
console.log("mouse out ...");
}
function keyPress() {
console.log("key press ...");
}
function windowResize() {
console.log("window resize ...");
}
function windowScroll() {
console.log("window scroll ...");
}


function openWindow (){
  window.open ("https://m.youtube.com/watch?v=3GzjWp6bmzU&feature=youtu.be","newWindow","menubar=true,location = true , resizable = false ,scrollbars = false,top=100px,left=200px,width = 300px, height = 300px");
}
 
 function moveWindow (){
   openWindow.moveBy (0,100);
   openwindow.focus();
 }

function resizeHeightFunction() {
  var windowsize = window.innerHeight;
   console.log(windowsize);
  
  var windowOutersize = window.outerHeight;
   console.log(windowOutersize);
   
   console.clear();
}
