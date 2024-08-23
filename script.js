"use strict";
// Switch in different mode
let switchImperialMode = document
  .querySelector(".imperial-mode")
  .addEventListener("click", function () {
    document.querySelector(".imperial-section").classList.remove("hidden");
    document.querySelector(".metric-section").classList.add("hidden");
  });
let switchMetricMode = document
  .querySelector(".metric-mode")
  .addEventListener("click", function () {
    document.querySelector(".metric-section").classList.remove("hidden");
    document.querySelector(".imperial-section").classList.add("hidden");
  });
//calculate BMi-matric mode
function bmiMetric() {
  let cm = document.getElementById('metric-height-cm').value;
  let kg = document.getElementById('metric-weight-kg').value;
  if(cm && kg) { 
      let bmi = (kg / Math.pow(cm / 100, 2)).toFixed(1);
      const output = document.querySelector('.bmi-result-score');
      const result = document.querySelector('.bmi-result');
                // Set background color based on BMI
                if (bmi < 18.5) {
                    document.querySelector('.bmi-result').style.backgroundColor = '#0000FF';
                    output.textContent = `${bmi}-Underweight`;
                    document.querySelector('.bmi-result-title').style.color = '#ffff';
                } else if (bmi >= 18.5 && bmi <=24.9) {
                  document.querySelector('.bmi-result').style.backgroundColor = '#20bf55';
                  output.textContent = `${bmi}-Healthy Weight`; 
                  document.querySelector('.bmi-result-title').style.color = '#020000';
              }else if (bmi >= 25 && bmi <=29.9) {
                document.querySelector('.bmi-result').style.backgroundColor = '#fcf300';
                output.textContent = `${bmi}-Overweight`; 
                document.querySelector('.bmi-result-title').style.color = '#253347';

            }else if (bmi >= 30 && bmi <=34.9) {
              document.querySelector('.bmi-result').style.backgroundColor = '#f77f00';
              document.querySelector('.bmi-result-title').style.color = '#020000';
                
              output.textContent = `${bmi}-Obese Class I`; 
              document.querySelector('.bmi-result-title').style.color = '#FF0000';
              document.querySelector('.bmi-result-title').style.color = '#020000';
            } else if(bmi > 35 && bmi <=34.9) {
              document.querySelector('.bmi-result').style.backgroundColor = '#d90429';
              output.textContent = `${bmi}-Obese Class II`; 
              document.querySelector('.bmi-result-title').style.color = '#ffff';
            }else if(bmi >=40) {
              document.querySelector('.bmi-result').style.backgroundColor = '#800020';
              output.textContent = `${bmi}-Obese Class III`; 
              document.querySelector('.bmi-result-title').style.color = '#ffff';
}

  }
  
}
document.getElementById('metric-height-cm').addEventListener('input',  bmiMetric);
document.getElementById('metric-weight-kg').addEventListener('input', bmiMetric);
document.getElementById('metric-height-cm').addEventListener('reset',  bmiMetric);

//Imperial Section
// Convert Height to Inches 
function bmiImperial(){
let feet = parseInt(document.getElementById('imperial-height-ft').value) || 0;
let inches = parseInt(document.getElementById('imperial-height-in').value) || 0;
let totalInches = (feet * 12) + inches;
/*Convert weight to Ibs */
let stones = parseInt(document.getElementById('imperial-weight-st').value) || 0;
let lbs = parseInt(document.getElementById('imperial-weight-lbs').value) || 0;
let totalPounds = (stones * 14) + lbs;
/*BMI Formula */
let bmiValue = ((totalPounds / (totalInches * totalInches)) * 703).toFixed(1);
//return bmiValue;
const outputImperial = document.querySelector('.bmi-result-score');
    if (outputImperial) {
        outputImperial.textContent = bmiValue;
    }
    //Set background color based on BMI
                if (bmiValue < 18.5) {
                    document.querySelector('.bmi-result').style.backgroundColor = '#0000FF';
                    outputImperial.textContent = `${bmiValue}-Underweight`;
                      document.querySelector('.bmi-result-title').style.color = '#ffff';
                } else if (bmiValue >= 18.5 && bmiValue <=24.9) {
                  document.querySelector('.bmi-result').style.backgroundColor = '#20bf55';
                  outputImperial.textContent = `${bmiValue}-Healthy Weight`; 
                  document.querySelector('.bmi-result-title').style.color = '#020000';
              }else if (bmiValue >= 25 && bmiValue <=29.9) {
                document.querySelector('.bmi-result').style.backgroundColor = '#fcf300';
                outputImperial.textContent = `${bmiValue}-Overweight`; 
                document.querySelector('.bmi-result-title').style.color = '#253347';
            }else if (bmiValue >= 30 && bmiValue <=34.9) {
              document.querySelector('.bmi-result').style.backgroundColor = '#f77f00';
              outputImperial.textContent = `${bmiValue}-Obese Class I`; 
              document.querySelector('.bmi-result-title').style.color = '#020000';
            } else if(bmiValue > 35 && bmiValue <=34.9) {
              document.querySelector('.bmi-result').style.backgroundColor = '#d90429';
              outputImperial.textContent = `${bmiValue}-Obese Class II`; 
              document.querySelector('.bmi-result-title').style.color = '#ffff';
            }else if(bmiValue >=40) {
              document.querySelector('.bmi-result').style.backgroundColor = '#800020';
              outputImperial.textContent = `${bmiValue}-Obese Class III`; 
              document.querySelector('.bmi-result-title').style.color = '#ffff';
}
}
document.getElementById('imperial-height-ft').addEventListener('input', bmiImperial);
document.getElementById('imperial-height-in').addEventListener('input', bmiImperial);
document.getElementById('imperial-weight-st').addEventListener('input', bmiImperial);
document.getElementById('imperial-weight-lbs').addEventListener('input', bmiImperial);