document.getElementsByTagName("title")[0].innerHTML = mapname;

/*

document.querySelector("[name='author']").content = "Funk";
document.querySelector("[name='description']").content = "Map download page for the codjumper map " + mapname;
document.querySelector("[name='keywords']").content = "codjumper, cod4, call, of, duty, 4, cj, custom, map, funk, " + mapname;

document.querySelector("[property='og:title']").content = mapname + " Download";
document.querySelector("[property='og:url']").content = url + "/" + mapname;
document.querySelector("[property='og:image']").content = document.getElementsByTagName("map-image")[0].getElementsByTagName("a")[0].href;

*/

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