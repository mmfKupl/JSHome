var button = document.getElementById('button');
var list = document.getElementById('list');
var canvassrc = document.getElementById('src');
var canvasres = document.getElementById('res');
var image = document.getElementById('img');
var ctxsrc = canvassrc.getContext('2d');
ctxsrc.drawImage(image, 0, 0);

button.addEventListener('click', function () {
    var ctxres = canvasres.getContext('2d');
   if(list.value == 'sepia'){
       var sepia = function (imageData) {
           var pixels = imageData.data;
           for(var i = 0; i < pixels.length; i+= 4){
               var r = pixels[i];
               var g = pixels[i+1];
               var b = pixels[i+2];
               pixels[i] = (r*0.393)+(g*0.769)+(b*0.189);
               pixels[i+1] = (r*0.349)+(g*0.686)+(b*0.168);
               pixels[i+2] = (r*0.272)+(g*0.534)+(b*0.131);
           }
           return imageData;
       };

       var imageData = ctxsrc.getImageData(0, 0, 400, 600);
       var imageDataFiltred = sepia(imageData);
       ctxres.putImageData(imageDataFiltred, 0, 0);
   }
   else if(list.value == 'black-white'){
       var black_white = function (imageData) {
           var pixels = imageData.data;
           for(var i = 0; i < pixels.length; i+= 4){
               var r = pixels[i];
               var g = pixels[i+1];
               var b = pixels[i+2];
               pixels[i] = (r*0.2989)+(g*0.5870)+(b*0.1140);
               pixels[i+1] = (r*0.2989)+(g*0.5870)+(b*0.1140);
               pixels[i+2] = (r*0.2989)+(g*0.5870)+(b*0.1140);
           }
           return imageData;
       };

       var imageData = ctxsrc.getImageData(0, 0, 400, 600);
       var imageDataFiltred = black_white(imageData);
       ctxres.putImageData(imageDataFiltred, 0, 0);
   }
});







