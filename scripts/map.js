document.getElementById("header").innerHTML = mapname;

document.getElementById('youtube').href = youtube;
document.getElementById('steam').href = steam;
document.getElementById('discord').href = discord;

document.getElementById(mapname).classList.add("active");
document.getElementById("mapstyles").href = "css/" + mapname + ".css";

function changePage(page) {
    let path = window.location.pathname;
    if (!path.includes("fnkcj")) {
        location.href = page;
    } else {
        location.href = page + ".html";
    }
}