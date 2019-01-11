var obj = { a: 1, b: 2, c: 3 };

function entries(obj) {
    /*var output =[],key = [],value = [] ,final=[];
    key= Object.keys(obj);
    value=Object.values(obj);
    for(i=0; i < key.length ; i++) {
        ans=key[i]value[i];
        console.log(ans);
       /* output.push(key[i],value[i]);
        final.push(output);
    }
    console.log(final);
    
    //console.log(obj.Object.values[i]);
       //output.push(i,obj[i]);
  
  // for ( i = 1 ; i <)
  // return output;*/

  var output = [];
  for ( var key in obj) {
     //output.push(key ,obj[key]);
      output.push([key ,obj[key]]);
  }
  return output;
}

console.log(entries(obj));

