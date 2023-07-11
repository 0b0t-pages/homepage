
$( function() {
  let ylevelInput = $( "#amount" )
  let slider = $( "#slider" )

  slider.slider({
      value:65,
      min: 1,
      max: 256,
      step: 1,
      slide: function( event, ui ) {
        ylevelInput.val( ui.value );
        updateRenderImage(ui.value)
      }
  });
  ylevelInput.val( slider.slider( "value" ) );

  ylevelInput.on('keyup', function() {
    let value = this.value;
    if (value !== '') {
      value = parseFloat(value);
      
      if (value < 1)
          value = 1;
      else if (value > 256)
          value = 256;

      slider.slider( "value", value );
      ylevelInput.val(value);
      updateRenderImage(value);
    }
  });

  const dir = "img/spawnrender/"; // folder location
  const fileextension = ".png"; // image format
  let i = "1";

  $(function imageloop(){
    let img = $("<img />").attr('src', dir + i + fileextension ).addClass('y'+i);
    if (i==65){
      img.addClass('active');
    }
    img.appendTo(".scene");
    if (i<256){
      i++;
      imageloop();
    }
  });

});

function updateRenderImage(val) {
  $('.scene img').removeClass('active');
  $('.scene img.y'+val).addClass('active');
}