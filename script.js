function calculateAreaAndPerimeter() {
    let sideLength = document.getElementById('sideLength').value;
    let error = document.getElementById('error');
    let resultArea = document.getElementById('resultArea');
    let resultPerimeter = document.getElementById('resultPerimeter');

    if (sideLength <= 0 || isNaN(sideLength)) {
      error.innerHTML = "Masukan angka yang positif";
      resultArea.innerHTML = "";
      resultPerimeter.innerHTML = "";
    } else {
      error.innerHTML = "";
      let area = sideLength * sideLength;
      let perimeter = 4 * sideLength;
      resultArea.innerHTML = "Luas persegi tersebut adalah " + sideLength + " is: " + area;
      resultPerimeter.innerHTML = "Keliling persegi tersebut adalah " + sideLength + " is: " + perimeter;
    }
  }