function preload(){

}
function setup(){
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/QCtVSIvAY/model.json",modelloded);
}
function modelloded(){
    console.log("Model is working");
}
function draw(){
   image(video,0,0,300,300);
   classifier.classify(video,getResult);
}
function getResult(error,result){
    if(error){
        console.error(error)
    }
    else{
        console.log(result);
        document.getElementById("result_object").innerHTML = result[0].label;
        document.getElementById("result_accuracy").innerHTML = result[0].confidence.toFixed(3);
    }
}