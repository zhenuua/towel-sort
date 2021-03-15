module.exports = function towelSort (matrix) {
  if (!matrix) {
    return []
  }
  result = [];
  for (let i = 0; i < matrix.length; i++){
    let c = matrix[i]
    if (i % 2 === 0){
      result.push(...c)
    } else {
    for (let j = c.length - 1; j >= 0; j--){
      result.push(c[j])
    }
  }
}
   return result
  }