var age = document.getElementById("age");
var height = document.getElementById("height");
var male = document.getElementById("m");
var female = document.getElementById("f");
var form = document.getElementById("form");
let resultArea = document.querySelector(".comment");

modalContent = document.querySelector(".modal-content");
modalText = document.querySelector("#modalText");
var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];


function calculate(){
 
  if(age.value=='' || height.value==''|| (male.checked==false && female.checked==false)){
    modal.style.display = "block";
    modalText.innerHTML = `All fields are required!`;

  }else{
    countBmi();
  }

}


function countBmi(){
  var p = [height.value];
  if(male.checked){
    p.push("male");
  }else if(female.checked){
    p.push("female");
  }


  var bmi = 0;
  var result = '';
    if (age.value>=1 && age.value<=1.9){
      if (male.checked==true){
      bmi = p[0]/15.9*100;
      }
      else if (female.checked==true) {
        bmi = p[0]/15.6*100;
      }
    }
    else if (age.value>=2 && age.value<=2.9){
      if (male.checked==true){
        bmi = p[0]/16.2*100;
      }
      else if (female.checked==true) {
        bmi = p[0]/16*100;
      }
    }
    else if (age.value>=3 && age.value<=3.9){
      if (male.checked==true){
        bmi = p[0]/16.7*100;
      }
      else if (female.checked==true) {
        bmi = p[0]/16.7*100;
      }
    }
    else if (age.value>=4 && age.value<=4.9){
      if (male.checked==true){
        bmi = p[0]/17.1*100;
      }
      else if (female.checked==true) {
        bmi = p[0]/16.9*100;
      }
    }
    else if (age.value>=5 && age.value<=5.9){
      if (male.checked==true){
        bmi = p[0]/17.5*100;
      }
      else if (female.checked==true) {
        bmi = p[0]/17.3*100;
      }
    }
    else if (age.value>=6 && age.value<=6.9){
      if (male.checked==true){
        bmi = p[0]/17.9*100;
      }
      else if (female.checked==true) {
        bmi = p[0]/17.6*100;
      }
    }
    else if (age.value>=7 && age.value<=7.9){
      if (male.checked==true){
        bmi = p[0]/18.7*100;
      }
      else if (female.checked==true) {
        bmi = p[0]/18.3*100;
      }
    }
    else if (age.value>=8 && age.value<=8.9){
      if (male.checked==true){
        bmi = p[0]/19*100;
      }
      else if (female.checked==true) {
        bmi = p[0]/19.5*100;
      }
    }
    else if (age.value>=9 && age.value<=9.9){
      if (male.checked==true){
        bmi = p[0]/20*100;
      }
      else if (female.checked==true) {
        bmi = p[0]/20*100;
      }
    }
    else if (age.value>=10 && age.value<=10.9){
      if (male.checked==true){
        bmi = p[0]/21*100;
      }
      else if (female.checked==true) {
        bmi = p[0]/21*100;
      }
    }
    else if (age.value>=11 && age.value<=11.9){
      if (male.checked==true){
        bmi = p[0]/22.3*100;
      }
      else if (female.checked==true) {
        bmi = p[0]/22.4*100;
      }
    }
    else if (age.value>=12 && age.value<=12.9){
      if (male.checked==true){
        bmi = p[0]/23.2*100;
      }
      else if (female.checked==true) {
        bmi = p[0]/23.7*100;
      }
    }
    else if (age.value>=13 && age.value<=13.9){
      if (male.checked==true){
        bmi = p[0]/24.7*100;
      }
      else if (female.checked==true) {
        bmi = p[0]/25.2*100;
      }
    }
    else if (age.value>=14 && age.value<=14.9){
      if (male.checked==true){
        bmi = p[0]/25.3*100;
      }
      else if (female.checked==true) {
        bmi = p[0]/25.2*100;
      }
    }
    else if (age.value>=15 && age.value<=15.9){
      if (male.checked==true){
        bmi = p[0]/26.4*100;
      }
      else if (female.checked==true) {
        bmi = p[0]/25.4*100;
      }
    }
    else if (age.value>=16 && age.value<=16.9){
      if (male.checked==true){
        bmi = p[0]/27.8*100;
      }
      else if (female.checked==true) {
        bmi = p[0]/25.8*100;
      }
    }
    else if (age.value>=17 && age.value<=17.9){
      if (male.checked==true){
        bmi = p[0]/28.5*100;
      }
      else if (female.checked==true) {
        bmi = p[0]/26.5*100;
      }
    }
    else if (age.value>=18 && age.value<=18.9){
      if (male.checked==true){
        bmi = p[0]/29.7*100;
      }
      else if (female.checked==true) {
        bmi = p[0]/25.8*100;
      }
    }
    else if (age.value>=19 && age.value<=24.9){
      if (male.checked==true){
        bmi = p[0]/30.8*100;
      }
      else if (female.checked==true) {
        bmi = p[0]/26.5*100;
      }
    }
    else if (age.value>=25 && age.value<=34.9){
      if (male.checked==true){
        bmi = p[0]/31.4*100;
      }
      else if (female.checked==true) {
        bmi = p[0]/27.7*100;
      }
    }
    else if (age.value>=35 && age.value<=44.9){
      if (male.checked==true){
        bmi = p[0]/32.6*100;
      }
      else if (female.checked==true) {
        bmi = p[0]/29*100;
      }
    }
    else if (age.value>=45 && age.value<=54.9){
      if (male.checked==true){
        bmi = p[0]/32.2*100;
      }
      else if (female.checked==true) {
        bmi = p[0]/29.9*100;
      }
    }
    else if (age.value>=55 && age.value<=64.9){
      if (male.checked==true){
        bmi = p[0]/31.7*100;
      }
      else if (female.checked==true) {
        bmi = p[0]/30.3*100;
      }
    }
    else if (age.value>=65){
      if (male.checked==true){
        bmi = p[0]/30.7*100;
      }
      else if (female.checked==true) {
        bmi = p[0]/29.9*100;
      }
    }
    else{
      bmi = 'undefined';
    }

    if(bmi<70){
      result = 'Gizi Buruk';
      }
      else if(70.1<=bmi&&bmi<=84.9){
      result = 'Gizi Kurang';
      }
      else if(85<=bmi&&bmi<=110){
      result = 'Gizi Baik';
      }
      else if(111<=bmi&&bmi<=120){
      result = 'Overweight';
      }
      else if(bmi>120){
      result = 'Obesitas';
      }
      
      
    
  




resultArea.style.display = "block";
document.querySelector(".comment").innerHTML = `Status Gizimu <span id="comment">${result}</span>`;
document.querySelector("#result").innerHTML = bmi.toFixed(2) + '%';

}





// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
