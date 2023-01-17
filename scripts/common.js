document.getElementById('youtube').href = youtube;
document.getElementById('steam').href = steam;
document.getElementById('discord').href = discord;

function changePage(page) {
    if (!path.includes(url)) {
        if (page === "index") {
            location.href = url;
        } else {
            location.href = page;
        }
    } else {
        location.href = page + ".html";
    }
}