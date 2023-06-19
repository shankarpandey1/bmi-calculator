function calculateBmi(height, weight) {
  console.log(height);
  height = Number(height) / 100;
  console.log(height);
    let result = Number(weight )/ (height * height);
  
    return result.toFixed(2);
  }

  export default calculateBmi;