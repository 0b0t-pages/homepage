const api = "https://api.mcsrvstat.us/2/0b0t.org";
const divServer = document.getElementById("server");

$(document).ready(function () {
    $.getJSON(api, function (json) {
        if (json.online === false) {
            divServer.innerHTML = "<div style='color: #A9A9A9'>Server is offline!</div>";
        } else {
            divServer.innerHTML = "<div style='color: #33FF00'>" + json.players.online + " Players online</div>";
        }
    });
});