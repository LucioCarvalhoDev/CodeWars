function alphabetPosition(text) {
    let codeStr = [];
    text.toLowerCase().split('').filter(char => /[a-z]/.test(char)).forEach(char => {
        codeStr.push(char)
    })
    return codeStr.join(' ');
}

console.log(alphabetPosition('k'))