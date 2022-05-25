document.getElementById("header").innerHTML = mapname;
document.getElementById("title").innerHTML = mapname;

let imageElements = document.getElementsByClassName('picture');

for (let i = 0; i < imageElements.length; i++) {
    addImage(imageElements[i].id);
}

let youtubeElement = document.getElementById('youtube');
let steamElement = document.getElementById('steam');
let discordElement = document.getElementById('discord');

youtubeElement.href = youtube;
steamElement.href = steam;
discordElement.href = discord;

document.getElementById(mapname).classList.add("active");
document.getElementById("mapstyles").href = "css/" + mapname + ".css";

function changePage(page) {
    location.href = page;
}

function addImage(name) {
    let img = document.createElement('img');
    let element = document.getElementById(name);

    img.src = "assets/" + mapname + "/" + name + ".jpg";
    img.classList = "image";
    img.loading = "lazy";

    element.href = url + "/assets/" + mapname + "/" + name + ".jpg";
    element.target = "_blank";
    element.appendChild(img);
}