let arr = [
    {id:1},
    {id:2},
    {id:3},
]
function getNames(item){
    return item.id
}
console.log(arr.map(getNames));