var a = [10,20,30,40,10,40];

function findDuplicate(arr)
{
    var dup = [];
for (var i = 0; i < arr.length; i++) {
for (var j = i + 1; j < arr.length; j++) {
if (arr[i] === arr[j] && dup.indexOf(arr[j]) === -1) {
dup.push(arr[j]);

}
}
}

return dup;
}

console.log(findDuplicate(a));