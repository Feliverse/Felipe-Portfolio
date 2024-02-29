const palindrome = string => {
  string = string.toLowerCase().replace(/[^a-z]/g, '')  //convierte en minusculas y elimina espacios y caracteres especiales
  return string
        .split('') //convierte en array
        .reverse()  //invierte el array
        .join('')  //convierte en string
}

console.log(palindrome("A man, a plan, a canal, Panama!"));
console.log(palindrome("Amor, Roma"));
console.log(palindrome("racecar"));
console.log(palindrome("Oruro"));
console.log(palindrome("Was it a car or a cat I saw?")); 