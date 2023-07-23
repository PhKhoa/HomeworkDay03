const bigInt = require('big-integer');

function calculate(input) {
  const [numA, toantu, numB] = input.split(' ');

  const bigIntA = bigInt(numA);
  const bigIntB = bigInt(numB);

  let result;
  if (toantu == '+') {
    result = bigIntA.add(bigIntB);
  } else if (toantu == '*') {
    result = bigIntA.multiply(bigIntB);
  } else {
    console.log('Toán tử không hợp lệ. Vui lòng sử dụng "+" hoặc "*"');
    return;
  }
  console.log(result.toString());
}

const input = process.argv.slice(2).join(' ');
calculate(input);
