
      var app = {  

          initialize: function() {
              this.bindEvents();
          },
         
          bindEvents: function() { //Primero establecemos los eventos para los dos botones.
      
              var takePhoto = document.getElementById('takePhoto');
              takePhoto.addEventListener('click', app.takePhoto, false);
              var sendPhoto = document.getElementById('sendPhoto');
              sendPhoto.addEventListener('click', app.sendPhoto, false);
          },

          sendPhoto: function() {
              alert('Imagen enviada al servidor');
          },

          takePhoto: function(){
              navigator.camera.getPicture(app.onPhotoDataSuccess, app.onFail, { quality: 20, 
                  allowEdit: true, destinationType: navigator.camera.DestinationType.DATA_URL });
          },
//Para tomar la foto de la cámara hacemos uso del API de PhoneGap, creando
// las funciones de callback cuando la toma de la imagen tiene éxito (onPhotoDataSuccess)
// y cuando no (onFail)
          onPhotoDataSuccess: function(imageData) {
         
            var photo = document.getElementById('photo');

            photo.style.display = 'block';

            photo.src = "data:image/jpeg;base64," + imageData;

            var sendPhoto = document.getElementById('sendPhoto');
            sendPhoto.style.display = 'block';
            //Cuando tiene éxito mostramos la imagen tomada en el
            // elemento “img” del HTMLy cuando ocurre algún problema mostramos 
            //un alert con el error.
          },

          onFail: function(message) {
            alert('Failed because: ' + message);
          }

      };

     
