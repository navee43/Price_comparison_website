
let items = document.querySelectorAll('.box');
items.forEach(item=>{
  item.addEventListener('mousemove',(e)=>{
    let positionPx =e.x - item.getBoundingClientRect().left;
    let positionX = (positionPx / item.offsetWidth)*100;
    let positionPy = e.y - item.getBoundingClientRect().top;
    let positionY = (positionPy / item.offsetHeight)*100;

    item.style.setProperty('--rX' ,(.5)*(50 - positionY) + 'deg');
    item.style.setProperty('--rY' ,(.5)*(50 - positionX) + 'deg');
  })

  item.addEventListener('mouseout',()=>{
    item.style.setProperty('--rX','0deg');
    item.style.setProperty('--rY','0deg');
  })
})



let item2 = document.querySelectorAll('.product_box');
item2.forEach(item=>{
  item.addEventListener('mousemove',(e)=>{
    let positionPx =e.x - item.getBoundingClientRect().left;
    let positionX = (positionPx / item.offsetWidth)*100;
    let positionPy = e.y - item.getBoundingClientRect().top;
    let positionY = (positionPy / item.offsetHeight)*100;

    item.style.setProperty('--rX' ,(.5)*(50 - positionY) + 'deg');
    item.style.setProperty('--rY' ,(.5)*(50 - positionX) + 'deg');
  })

  item.addEventListener('mouseout',()=>{
    item.style.setProperty('--rX','0deg');
    item.style.setProperty('--rY','0deg');
  })
})





var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
      content.style.maxWidth = null;
    } else {
      content.style.maxHeight = "100px";
      content.style.maxWidth = "68rem";
      
    } 
  });
}









// the hero section part 

let bg = document.getElementById("bg");
let moon = document.getElementById("moon");
let mountain = document.getElementById("mountain");
let road = document.getElementById("road");
let text = document.getElementById("text");
window.addEventListener('scroll',function(){
    var value = window.scrollY;

    bg.style.top = value*.5+'px';
    moon.style.left = -value*.5 +'px';
    mountain.style.top = -value*.15 +'px';
    road.style.top = value*.15 + 'px';
    text.style.top = value*1 + 'px';
    

})


// focus on search bar

function focusSearchBar() {
   const searchBar = document.querySelector(".search");
  searchBar.scrollIntoView({ behavior: 'smooth' });

  // Once scrolled, wait for 0.5 seconds before focusing (to match scroll timing)
  setTimeout(function() {
      searchBar.focus();
  }, 1000); // Adjust this delay based on scroll speed

}




function print(){
  console.log("yes working");
}











// Show the loading spinner on page load
window.addEventListener('load', function() {
  const spinner = document.getElementById('loading-spinner');
  spinner.style.display = 'none'; // Hide the spinner when the page is fully loaded
});

// Show the loading spinner during navigation or reload
window.addEventListener('beforeunload', function() {
  const spinner = document.getElementById('loading-spinner');
  spinner.style.display = 'flex'; // Show the spinner when navigating away or reloading
});
