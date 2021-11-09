let search_bar = document.getElementsByClassName("search_icon");
let search_box = document.getElementById("search_box");

// search_bar.addEventListener("click",function(){
function openTextBox(){
    // search_box.value = "Hi";
    if(search_box.style.display==="none"){
        search_box.style.display="block";
        search_box.classList.add("openTextBox");
    }
    else
        search_box.style.display="none";
};