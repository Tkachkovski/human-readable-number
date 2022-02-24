module.exports = function toReadable (num) {
    let units = [
      'zero',
      'one',
      'two',
      'three',
      'four',
      'five',
      'six',
      'seven',
      'eight',
      'nine',
    ];
    
    let fromTenToTwelve = [
      'ten',
      'eleven',
      'twelve',
      'thirteen',
      'fourteen',
      'fifteen',
      'sixteen',
      'seventeen',
      'eighteen',
      'nineteen',
    ]
    
    let dozens = [
      'twenty',
      'thirty',
      'forty',
      'fifty',
      'sixty',
      'seventy',
      'eighty',
      'ninety'
    ]
  
    if (num < 10) {
      return units[num]
    } else if (num >= 10 && num < 20) {
      return fromTenToTwelve[num % 10]
    } else if (num >= 20 && num < 100 && num % 10 !== 0) {
      return `${dozens[Math.trunc(num / 10) - 2]} ${units[num % 10 ]}`
     
    } else if (num >= 20 && num < 100 && num % 10 === 0) {
      return `${dozens[Math.trunc(num / 10) - 2]}`
    }  else if (num  / 10 % 10 === 0) {
       return `${units[Math.trunc(num / 100)]} hundred`;
     
    }  else if (Math.trunc(num / 10 % 10) < 1) { 
      return `${units[Math.trunc(num / 100)]} hundred ${units[num % 10]}`;
      
    } else if (num / 10 % 10 !== 0 && Math.trunc(num / 10 % 10) !== 1 && num % 10 !== 0) {
       return `${units[Math.trunc(num / 100)]} hundred ${dozens[Math.trunc(num / 10 % 10) - 2]} ${units[num % 10]}`
      
    } else if (Math.trunc(num / 10 % 10) === 1)  {
      return `${units[Math.trunc(num / 100)]} hundred ${fromTenToTwelve[num % 10]}`
    } else if (num % 10 === 0) {
      return `${units[Math.trunc(num / 100)]} hundred ${dozens[(num % 100 / 10) - 2]}`
    }
}