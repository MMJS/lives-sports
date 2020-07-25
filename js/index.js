// For image Slider


var i = 0; 			
var images = [];	
// Time Between Switch
var time = 6000;	
// Image List
images[0] = "img/banner-image1.jpg";
images[1] = "img/banner-image2.jpg";


// Change Image
function SlideImg(){
  document.getElementById('slide').src = images[i];
  if(i < images.length - 1){
    i++; 
  } else { 
    // Reset Back To O
    i = 0;
  }

  setTimeout("SlideImg()", time);
}

// Run function when page loads
window.onload=SlideImg;


const socket = io()

socket.on('details' ,(a)=>{

  console.log(a)
})
console.log("hello")