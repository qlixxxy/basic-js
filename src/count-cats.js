module.exports = function countCats(matrix) {
let arr = []
for (let i of matrix) {
  arr.push(...i)
}
return arr.reduce((sum, item) => (item === "^^") ? sum += 1 : sum, 0)


};
