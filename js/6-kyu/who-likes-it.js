function likes(names) {
  
    if (names.length == 0) return "no one likes this";
    if (names.length == 1) return `${names[0]} likes this`;
    if (names.length == 2) return `${names[0]} and ${names[1]} like this`;
    if (names.length == 3) {
        return (`${names.join(", ").replace(/, (?=[a-z0-9]*$)/i, " and ")} like this`)
    } 

    return `${names.slice(0, 2).join(", ")} and ${names.length - 2} others like this`
    
}