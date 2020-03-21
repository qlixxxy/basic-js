module.exports = function transform(arr) {
    if (!Array.isArray(arr)) throw Error('Arr is not defined');
        if (arr.length < 0) return arr;
        let a = []
        for (let i = 0; i < arr.length; i++){
            if (arr[i] === '--discard-next') {
                i++
            } else if (arr[i] === '--discard-prev') {
                a.pop()
            } else if (arr[i] === '--double-next') {
                a.push(arr[i+1])
            } else if (arr[i] === '--double-prev') {
                a.push(arr[i-1])
            } else {
                a.push(arr[i])
            }
        

        } return a.filter(j => j != undefined)
};



