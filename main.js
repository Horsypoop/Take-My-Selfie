var SpeechRecognition = window.webkitSpeechRecognition;
var recognition =  new SpeechRecognition();

function start(){
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
}

recognition.onresult = function run (event){

    console.log(event);

    var Content = event.results[0][0].transcript;
    console.log(Content);

    document.getElementById("textbox").innerHTML = Content;
    if(Content=="Take my selfie."){
        console.log("takeing selfie");
        speak();
    }
}

function speak(){
    var syinth = window.speechSynthesis;
    speach_data= "takeing Your selfie in 5 seconds";
    var uterthis= new SpeechSynthesisUtterance(speach_data);
    syinth.speak(uterthis);
    Webcam.attach(camera1);
    setTimeout(function(){
        take_snapshot();
        save();
    },5000);
}

Webcam.set({
    width:360,
    height:250,
    image_format:'png',
    png_quality:90
});

camera1=document.getElementById("camera");

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="selfie_image" src="'+data_uri+'">';
    });
}
function save(){
    link=document.getElementById("link");
    image=document.getElementById("selfie_image").src;
    link.href=image;
    link.click();
}