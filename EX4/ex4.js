const items = document.querySelectorAll("li");
function getRandomColor(){
    let r= Math.floor(Math.random()*256);
    let g= Math.floor(Math.random()*256);
    let b= Math.floor(Math.random()*256);
    return  `rgb(${r},${g},${b})`;
}
items.forEach(item => {
    item.addEventListener("click", function() {
      this.style.backgroundColor = getRandomColor();
    });
  });