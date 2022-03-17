window.addEventListener( "load", init );

function init(){
  let images = preloadImages();

  // get copy function for
  let clipWhatsappLink = document.querySelector("#copy_whatsapp_link");
  clipWhatsappLink.addEventListener( "click", copyWhatsappLink );

  return;
}

function loadImage( source ){
  let _image = new Image();
  _image.src = source;
  return _image;
}

function preloadImages( ){
  let _imageSources = ["/images/projectImages/Furniture_Palace.jpg"];
  let images = new Array();
  _imageSources.forEach(element => {
    images.push( loadImage( element ) );
  });
  return images;
}

function copyWhatsappLink( ev ){
  let link = "https://wa.me/message/5P3DWSOX4PPYD1";
  navigator.clipboard.writeText( link ).then(
    () => {
      console.log( "link copied" );
    },
    () => {
      console.log( "failed to copy link" );
    }
  )
}
