document.getElementById("header").innerHTML = mapname;
document.getElementById("title").innerHTML = mapname;

let youtubeElement = document.getElementById('youtube');
let steamElement = document.getElementById('steam');
let discordElement = document.getElementById('discord');

youtubeElement.href = youtube;
steamElement.href = steam;
discordElement.href = discord;

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