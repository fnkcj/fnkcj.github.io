class MapNavigation extends HTMLElement {
    constructor() {
        super();
        this.innerHTML =
        "<div id='mp_toxic' class='link' onclick='changePage(\"mp_toxic\")'>" +
            "<div class='name'>" +
                "<p>mp_toxic</p>" +
            "</div>" +
            "<div class='year'>" +
                "<p>2021</p>" +
            "</div>" +
        "</div>" +
        "<div id='mp_dark_final' class='link' onclick='changePage(\"mp_dark_final\")'>" +
            "<div class='name'>" +
                "<p>mp_dark_final</p>" +
            "</div>" +
            "<div class='year'>" +
                "<p>2020</p>" +
            "</div>" +
        "</div>" +
        "<div id='mp_mody_v4' class='link' onclick='changePage(\"mp_mody_v4\")'>" +
            "<div class='name'>" +
                "<p>mp_mody_v4</p>" +
            "</div>" +
            "<div class='year'>" +
                "<p>2019</p>" +
            "</div>" +
        "</div>";
    }
}

customElements.define("map-navigation", MapNavigation);