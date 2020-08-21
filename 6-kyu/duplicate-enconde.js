function duplicateEncode(word) {

    return (word.toLowerCase().split("").map((elem, i, arr) => {
      
        let arr2 = [].concat(arr)
        arr2.splice(i,1);
      
        if (arr2.includes(elem)) {
            return ")";
        }
        return "(";
    })).join('')
  
}
  
console.log(duplicateEncode("aba"));