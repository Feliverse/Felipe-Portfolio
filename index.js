const menuContainer = document.getElementById("mobile-nav");

let controller = false;
menuContainer.addEventListener("click", function () {
  document.querySelector(".desk").style.display = "flex";
  document.querySelector(".desk ul").style.listStyle = "none";
  document.querySelector(".desk ul").style.marginTop = "144px";
  
  document.querySelectorAll(".menu a").forEach(function(item) {
    item.style.textDecoration = "none";
    item.style.color = "black";
    item.style.fontWeight = "400px";
    item.style.size = "16px";
    item.style.fontFamily = "Poppins";
  })
  
  document.querySelectorAll(".menu li").forEach(function(item) {
    item.style.marginBottom = "30px";
  })
  
  document.querySelector(".desk").style.alignItems = "center";
  document.querySelector(".desk").style.justifyContent = "center";
  
  controller = true;
})