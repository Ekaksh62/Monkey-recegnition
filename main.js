

Webcam.set({
    Width:350,
    height:300,
    image_formet : "png",
    png_quality:90
});

camera + document.getElementById("camera");

Webcam.attach( "#camera" );

function ts()
{
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="ci" src="'+data_uri+'"/>'
    });
}

console.log("ml5 version:", ml5.version);

classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/nSFhVED11/model.json",modelLoaded)

function modelLoaded() {
    console.log("Model L")
}
function check()
{
img = document.getElementById('ci'); 
classifier.classify(img, gotResult);
}

function gotResult(error, results) {
if(error) {
    console.error(error);
} else {
    console.log(results)
    document.getElementById("RON").innerHTML = results[0].label;
    document.getElementById("ROA").innerHTML = results[0].confidence.toFixed(1)*100+" % "
}
}