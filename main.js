var SpeechRecognition = window.webkitSpeechRecognition; var recognition = new SpeechRecognition();

var Textbox = document.getElementById("textbox")

function start()

{
    Textbox.innerHTML = "";
    recognition.start();

}

recognition.onresult = function(envent) {

    console.log(envent);

    var Content = event.results[0][0].transcript;

    Textbox.innerHTML = Content;

    if (Content =="tire minha selfie") {
 console.log("foto")
        speak();

    }
}

function speak() {

    var synth = window.speechSynthesis;

    var speakeData = "Tirando sua selfie em 5 segundos"
    
    var utterThis = new SpeechSynthesisUtterance(speakeData);

    synth.speak(utterThis);

    Webcam.attach(camera);


setTimeout(function()

{
    take_snapshot();
    save()
},5000);

}

camera = document.getElementById("camera");Webcam.set({
    width:360,
    heigth:25,
    image_format : 'jpeg',
    jpeg_quality:90
});

function  take_snapshot ()
{
 Webcam.snap(function(data_url){
    document.getElementById("result").innerHTML = '<img id="selfie_image" src="'+data_uri+'"/>';

 });

}

function save()
{
    link = document.getElementById("links")
    image = document.getElementById("selfie_image").src ; 
    link.href = image;
    link.click();

}