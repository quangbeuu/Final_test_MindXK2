// Nhập vào một mảng các số nguyên, tìm cặp hai số liền kề có tích lớn nhất và trả về kết quả của phép nhân 2 số đó.
// Ví dụ: INPUT là [2, 3, -5, -2, 4] thì OUTPUT là 10 (cặp -5 và -2 có tích là 10)
// [JavaScript] Syntax Tips
// // Prints help message to the console
// // Returns a string

const inputArray = [2, 3, -5, -2, 4];

function adjacentElementsProduct(inputArray) {
  let max = 0;
  for (let i = 0; i < inputArray.length; i++) {
    console.log(inputArray[i] * inputArray[i + 1]);
    if (inputArray[i] * inputArray[i + 1] > max) {
      max = inputArray[i] * inputArray[i + 1];
    }
  }
  return max;
}

console.log(adjacentElementsProduct(inputArray));
