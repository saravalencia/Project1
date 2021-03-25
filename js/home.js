

function onClickMenu(){

document.getElementById("menu").classList.toggle("change");
document.getElementById("nav").classList.toggle("change");
document.getElementById("menu-bg").classList.toggle("change-bg");

}


const btnClick = document.getElementById("btn-click"); 

btnClick.addEventListener("click", function(){

    location.href = "highlights.html"; 

}); 

