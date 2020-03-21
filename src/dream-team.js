module.exports = function createDreamTeam(members) {
  if (Array.isArray(members)) {
 let arr = []
 for (let i of members) {
   if (typeof i === 'string') {
     let t = i.replace(/\s/g,"")
     arr.push(t[0].toUpperCase())
   }continue
 } console.log(arr)
 let result = arr.sort((a,b) => (a.charCodeAt(0)) > b.charCodeAt(0) ? 1 : -1)
 return result.join('').replace(/,/g,"")
} return false
}