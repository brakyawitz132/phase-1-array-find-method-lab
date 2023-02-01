// code your solution here
const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"}
  ]

function superbowlWin(array) {
    const winObj = array.find(obj => obj.result==="W")
    // const winObj = array.find(function(element) {
    //    return element.result==="W"
    //})
    return winObj ? winObj.year : undefined
}

console.log(superbowlWin(record))
