document.getElementById("header").innerHTML = mapname;

const changelogs_button = document.getElementsByClassName("changelogs")[0];
const changelogs_content = document.getElementsByClassName("logs")[0];

document.getElementById(mapname).classList.add("active");

document.getElementById("mapstyles").href = "css/" + mapname + ".css";

changelogs_button.addEventListener("click", function() {
    this.classList.toggle("active");
    if (changelogs_content.style.maxHeight){
        changelogs_content.style.maxHeight = null;
    } else {
        changelogs_content.style.maxHeight = changelogs_content.scrollHeight + "px";
    } 
});