const m = 15; 
const h = 5730;

module.exports = function dateSample(sampleActivity) {
  if (typeof sampleActivity === 'string') {
   let i = (parseFloat(sampleActivity) || parseInt(sampleActivity))
   console.log(i)
   if (typeof i === 'number' && i <= 15 && i > 0) {
     let result = Math.ceil(Math.log(m / i) * h / 0.693)
   return result
 } return false
} return false
};
