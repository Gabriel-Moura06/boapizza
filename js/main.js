document.getElementById("menuIcon").addEventListener("click", function(event){
  console.log("oiii")
  var oi = document.getElementById("gab")
  oi.style.display = oi.style.display === 'block' ? 'none' : 'block';
  event.stopImmediatePropagation()
})

document.addEventListener("click", function(event){
    let menuContent = document.getElementById('menuContent');
    let menuIcon = document.getElementById('menuIcon'); 
    if(!menuIcon.contains(event.target)&& !menuContent.contains(event.target)) {
        menuContent.style.display = 'none'
    }
})