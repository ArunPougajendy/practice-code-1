function firstElements(a,b){
	
    length = a.length;
        if(length == 0)
        {return a;}
        if (b < 0) 
        {return a}
        if(b)
        {
            return a.slice(0,b);
        }
        else
        {
            return a[0];
        }
    }

console.log(firstElements([7, 9, 0, -2])) ; // returns 7 
console.log(firstElements([],3)); // returns []
console.log(firstElements([7, 9, 0, -2],3)); // returns [7, 9, 0] 
console.log(firstElements([7, 9, 0, -2],6)); // returns [7, 9, 0, -2] 
console.log(firstElements([7, 9, 0, -2],-3));// returns [7,9,0,-2]