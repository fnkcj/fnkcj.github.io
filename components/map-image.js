class MapImage extends HTMLElement {
    constructor() {
        super();
        let imageSrc = "assets/" + mapname + "/" + this.getAttribute("name") + ".jpg";
        let imageUrl = url + "/assets/" + mapname + "/" + this.getAttribute("name") + ".jpg";

        this.innerHTML = 
        "<a href='" + imageUrl + "' target='_blank'>" +
        "<img src='" + imageSrc + "' loading='lazy'>" +
        "</a>";
    }
}

customElements.define("map-image", MapImage);