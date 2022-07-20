function disemvowel(str) {
    return str.split("")
        .map(cur => {
        return /[aeiou]/i.test(cur) ? "" : cur;
    }).join("");
}

console.log(disemvowel("Brasil"))