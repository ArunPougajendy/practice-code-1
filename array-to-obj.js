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
    ],
    [ 'arun',
      [
        'ice', ['a', 'b','c'],
        'cone', ["a Flying-V", 'b', 'c Paul']
      ]
    ]
  ];

  function objectifier(data) {
    var obj={},obj1={};
    
    for (var i=0;i<data.length;i++) {
        console.log(`i = ${i}`)
        for (var j=1 ; j<data[i].length;j++) {
                console.log(`j = ${j} `);
            for (var k=0 ; k<data[i][j].length;k++) {
                console.log(`k = ${k} `);
                obj1[data[i][j][k]]=data[i][j][k+1];
                obj[data[i][0]]=obj1
                k++;
            }
        }  
        obj1 = {}; 
    }
    return obj;

   
}

console.log(objectifier(data));