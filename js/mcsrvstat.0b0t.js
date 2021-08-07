const api = "https://api.mcsrvstat.us/2/0b0t.org";
const divServer = document.getElementById("server");
const divPlayers = document.getElementById("players");

$(document).ready(function () {
    updatePlayerList();
});

function updatePlayerList() {
    divServer.innerHTML = "";
    divPlayers.innerHTML = "";
    divPlayers.classList.remove("playersScrollbar");

    $.getJSON(api, function (json) {
        if (json.online === false) {
            divServer.innerHTML = "<div style='color: #A9A9A9'>Server is offline</div>";
        } else {
            divServer.innerHTML = "<div style='color: #33FF00'>" + json.players.online + " Players online</div>";

            if (json.players.uuid !== null) {
                jQuery.each(json.players.uuid, function (name, uuid) {
                    divPlayers.innerHTML += "<div class='player'><img src='https://mc-heads.net/avatar/" + uuid + "/16' alt='playerhead'><a href='https://namemc.com/" + name + "' target='_blank'>" + name + "</a></div>"
                });

                divPlayers.classList.add("playersScrollbar");
            }
        }
    });

    window.setTimeout(updatePlayerList, 30 * 1000);
}