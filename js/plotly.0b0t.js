const url = "https://stats.minecraftservers.org/data/540862";

$(document).ready(function () {
    updatePlayerGraph();
});
	
function updatePlayerGraph() {
	Plotly.purge("plot");
	
    $.getJSON(url, function (json) {
        let onlineThisWeek = {
            x: json.online[1].data.map(e => new Date(e[0])),
            y: json.online[1].data.map(e => e[1]),
            name: "This Week",
            type: "line",
            line: {color: '#33FF00'}
        };

        let onlineLastWeek = {
            x: json.online[0].data.map(e => new Date(e[0])),
            y: json.online[0].data.map(e => e[1]),
            name: "Last Week",
            type: "line",
            visibility: "hidden",
            line: {color: '#A9A9A9'}
        };

        let data = [onlineLastWeek, onlineThisWeek];

        let layout = {
            height: "100%",
            font: {
                size: 10,
                color: 'white'
            },
            plot_bgcolor: 'transparent',
            paper_bgcolor: 'transparent',
            xaxis: {
                title: 'weekday',
                nticks: 7,
                tickformat: '%A'
            },
            yaxis: {
                title: 'players'
            },
            legend: {
                orientation: "h",
                yanchor: "bottom",
                y: 1.02,
                xanchor: "right",
                x: 1
            },
            margin: {
                l: 50,
                r: 50,
                b: 50,
                t: 50,
                pad: 4
            }
        }

        Plotly.newPlot("plot", data, layout);
    });

    window.setTimeout(updatePlayerGraph, 10 * 60 * 1000);
}