let cart = [];

function addToCart(item){
  cart.push(item);
  document.getElementById("cartCount").innerText = cart.length;
  alert(item + " added to cart!");
}
//Region drop down
function selectRegion(element){
  document.getElementById("selectedRegion").innerHTML = element.innerText + ' <i class="fa fa-chevron-down"></i>';
}
//search food
function searchFood(value){
  let items = document.querySelectorAll(".food");
  items.forEach(item => {
    let text = item.innerText.toLowerCase();
    item.style.display = text.includes(value.toLowerCase()) ? "block" : "none";
  });
}

// Hamburger overlay menu
function toggleOverlayMenu(){
  let menu = document.getElementById("overlayMenu");
  if(menu.style.height === "0px" || menu.style.height === ""){
    menu.style.height = "calc(100vh - 60px)";
  } else {
    menu.style.height = "0";
  }
}