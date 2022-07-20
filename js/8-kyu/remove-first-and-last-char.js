function removeChar(str){
  
    return str.replace(/^./, "").replace(/.$/, "");
};
  
console.log(removeChar("AaaA"));