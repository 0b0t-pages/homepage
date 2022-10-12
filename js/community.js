$(function () {

    $.getJSON('https://api.namemc.com/server/0b0t.org/likes', function (data) {
        for (let index = 0; index < data.length; index++) {
            $('#namemc-server .players').append('<a href="https://namemc.com/'+data[index]+'" target="_blank"><img data-uuid="'+data[index]+'" src="https://crafatar.com/avatars/'+ data[index] +'?size=32&overlay"></a>');
        }
    })
});