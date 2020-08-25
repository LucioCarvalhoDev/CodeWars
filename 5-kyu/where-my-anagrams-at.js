function anagrams(word, words) {
  
	let str1 = word.split('').sort().join("");
	let anagrs = [];

	words.forEach(elem => {
		if (str1 == elem.split('').sort().join('')) anagrs.push(elem);
	})
	
	return anagrs;
}

console.log(anagrams('love', ['evol', 'abacate', 'love']));