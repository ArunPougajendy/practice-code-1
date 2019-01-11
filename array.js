var data = [
  [ 'animals',
    [
      'dogs', ['Corgi', 'Sheltie'],
      'cats', ['Tabby','Black'],
      'pigs', ['Teacup']
    ]
  ],
  [ 'guitars',
    [
      'Fender', ['Telecaster', 'Stratocaster','Jazzmaster'],
      'Gibson', ["Gibson Flying-V", 'Firebird', 'Les Paul']
    ]
  ]
];

function objectifier(a){
  var arr ={}, temp =[],change={};object={},just=[];
  //var length = a.length;
    for ( var i = 0 ; i < length ; i ++)
    {
        arr[a[i][0]] = arr[a[i+1]];
    }
  
  a.forEach(function(data) {
            data.forEach(function(item) {
             temp.push(item);
            })            
            temp.forEach(function(one) {
      just.push(one);
      })
     })

 keys = Object.keys(arr);
  
  for (var j=0; j <just.length ; j++) {
      change[temp[1][j]] = temp[1][j+1];
      j++
  }
  arr[keys[0]] = change;
  for ( var i =0 ; i< temp.length; i++) {
  object[temp[3][i]] = temp[3][i+1];
      i++
  }
  arr[keys[1]] = object;

  //console.log(temp[5][3]);
  console.log(a.length)
return arr;
  
}
  
console.log(objectifier(data));