function addBigNumbers(a, b) {
    let carry = 0;
    let result = "";
  
    // Đảo chuỗi số để bắt đầu từ chữ số cuối cùng
    a = a.split("").reverse().join("");
    b = b.split("").reverse().join("");
  
    // Đảm bảo cùng độ dài của hai chuỗi số
    const maxLength = Math.max(a.length, b.length);
    a = a.padEnd(maxLength, "0");
    b = b.padEnd(maxLength, "0");
  
    for (let i = 0; i < maxLength; i++) {
      const sum = parseInt(a[i]) + parseInt(b[i]) + carry;
      carry = Math.floor(sum / 10);
      result += (sum % 10).toString();
    }
  
    if (carry) {
      result += carry.toString();
    }
  
    return result.split("").reverse().join("");
  }
  
  function multiplyBigNumbers(a, b) {
    let result = "0";
  
    // Đảo chuỗi số để bắt đầu từ chữ số cuối cùng
    a = a.split("").reverse().join("");
    b = b.split("").reverse().join("");
  
    for (let i = 0; i < a.length; i++) {
      let carry = 0;
      let tempResult = "";
  
      for (let j = 0; j < b.length; j++) {
        const product = parseInt(a[i]) * parseInt(b[j]) + carry;
        carry = Math.floor(product / 10);
        tempResult += (product % 10).toString();
      }
  
      if (carry) {
        tempResult += carry.toString();
      }
  
      tempResult = tempResult.split("").reverse().join("");
      tempResult += "0".repeat(i);
  
      result = addBigNumbers(result, tempResult);
    }
  
    return result;
  }
  
  function calculate(input) {
    const [numA, toantu, numB] = input.split(" ");
  
    let result;
    if (toantu == "+") {
      result = addBigNumbers(numA, numB);
    } else if (toantu == "*") {
      result = multiplyBigNumbers(numA, numB);
    } else {
      console.log("Toán tử không hợp lệ. Vui lòng sử dụng '+' hoặc '*'");
      return;
    }
    console.log(result);
  }
  
  const input = "1234567890123456789012345678 + 9234567891234567890098765432";
  calculate(input);