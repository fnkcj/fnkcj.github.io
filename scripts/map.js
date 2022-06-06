document.getElementsByTagName("title")[0].innerHTML = mapname;

document.querySelector("[name='author']").content = "Funk";
document.querySelector("[name='description']").content = "Map download page for the codjumper map " + mapname;
document.querySelector("[name='keywords']").content = "codjumper, cod4, call, of, duty, 4, cj, custom, map, funk, " + mapname;

document.getElementById("header").innerHTML = mapname;

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