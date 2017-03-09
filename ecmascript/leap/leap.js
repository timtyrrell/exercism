// on every year that is evenly divisible by 4
//
//   except every year that is evenly divisible by 100
//   unless the year is also evenly divisible by 400

export default function isLeapYear(year) {
  if (evenlyDivisibleBy(year, 4)) {
    if (evenlyDivisibleBy(year, 100)) {
      if (evenlyDivisibleBy(year, 400)) {
        return true
      }
      return false
    }
    return true
  }
  return false
}


function evenlyDivisibleBy(year, num) {
  return year % num ? false : true
}
