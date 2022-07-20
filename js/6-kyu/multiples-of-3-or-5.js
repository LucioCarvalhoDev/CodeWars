function multiples(number){
  
    let acc = 0;
    
    for (let i = 3; i < number; i++) {
      i % 3 == 0 || i % 5 == 0 ? acc+=i : "";
    }
    
    return acc;
}

console.log(multiples(20));