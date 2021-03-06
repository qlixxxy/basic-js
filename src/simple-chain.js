const chainMaker = {
  arr: [],
  
  getLength() {
    return this.arr.length
  },
  addLink(value) {
   this.arr.push(value)
   return this
  },
  removeLink(position) {
    if (position < 1 || typeof position !== 'number' || position > this.arr.length) {
      this.arr = []
      throw Error
    } this.arr.splice(position - 1, 1)
      return this
  },
  reverseChain() {
    this.arr.reverse()
    return this
  },
  finishChain() {
    let chain = this.arr.map((value,index) => `( ${value} )`).join('~~')
    this.arr = []
    return chain
  }
};

module.exports = chainMaker;
