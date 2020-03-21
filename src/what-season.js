module.exports = function getSeason(date) {
  if (date == undefined) {
    return 'Unable to determine the time of year!'
  }
  if (date.getMilliseconds() == 0) {
    throw Error
  }
  let k = date.getMonth()
  if (date.getMilliseconds) {
      if (k == 11 || k == 0 || k == 1) {
      return 'winter'
    } else if (k >= 2 && k <= 4) {
      return 'spring'
    } else if (k >= 5 && k <= 7) {
      return 'summer'
    } else if (k >= 8 && k <= 10) {
      return 'autumn'
    } else throw Error
  } throw Error
} 