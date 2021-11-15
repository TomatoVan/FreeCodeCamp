let sampleWord = "astronaut";
let pwRegex = /(?=\w{6,})(?=\D+\d\d)/; 
let result = pwRegex.test(sampleWord);