var dog = 0;
var cat = 0;
var lion = 0;
var hen = 0;
function startClassification(){
  navigator.mediaDevices.getUserMedia({ audio:true});
  classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/o1sVp0Uqm/model.json', modelReady);
}
  function modelReady(){
      classifier.classify(gotResults);
  }
  function gotResults(error,results){
      if(error){
          console.error('got results');
      }
else{

          document.getElementById("dec").innerHTML ="dog detected - "+dog+",cat detected - "+cat+",lion detected - "+lion+",hen detected - "+hen;
          document.getElementById("dec").innerHTML =" I can hear the voice of  - " + results[0].label;

          img = document.getElementById("ear.gif")

         if( results[0].label == "Dog barking"){
             img.src ="Dogbarking.gif";

         }
         if( results[0].label == "Cat meowing"){
            img.src ="NAK7.gif";
         }
         if( results[0].label == "Lion roaling"){
            img.src ="lion-roar.gif";
         }
      
        if( results[0].label == "Hen cock"){
        img.src ="rooster-cockadoodledoo.gif";
      }
    }
    }
