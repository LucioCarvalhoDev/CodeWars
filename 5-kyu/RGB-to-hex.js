function rgb(r, g, b){

  let result = [];

  for (n in arguments) {

    let decN = arguments[n];

    if (decN < 0) decN = '0';
    if (decN > 255) decN = '255';
    
    let hexN = parseInt(decN, 10).toString(16);

    if (hexN.length == 1) hexN = '0'+hexN;

    result.push(hexN)
  }

  return result.join('').toUpperCase();
}

console.log(rgb(10,100,2550))