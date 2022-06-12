function startClassification()
{
navigator.mediaDevices.getUserMedia({audio: true})
classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/S8H2XaobS/model.json", modelReady)
}

function modelReady()
{

classifier.classify(gotResults);

}

function gotResults(error, results)
{
if (error){
    console.error(error);
} else {
console.log(results);
random_number_r = Math.floor(Math.random() * 255) + 1;
random_number_g = Math.floor(Math.random() * 255) + 1;
random_number_b = Math.floor(Math.random() * 255) + 1;

document.getElementById("result_label").innerHTML = 'I can hear = '+ 
results[0].label;
document.getElementById("result_confidence").innerHTML = 'acuraccy - '+
(results[0].confidence* 100)+ " %";
document.getElementById("result_label").style.color = "rgb("
+random_number_r+","+random_number_g+","+random_number_b +")"
document.getElementById("result_confidence").style.color = "rgb("
+random_number_r+","+random_number_g+","+random_number_b +")"

img = document.getElementById('animal_1')
img1 = document.getElementById('aanimal_2')

if (result [0]. label == "meow")
{
img.src = 'cat-heart.gif';
 img1.src = 'Tetsuya_-2_with_Jersey_%28Ep.10_SC%29.webp';
}

else if (result [0]. label == "woff")
{
img.src = '2a0a1c17c5415e7f5dfed24a2a9982bb.jpg';
 img1.src = 'speechless-dog.gif';
}
}

}


